import { Component, OnInit,Inject,Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  @Input() display: any;
  @Input() TypeIcon: any;
  TokenAuth: boolean = true;
  options:any
  DialogueIcon:any;
  result: any;
  text = new FormControl;
  response: any;
  title = new FormControl();
  description = new FormControl();
  note: UpdateNote = new UpdateNote();
  NoteVal:any;
  ShowCheckList: any;
  CheckListId: any;
  EmptyText: any;
  message:any;
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private svc: NoteService,private dataSvc:DataService, private dialogRef: MatDialogRef< DisplayNotesComponent>){}
  ngOnInit() {
    
    this.dataSvc.ChecklistMessage.subscribe((res: any) => {
      this.CheckListId = res.id;
      this.ShowCheckList = res.show;
    })
    this.dataSvc.dialogMessage.subscribe((res:any)=>
    {
      if(res!='')
      {
        this.NoteVal= res; 
        if(this.data.id== res[0].id)
        {
        this.data.color=res[0].color;
        }
        console.log('414111111111111',this.NoteVal);
      }  
    });
    this.dataSvc.dialogMessageArch.subscribe((res:any)=>
    {
      if(res!='save')
      {
        this.dialogRef.close();
        res='save';
      }
    })

    this.dataSvc.Icondisplay.subscribe((res:any)=>
    {
      this.DialogueIcon=res;

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
      this.GetNoteDetails(noteId);
     
      this.EmptyText = '';
      console.log(res);
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
    })

  }
  dellabelnotes(label, noteid) {
    let data = {
      id: label,
      noteId: noteid
    }
    this.svc.dellabnotes(data, this.TokenAuth).subscribe((response: any) => {
      this.GetNoteDetails(noteid);
      
    });
  }
  
  delreminder(reminderId, noteid) {
    let userr = {
      reminder: reminderId,
      noteIdList: [noteid]
    }
    let res =
    {
      data: userr
    }
    this.svc.delreminder(res, this.TokenAuth).subscribe((response: any) => {
      console.log('----', response);
      this.GetNoteDetails(noteid);      
    });
  }
  GetNoteDetails(card) {
    this.options = {
      noteIdList: [card]
    }
    this.svc.GetNoteDetailss(this.options, this.TokenAuth).subscribe((response: any) => {
      this.dataSvc.DialogMess(response.data.data);

    }, (error) => {
      console.log(error);
    });
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
    this.options= {
      data: this.note
    }
    this.result = this.svc.UpdateNotes(this.options,this.TokenAuth)
    this.result.subscribe((response) => {
      this.response = response;
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

    this.options={
      data : restore
    }
    this.result = this.svc.RestoreNote(this.options,this.TokenAuth)
    this.result.subscribe((response) => {
      this.response = response;
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

    this.options= {
      data : delFor,
    }
    this.result = this.svc.DeleteForever(this.options,this.TokenAuth)
    this.result.subscribe((response) => {
      this.response = response;
    });
    this.dataSvc.changeMessage("message from dialog");
    this.dialogRef.close();
  }

}
