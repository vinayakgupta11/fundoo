import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import{NoteService} from '../../services/note-services/note.service';
import{UpdateNote } from '../../models/update.model'
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {
  isArchived='false';
  result: any;
  response: any;
  title = new FormControl();
  description = new FormControl();
  note: UpdateNote = new UpdateNote();

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private svc: NoteService,private dataSvc:DataService, private dialogRef: MatDialogRef< DisplayNotesComponent>){}
  ngOnInit() {
  }
  updateNote() {
    
    this.note = {
      title: this.title.value,
      description: this.description.value,
      noteId: this.data.id,
    }
    if((this.note.title == null) && (this.data.title != null))
    {
      this.note.title = this.data.title;
    }
    if((this.note.description == null) && (this.data.description != null))
    {
      this.note.description = this.data.description;
    }

    if((this.note.title == "") && (this.note.description == ""))
    {
      this.note.title = "both are empty";
      this.note.description = "both are empty";
    }
    this.dialogRef.close();
    let obj =
    {
      data: this.note,
      url: "updateNotes"
    }
    this.result = this.svc.PostwithToken(obj)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
  }


  restoreNote(noteid)
  {
    let restore = 
    {
      isDeleted : false,
      noteIdList : [noteid]
    }

    let options=
    {
      data : restore,
      url : 'trashNotes'
    }
    this.result = this.svc.PostwithToken(options)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
    this.dialogRef.close();
  }




  deleteForever(noteid)
  {
    let delFor = 
    {
      isDeleted : true,
      noteIdList : [noteid]
    }

    let options=
    {
      data : delFor,
      url : 'deleteForeverNotes'
    }
    this.result = this.svc.PostwithToken(options)
    this.result.subscribe((response) => {
      this.response = response;
      console.log("the result is ", this.response);
    });
    this.dataSvc.changeMessage("message from dialog");
    this.dialogRef.close();
  }

}
