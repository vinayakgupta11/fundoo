import { Component, OnInit } from '@angular/core';
import{NoteService} from '../../services/note-services/note.service';
import{Color} from '../../models/color.models';
import{DialogueComponent} from '../dialogue/dialogue.component'
import {MatDialog} from '@angular/material';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  notes:any;
  options:any;
  message:string;
  user:Color;
  public noteSelected;
  isArchived='true';

  constructor(private noteService: NoteService,private dialog : MatDialog,private datasvc: DataService) { }

  ngOnInit() {
    this.getArchiveNote();
    this.datasvc.currentMessage.subscribe((res)=>{
      this.getArchiveNote();

    })
  }
  openDialog(note)
{
  console.log("the value of note is ", note);
  let dialogref = this.dialog.open(DialogueComponent,
    {
      data : {
        title : note.title ,
        description : note.description,
        id : note.id,
        recycle : false
      }
    });
  dialogref.afterClosed().subscribe(result=> {
    console.log("dialog result ", result);
  })
}
  receiveMessage($event)
{
  this.message = $event;
  this.getArchiveNote();

}
FilterTrash(notes)
  {
    var newNote = notes.filter(function(note) {
      return (note.isDeleted==false );
    })
    //console.log("noteeeee", newNote);
    return newNote
    
  }
  getArchiveNote()
  {
    this.options = {
      url: 'getArchiveNotesList',
    }
    this.noteService.GetwithToken(this.options).subscribe((response:any)=>{
      //console.log("tyrashhhh",response);
      this.notes= response.data.data;
      this.notes=this.FilterTrash(this.notes);
      this.notes.reverse();
     
    },(error)=>{
      console.log(error);
    });      
  }
}
