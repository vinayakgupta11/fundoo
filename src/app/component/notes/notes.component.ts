import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { FormControl, Validators } from '@angular/forms';
import { Note } from '../../models/note.models';
import { DataService } from '../../services/data-services/data.service'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  isArchived='false';
  show: boolean = true;
  message: string;
  title = new FormControl;
  description = new FormControl;
  note: Note;
  options: any;
  notes: any;
  constructor(private noteService: NoteService, private data: DataService) { }

  ngOnInit() {

  }


  toggle() {
    this.show = !this.show;
  }
  //when hit on save button in icon component
  receiveMessage($event) {
    this.message = $event
    this.note = {
      title: this.title.value,
      description: this.description.value
    }
    console.log(this.note);
    this.options = {
      data: this.note,
      url: 'addNotes'
    }
    this.noteService.PostwithToken(this.options).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  //when hit on close button
  receive() {
    if (this.title.value == null && this.description.value == null) {
      this.toggle();
    }

    else if(this.title.value !== null && this.description.value !== null) {
      this.note = {
        title: this.title.value,
        description: this.description.value
      }
      console.log(this.note);
      this.options = {
        data: this.note,
        url: 'addNotes'
      }
      this.noteService.PostwithToken(this.options).subscribe((response) => {
        console.log(response);
        this.toggle();
        this.data.changeMessage("save");
      }, (error) => {
        console.log(error);
      });
    }



  }
  newMessage() {

  }


}
