import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { FormControl } from '@angular/forms';
import { Note } from '../../models/note.models';
import { DataService } from '../../services/data-services/data.service'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() TypeIcon: any;
  TokenAuth: boolean = true;
  isArchived = 'false';
  show: boolean = true;
  message: string;
  title = new FormControl;
  description = new FormControl;
  note: Note;
  options: any;
  notes: any;
  colour:any = '#fff';
  titleM : any;
  descriptionM : any;
  constructor(private noteService: NoteService, private datasvc: DataService) { }

  ngOnInit() {
    this.datasvc.currentMessage.subscribe((res) =>{
      if(res=='save'){
      this.colour='#fff';}
      else
      {
        this.colour=res;
      }
    }
      
    );
  }

  toggle() {
    this.show = !this.show;
    
  }
  receive() {
    if (this.title.value == null && this.description.value == null &&  this.colour=='#fff') {
      this.toggle();
    }

    else if (this.title.value !== null && this.description.value !== null) {
      this.note = {
        title: this.title.value,
        description: this.description.value,
        color : this.colour,
      }
      console.log(this.note);
      this.options = {
        data: this.note
      }
      this.noteService.AddNote(this.options, this.TokenAuth).subscribe((response) => {
        console.log(response);
        
        this.toggle();
        this.titleM="";
    this.descriptionM = "";
        this.datasvc.changeMessage("save");
      }, (error) => {
        console.log(error);
      });
    }



  }
  newMessage() {

  }


}
