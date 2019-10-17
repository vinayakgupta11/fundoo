import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { Color } from '../../models/color.models';
import { DialogueComponent } from '../dialogue/dialogue.component'
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data-services/data.service';


@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  TokenAuth: boolean = true;
  @Input() mess: any;
  notes: any;
  options: any;
  message: string;
  user: Color;
  public noteSelected;

  constructor(private noteService: NoteService, private dialog: MatDialog, private datasvc: DataService) { }

  ngOnInit() {
    this.getTrashNote();
  }
  openDialog(note) {
    console.log("the value of note is ", note);
    let dialogref = this.dialog.open(DialogueComponent,
      {
        data: {
          title: note.title,
          description: note.description,
          id: note.id,
          recycle: false
        }
      });
    dialogref.afterClosed().subscribe(result => {
      console.log("dialog result ", result);
    })
  }

  getTrashNote() {

    this.noteService.TrashNotesList(this.TokenAuth).subscribe((response: any) => {
      this.notes = response.data.data.reverse();

    }, (error) => {
      console.log(error);
    });
  }
  RestoreNotes(noteId) {
    this.user = {
      isDeleted: false,
      noteIdList: [noteId]
    }
    console.log(this.user);
    this.options = {
      data: this.user
    }
    this.noteService.RestoreNote(this.options, this.TokenAuth).subscribe((response) => {
      console.log(response);
      this.getTrashNote();

    }, (error) => {
      console.log(error);
    });
  }
  deleteNotesForever(noteId) {
    this.user = {
      isDeleted: true,
      noteIdList: [noteId]
    }
    this.options = {
      data: this.user
    }
    this.noteService.DeleteForever(this.options, this.TokenAuth).subscribe((response) => {
      console.log(response);
      this.getTrashNote();
    }, (error) => {
      console.log(error);
    });
  }
}
