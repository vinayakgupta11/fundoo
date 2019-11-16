import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import{Color} from '../../models/color.models';
import{NoteService} from '../../services/note-services/note.service';

@Component({
  selector: 'app-unarchive-icon',
  templateUrl: './unarchive-icon.component.html',
  styleUrls: ['./unarchive-icon.component.scss']
})
export class UnarchiveIconComponent implements OnInit {
  message:string="save"
  TokenAuth:boolean= true;
  notes:any;
  options:any;
  user:Color;
  public noteSelected;
  cardId:any;
  @Output() messageEvent= new EventEmitter<string>();
  @Input() CardId:any;

  constructor(private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
  }
  UnArchiveNote(card)
  {
    this.cardId=card.id;
    this.user={
    isArchived:false,
    noteIdList: [this.cardId]
  }
  console.log(this.user);
  this.options={
    data: this.user
  }
  this.noteService.UnArchiveNote(this.options,this.TokenAuth).subscribe((response:any) => {
    console.log(response);
    this.datasvc.changeMessage('save')
    this.datasvc. DialogMessArch(response.data)
    //this.messageEvent.emit(this.message)
  }, (error) => {
    console.log(error);
  });

  }
}
