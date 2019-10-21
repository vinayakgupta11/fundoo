import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import{NoteService} from '../../services/note-services/note.service';
import{ LabelNote } from '../../models/label.models'
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  labelName = new FormControl();
  label:LabelNote;
  options:any;
  TokenAuth:boolean= true;
  labels:any;
  updateLabel: any = new FormControl();

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private  noteService: NoteService,private dataSvc:DataService, private dialogRef: MatDialogRef< DisplayNotesComponent>) { }

  ngOnInit() {
    this.GetLabelList();
  }
  done()
{
this.dialogRef.close();
}
onUpdateNoteLabel(labelId)
{
  this.label={
     label : this.updateLabel.value,
    id:labelId.id
  }
  this.options={
    data:this.label
  }
  console.log('update label', this.label);
  
  this.noteService.UpdateLabel(this.options,this.TokenAuth).subscribe((response) => {
    console.log(response);
    this.GetLabelList();
    this.dataSvc.LabelList('get labels')
  }, (error) => {
    console.log(error);
  });

}
  deleteLabel(labelId)
  {
    this.label={
      id:labelId.id
    }
   
    this.noteService.DeleteLabel(this.label,this.TokenAuth).subscribe((response) => {
      console.log(response);
      this.GetLabelList();
      this.dataSvc.LabelList('get labels')
    }, (error) => {
      console.log(error);
    });
  }
  addLabel()
  { this.label={
    label: this.labelName.value,
    isDeleted: false,
    userId:  localStorage.getItem('UserId')
  }
  this.options={
    data:this.label
  }
  this.noteService.AddLabel(this.options,this.TokenAuth).subscribe((response) => {
    console.log(response);
    this.GetLabelList();
    this.dataSvc.LabelList('get labels')
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
}
