import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note-services/note.service';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data-services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label-display',
  templateUrl: './label-display.component.html',
  styleUrls: ['./label-display.component.scss']
})
export class LabelDisplayComponent implements OnInit {

  constructor(private route : ActivatedRoute,private  noteService: NoteService,private dialog : MatDialog,private dataSvc:DataService) { }
  @Input() labelName : any;
  notes : any;
  notesByLabel : any;
  filteredRecords : any;
  component = "notesByLabel";
  TokenAuth:boolean= true;
  value:any;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.value = params['label'];
      this.getNotesByLabel();
      });
    this.getNotesByLabel();
    this.dataSvc.labdisplay.subscribe((res:any)=>
    { if(res!='save')
    {
      this.value=res;
      this.getNotesByLabel();
      res='save'
    }
    })
  }
  
getNotesByLabel() {
   
  let data={
    labelName: this.value
  }
  this.noteService.getNotesByLabel(data,this.TokenAuth).subscribe((response: any) => {
    this.notes = response.data.data;
    this.notes = this.filterData(response.data.data);
    this.notesByLabel = this.notes;
    this.notesByLabel.reverse();
  }, (error) => {
    console.log(error);
  });  
}

filterData(data)
{
  var result = data.filter(function(note)
  {
    return (note.isArchived == false || note.isDeleted == false );
  })
  return result;

}
}
