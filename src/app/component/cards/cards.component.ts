import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { Color } from '../../models/color.models';
import { DataService } from '../../services/data-services/data.service'
import { DialogueComponent } from '../dialogue/dialogue.component'
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() display:any;
  @Input() TypeIcon:any;
  TokenAuth:boolean= true;
  notes: any;
  options: any;
  message: string;
  user: Color;
  public noteSelected;
  cardId: any;
  constructor(private svc: NoteService, private datasvc: DataService, private dialog: MatDialog) { }
  ngOnInit() {
    this.datasvc.currentMessage.subscribe(message => this.message = message)
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
    // dialogref.afterClosed().subscribe(result=> {
    //   console.log("dialog result ", result);
    // })
  }
  getNotesId(note) {
    this.noteSelected = note;
    return note;
  }
  dellabelnotes(label, noteid) {
    let data = {
      id: label,
      noteId: noteid
    }
    this.svc.dellabnotes(data,this.TokenAuth).subscribe((response: any) => {
      this.datasvc.changeMessage("Hello from Sibling")
    });
  }
}
