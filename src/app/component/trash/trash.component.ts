import { Component, OnInit,Input } from '@angular/core';
import{NoteService} from '../../services/note-services/note.service';
import{Color} from '../../models/color.models';
import{DialogueComponent} from '../dialogue/dialogue.component'
import {MatDialog} from '@angular/material';
import { DataService } from 'src/app/services/data-services/data.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Input() mess:any;
  notes:any;
  options:any;
  message:string;
  user:Color;
  public noteSelected;

  constructor(private noteService: NoteService,private dialog : MatDialog,private datasvc: DataService) { }

  ngOnInit() {
    this.getTrashNote();
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
  
  getTrashNote()
  {
    this.options = {
      url: 'getTrashNotesList',
    }
    this.noteService.GetwithToken(this.options).subscribe((response:any)=>{
     // console.log("tyrashhhh",response);
      this.notes= response.data.data.reverse();
     
    },(error)=>{
      console.log(error);
    });      
  }
  RestoreNotes(noteId)
  {
    this.user={
      isDeleted:false,
      noteIdList: [noteId]
    }
    console.log(this.user);
    this.options={
      data: this.user,
      url: 'trashNotes'
    }
    this.noteService.PostwithToken(this.options).subscribe((response) => {
      console.log(response);
      this.getTrashNote();
     
    }, (error) => {
      console.log(error);
    });
  }
  deleteNotesForever(noteId)
  {
    
    
    this.user={
      isDeleted:true,
      noteIdList: [noteId]
    }
    this.options={
      data: this.user,
      url: 'deleteForeverNotes'
    }
    this.noteService.PostwithToken(this.options).subscribe((response) => {
      console.log(response);
      this.getTrashNote();
     // this.messageEvent.emit(this.message)
    }, (error) => {
      console.log(error);
    });

  }

}
