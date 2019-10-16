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
  
  colorArray: any = [
    {color:'#ECEEEE'}, {color:'#F28B82'}, {color:'#F7BC04'}, {color:'#FAF474'}, 
    {color:'#CBFF90'}, {color:'#AAFEEB'}, {color:'#CBF0F8'},{color: '#ADCBFA'},
    {color:'#D7AEFB'}, {color:'#FDCFE8'}, {color:'#E6C9A8'},{color: '#FFFFFF'}];

  constructor(private data: DataService,private noteService: NoteService) { }

  ngOnInit() {
    
    
  }
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  trashNote(card)
  { this.cardId=card.id;
    this.user={
    isDeleted:true,
    noteIdList: [this.cardId]
  }
  console.log(this.user);
  this.options={
    data: this.user,
    url: 'trashNotes'
  }
  this.noteService.PostwithToken(this.options).subscribe((response) => {
    console.log(response);
    this.messageEvent.emit(this.message)
  }, (error) => {
    console.log(error);
  });

  }



  ArchiveNote(card)
  { 
    console.log('xxxxxxxxxxxx',card);
    
    this.cardId=card.id;
    this.user={
    isArchived:true,
    noteIdList: [this.cardId]
  }
  console.log(this.user);
  this.options={
    data: this.user,
    url: 'archiveNotes'
  }
  this.noteService.PostwithToken(this.options).subscribe((response) => {
    console.log(response);
    this.messageEvent.emit(this.message)
  }, (error) => {
    console.log(error);
  });
 
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
    data: this.user,
    url: 'archiveNotes'
  }
  this.noteService.PostwithToken(this.options).subscribe((response) => {
    console.log(response);
    this.messageEvent.emit(this.message)
  }, (error) => {
    console.log(error);
  });

  }
// sendMessage1()
// {
//   this.messageEvent.emit(this.message);
// }
// action()
// {
//   this.data.changeMessage1("save");
// }
changeColor(card,colour)
{this.cardId=card.id;
  console.log("card",card, "color", colour);
 // this.cardId=card.id
  //this.card= card.id;
  this.user={
    color:colour,
    noteIdList: [this.cardId]

  }
  console.log(this.user);
  this.options={
    data: this.user,
    url: 'changesColorNotes'
  }
  this.noteService.PostwithToken(this.options).subscribe((response) => {
    console.log(response);
    this.messageEvent.emit(this.message)
  }, (error) => {
    console.log(error);
  });

}

}

