import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import{NoteService} from '../../services/note-services/note.service';
import{UpdateNote } from '../../models/update.model'
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private svc: NoteService,private dataSvc:DataService, private dialogRef: MatDialogRef< DisplayNotesComponent>) { }

  ngOnInit() {
  }

}
