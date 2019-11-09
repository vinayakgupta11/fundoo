import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { Color } from '../../models/color.models';
import { DataService } from '../../services/data-services/data.service'

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  TokenAuth:boolean= true;
  notes: any;
  options: any;
  message: string;
  user: Color;
  display:any;
  component='notess';
  component1='takenote';
  


  constructor(private noteService: NoteService, private data: DataService) { }

  ngOnInit() {
    this.getNote()
    this.data.currentMessage.subscribe((res) => {
        this.getNote();
      })
  }
  getNote() {
    this.noteService.GetNotesList(this.TokenAuth).subscribe((response: any) => {
      this.notes = response.data.data;
      console.log('-------',response);
      
      this.notes = this.FilterTrash(this.notes);
      this.notes.reverse();
    }, (error) => {
      console.log(error);
    });
  }

  FilterTrash(notes) {
    var newNote = notes.filter(function (note) {
      return (note.isDeleted == false && note.isArchived == false);
    })
    return newNote

  }

}
