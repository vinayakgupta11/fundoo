import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import { Color } from '../../models/color.models';
import { NoteService } from '../../services/note-services/note.service';
import { LabelNote } from '../../models/label.models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  @Input() MatMenuu: any;
  TokenAuth: boolean = true;
  notes: any;
  options: any;
  user: Color;
  public noteSelected;
  cardId: any;
  labels: any;
  label: LabelNote;
  notedetails: any;
  quesAnsView: any;
  checkbox: boolean = false;
  noteid: any;
  id="yes"

  @Input() CardId: any;

  constructor(private _snackBar: MatSnackBar,private router: Router, private datasvc: DataService, private noteService: NoteService) { }

  ngOnInit() {
    //console.log('----',this.CardId);

    this.GetLabelList();
    this.datasvc.LabelMessage.subscribe((res) => {
      this.GetLabelList();
    })
    this.datasvc.QuesMessage.subscribe((res) => {
      this.quesAnsView = res;
    })
  }
  ShowCheckBox(nid) {
    console.log('ff', nid);
    if (nid) {
      this.checkbox = !this.checkbox;
      let user = {
        "show": this.checkbox,
        "id": nid.id
      }
      this.datasvc.ChecklistService(user);
    }
    else {
      this.checkbox = !this.checkbox;
      this.datasvc.ChecklistServiceNotes(this.checkbox);

    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  trashNote(card) {
    this.cardId = card.id;
    this.user = {
      isDeleted: true,
      noteIdList: [this.cardId]
    }
    this.options = {
      data: this.user
    }
    this.noteService.TrashNote(this.options, this.TokenAuth).subscribe((response:any) => {
      // console.log(response);
      this.openSnackBar('successfully trashed',"Close");
      this.datasvc. DialogMessArch(response.data)
      this.datasvc.changeMessage('save')
    }, (error) => {
      this.openSnackBar('not trashed',"Close");
      console.log(error);
    });
  }
  NavigateToQuesAns(card) {
    this.router.navigate(['/questionAnswer/' + card.id]);
  }
  RestoreNotes(card) {
    this.cardId = card.id;
    this.user = {
      isDeleted: false,
      noteIdList: [this.cardId]
    }
    this.options = {
      data: this.user
    }
    this.noteService.RestoreNote(this.options, this.TokenAuth).subscribe((response:any) => {
      this.datasvc.changeMessage('save')
      this.datasvc. DialogMessArch(response.data)
      this.openSnackBar(' restored successfully',"Close");

    }, (error) => {
      this.openSnackBar('not restored',"Close");
      console.log(error);
    });
  }
  deleteNotesForever(card) {
    this.cardId = card.id;
    this.user = {
      isDeleted: true,
      noteIdList: [this.cardId]
    }
    this.options = {
      data: this.user
    }
    this.noteService.DeleteForever(this.options, this.TokenAuth).subscribe((response:any) => {
      console.log(response);
      this.openSnackBar(' deleted successfully',"Close");
      this.datasvc. DialogMessArch(response.data)
      this.datasvc.changeMessage('save')
    }, (error) => {
      console.log(error);
      this.openSnackBar(' NOt deleted ',"Close");
    });
  }
  GetLabelList() {
    this.noteService.GetLabelList(this.TokenAuth).subscribe((response: any) => {
      this.labels = response.data.details;
    }, (error) => {
      console.log(error);
    });
  }
  GetNoteDetails(card) {
    let options = {
      noteIdList: [card]
    }
    this.noteService.GetNoteDetailss(options, this.TokenAuth).subscribe((response: any) => {
      this.datasvc.DialogMess(response.data.data);
    }, (error) => {
      console.log(error);
    });
  }
  onOpenAddLabel(labelId) {
    console.log('ssssssss', labelId);
      this.label = {
        labelId: labelId.id,
        noteId: this.CardId.id
      }
      this.options = {
        data: this.label
      }
      this.noteService.addLabelToNotes(this.options, this.TokenAuth).subscribe((response: any) => {
        this.GetNoteDetails(this.CardId.id)
        this.datasvc.changeMessage('save')
      }, (error) => {
        console.log(error);
      });
  }
  onOpenAddLabelNotes(labelId) {
    this.datasvc.LabelListNotes(labelId)
  }
}
