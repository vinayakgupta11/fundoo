import { Component, OnInit,Input } from '@angular/core';
import{NoteService} from '../../services/note-services/note.service';
import{Color} from '../../models/color.models';
import{ DataService} from '../../services/data-services/data.service'
import{DialogueComponent} from '../dialogue/dialogue.component'
import {MatDialog} from '@angular/material';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  isArchived='false';
 
 
  notes:any;
  options:any;
  message:string;
  user:Color;
  public noteSelected;
  cardId:any;
  

  constructor(private noteService: NoteService,private data: DataService,private dialog : MatDialog) { }

  ngOnInit() {
    this.getNote();
    this.data.currentMessage.subscribe((res)=>{
      this.getNote();

    })

    // this.data.currentMessage1.subscribe((res)=>
    // {
    //   this.check();
    // })
     
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
  // dialogref.afterClosed().subscribe(result=> {
  //   console.log("dialog result ", result);
  // })
}

  
  getNotesId(note) {
    this.noteSelected=note;
    //console.log(this.noteSelected);
      return note;
}
receiveMessage($event)
{
  this.message = $event;
  this.getNote();

}

// receiveMessage($event) 
  // {
  //   this.message = $event
  //   this.user={
  //     color:"#ECEEEE",
  //     noteIdList: [this.noteSelected.id]

  //   }
  //   console.log(this.user);
  //   this.options={
  //     data: this.user,
  //     url: 'changesColorNotes'
  //   }
  //   this.noteService.PostwithToken(this.options).subscribe((response) => {
  //     console.log(response);
  //   }, (error) => {
  //     console.log(error);
  //   });

  // }
  
  
  getNote()
  {
    this.options = {
      url: 'getNotesList',
    }
    this.noteService.GetwithToken(this.options).subscribe((response:any)=>{
     // console.log(response);
      this.notes= response.data.data;
      this.notes=this.FilterTrash(this.notes);
     // console.log('abcbcbcbcbcbbcbcbc',this.notes);
      
      this.notes.reverse();
    },(error)=>{
      console.log(error);
    });      
  }

  FilterTrash(notes)
  {
    var newNote = notes.filter(function(note) {
      return (note.isDeleted==false && note.isArchived==false);
    })
    //console.log("noteeeee", newNote);
    return newNote
    
  }
//   check()
//   {
//     var data={
//       "color":"#ECEEEE",
// "noteIdList": [this.noteSelected.id]

//     }
//     console.log(data);
//     this.options={
//       data: this.data,
//       url: 'changesColorNotes'
//     }
//     this.noteService.PostwithToken(this.options).subscribe((response) => {
//       console.log(response);
//     }, (error) => {
//       console.log(error);
//     });

//   }

}
