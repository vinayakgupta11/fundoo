import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import{Color} from '../../models/color.models';
import{NoteService} from '../../services/note-services/note.service';


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  TokenAuth:boolean= true;
  message:string="save"
  notes:any;
  options:any;
  user:Color;
  public noteSelected;
  cardId:any;
  
  @Output() messageEvent= new EventEmitter<string>();
   @Input() card: any; 
   @Input() mess:any;
   @Input() noteid : any;
  
  constructor(private data: DataService,private noteService: NoteService) { }
  ngOnInit() { 
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  
}

