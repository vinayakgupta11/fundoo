import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import { Color } from '../../models/color.models';
import { NoteService } from '../../services/note-services/note.service';
import { LabelNote } from '../../models/label.models';
import { Router } from '@angular/router';

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
  checkbox:boolean=false;
  noteid:any;

  @Input() CardId: any;

  constructor(private router: Router, private datasvc: DataService, private noteService: NoteService) { }

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
  ShowCheckBox(nid)
  {
    this.noteid=nid.id
    this.checkbox= !this.checkbox;
    let user={
      "show": this.checkbox,
      "id": this.noteid
    }
    
    this.datasvc.ChecklistService(user);
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
    this.noteService.TrashNote(this.options, this.TokenAuth).subscribe((response) => {
     // console.log(response);
      this.datasvc.changeMessage('save')
    }, (error) => {
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
    this.noteService.RestoreNote(this.options, this.TokenAuth).subscribe((response) => {
      this.datasvc.changeMessage('save')

    }, (error) => {
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
    this.noteService.DeleteForever(this.options, this.TokenAuth).subscribe((response) => {
      console.log(response);
      this.datasvc.changeMessage('save')
    }, (error) => {
      console.log(error);
    });
  }

  GetLabelList() {
    this.noteService.GetLabelList(this.TokenAuth).subscribe((response: any) => {
      this.labels = response.data.details;

    }, (error) => {
      console.log(error);
    });

  }

  onOpenAddLabel(labelId) {
    this.label = {
      labelId: labelId.id,
      noteId: this.CardId.id
    }
    this.options = {
      data: this.label
    }
    this.noteService.addLabelToNotes(this.options, this.TokenAuth).subscribe((response: any) => {
      //  console.log(response);
      this.datasvc.changeMessage('save')
      //this.messageEvent.emit(this.messageLabels);
    }, (error) => {
      console.log(error);
    });
  }

}
