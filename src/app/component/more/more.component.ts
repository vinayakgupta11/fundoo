import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import{Color} from '../../models/color.models';
import{NoteService} from '../../services/note-services/note.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {
  @Input() MatMenuu:any;
  TokenAuth:boolean= true;
  notes:any;
  options:any;
  user:Color;
  public noteSelected;
  cardId:any;
  @Input() CardId:any;

  constructor(private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
  }
  trashNote(card)
  { this.cardId=card.id;
    this.user={
    isDeleted:true,
    noteIdList: [this.cardId]
  }
  this.options={
    data: this.user
  }
  this.noteService.TrashNote(this.options,this.TokenAuth).subscribe((response) => {
    console.log(response);
    //this.messageEvent.emit(this.message)
    this.datasvc.changeMessage('save')
  }, (error) => {
    console.log(error);
  });
  }

  RestoreNotes(card) {
    this.cardId=card.id;
    this.user = {
      isDeleted: false,
      noteIdList: [this.cardId]
    }
    console.log(this.user);
    this.options = {
      data: this.user
    }
    this.noteService.RestoreNote(this.options, this.TokenAuth).subscribe((response) => {
      console.log(response);
      this.datasvc.changeMessage('save')

    }, (error) => {
      console.log(error);
    });
  }

  deleteNotesForever(card) {
    this.cardId=card.id;
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

}
