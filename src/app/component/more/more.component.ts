import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import{Color} from '../../models/color.models';
import{NoteService} from '../../services/note-services/note.service';
import{ LabelNote } from '../../models/label.models'

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
  labels:any;
  label:LabelNote;
 
  @Input() CardId:any;

  constructor(private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
   // console.log('---------',this.cardId);
    
    this.GetLabelList();
    this.datasvc.LabelMessage.subscribe((res)=>
    {
      this.GetLabelList();
    })
  }
  trashNote(card)
  { console.log('---------',card);
     this.cardId=card.id;
    this.user={
    isDeleted:true,
    noteIdList: [this.cardId]
  }
  this.options={
    data: this.user
  }
  this.noteService.TrashNote(this.options,this.TokenAuth).subscribe((response) => {
    console.log(response);
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

  GetLabelList()
{
  this.noteService.GetLabelList(this.TokenAuth).subscribe((response: any) => {
    this.labels = response.data.details;
    
  }, (error) => {
    console.log(error);
  });

}

onOpenAddLabel(labelId){
  this.label={
    labelId: labelId.id,
    noteId:this.CardId.id
  }
  this.options={
    data: this.label
  }
   this.noteService.addLabelToNotes(this.options, this.TokenAuth).subscribe((response: any) => {
    console.log(response);
    this.datasvc.changeMessage('save')
    //this.messageEvent.emit(this.messageLabels);
  }, (error) => {
    console.log(error);
  });
}

}
