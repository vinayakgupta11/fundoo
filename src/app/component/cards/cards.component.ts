import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { Color } from '../../models/color.models';
import { DataService } from '../../services/data-services/data.service'
import { DialogueComponent } from '../dialogue/dialogue.component'
import { MatDialog } from '@angular/material';
import { Remind } from '../../models/remind.models';
import { FormControl } from '@angular/forms';
import { NgxMasonryOptions } from 'ngx-masonry';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  public myOptions: NgxMasonryOptions = {
		transitionDuration: '0.8s'
	};
  @Input() display: any;
  @Input() TypeIcon: any;
  DialogueIcon: any;
  TokenAuth: boolean = true;
  text = new FormControl;
  notes: any;
  options: any;
  message: string;
  user: Color;
  userr: Remind
  public noteSelected;
  cardId: any;
  viewVal: any;
  ShowCheckList: any;
  EmptyText: any;
  CheckListId: any;
  constructor(private svc: NoteService, private datasvc: DataService, private dialog: MatDialog) { }
  ngOnInit() {
    this.datasvc.currentMessage.subscribe(message => this.message = message)
    this.datasvc.ViewMessage.subscribe((res) => {
      this.viewVal = res;
    })
    this.datasvc.ChecklistMessage.subscribe((res: any) => {
      this.CheckListId = res.id;
      this.ShowCheckList = res.show;
    })
  }
  DeleteCheckList(nId, cId) {
    this.options = {
      noteId: nId,
      checklistId: cId
    }
    this.svc.DeleteCheckList(this.options, this.TokenAuth).subscribe((res: any) => {
      console.log(res);
      this.GetNoteDetails(nId);
      this.datasvc.changeMessage('updated')
    })

  }
  UpdateCheckList(itemname, status, nId, cId) {
    if (status == 'open') {
      let user =
      {
        status: "close",
        itemName: itemname
      }
      this.options = {
        data: user,
        noteId: nId,
        checklistId: cId
      }
    }
    else {
      let user =
      {
        status: "open",
        itemName: itemname
      }
      this.options = {
        data: user,
        noteId: nId,
        checklistId: cId
      }
    }
    this.svc.UpdateCheckList(this.options, this.TokenAuth).subscribe((res: any) => {
      console.log(res);
      this.GetNoteDetails(nId);
      this.datasvc.changeMessage('updated')
    })
  }
  AddCheckList(noteId) {
    let user =
    {
      status: "open",
      itemName: this.text.value
    }
    this.options = {
      data: user,
      id: noteId
    }
    this.svc.AddCheckList(this.options, this.TokenAuth).subscribe((res: any) => {
      this.datasvc.changeMessage('added')
      this.GetNoteDetails(noteId);
      this.EmptyText = '';
      console.log(res);
    })
  }
  openDialog(note) {
    console.log("the value of note is ", note);
    let dialogref = this.dialog.open(DialogueComponent,
      {
        data: {
          title: note.title,
          description: note.description,
          id: note.id,
          reminder:note.reminder,
          collaborators:note.collaborators,
          color:note.color,
          noteLabels:note.noteLabels,
          noteCheckLists:note.noteCheckLists,
          recycle: false
        },
        panelClass: 'dialogueClass'
      });
      this.datasvc. DialogMessArch('save')
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
    this.svc.dellabnotes(data, this.TokenAuth).subscribe((response: any) => {
      this.GetNoteDetails(noteid);
      this.datasvc.changeMessage("Hello from Sibling")
    });
  }
  GetNoteDetails(card) {
    this.options = {
      noteIdList: [card]
    }
    this.svc.GetNoteDetailss(this.options, this.TokenAuth).subscribe((response: any) => {
      this.datasvc.DialogMess(response.data.data);

    }, (error) => {
      console.log(error);
    });
  }
  delreminder(reminderId, noteid) {
    this.userr = {
      reminder: reminderId,
      noteIdList: [noteid]
    }
    let res =
    {
      data: this.userr
    }
    this.svc.delreminder(res, this.TokenAuth).subscribe((response: any) => {
      console.log('----', response);
      this.GetNoteDetails(noteid)
      this.datasvc.changeMessage("Hello from Sibling")
    });
  }
}
