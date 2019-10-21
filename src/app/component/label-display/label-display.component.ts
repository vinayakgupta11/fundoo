import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note-services/note.service';
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-label-display',
  templateUrl: './label-display.component.html',
  styleUrls: ['./label-display.component.scss']
})
export class LabelDisplayComponent implements OnInit {

  constructor(private  noteService: NoteService,private dialog : MatDialog,private dataSvc:DataService) { }
  @Input() labelName : any;
  notes : any;
  notesByLabel : any;
  filteredRecords : any;
  component = "notesByLabel";
  TokenAuth:boolean= true;

  ngOnInit() {
    this.getNotesByLabel();
    this.dataSvc.currentMessage.subscribe((res:any)=>
    {
      this.getNotesByLabel();
    })
  }
  
getNotesByLabel() {
   
  this.dataSvc.currentMessage.subscribe((res:any) => {
   console.log("In ng on init",res);
   let data={
    labelName: res
  }
  console.log("fffffffffffffffffffffff",data.labelName);
  
  this.noteService.getNotesByLabel(data,this.TokenAuth).subscribe((response: any) => {
    this.notes = response.data.data;
    this.notes = this.filterData(response.data.data);
    this.notesByLabel = this.notes;
    this.notesByLabel.reverse();
    console.log("response........",response);
    console.log("notes..ddddddddddddddddd......",this.notesByLabel);      
  }, (error) => {
    console.log(error);
  });
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
