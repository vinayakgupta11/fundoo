import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { Color } from '../../models/color.models';
import { DataService } from '../../services/data-services/data.service'
import{TestpipePipe} from '../../pipe/testpipe.pipe'

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent implements OnInit {
  TokenAuth:boolean= true;
  notes: any;
  options: any;
  message: string;
  user: Color;
  display:any;
  component='notess'
  FilterText:string;
  filteredRecords:any;
  filterPipe: TestpipePipe = new TestpipePipe();

  constructor(private noteService: NoteService, private datasvc: DataService) { }

  ngOnInit() {
    this.getNote()
    this.datasvc.currentMessage.subscribe((res) => {
        this.getNote();
      })
  }
  getNote() {
    this.datasvc.currentMessage.subscribe((res) => {
      this.FilterText = res
    });
    this.noteService.GetNotesList(this.TokenAuth).subscribe((response: any) => {
      this.notes = response.data.data;
      this.notes = this.FilterTrash(this.notes);
      this.filteredRecords=this.filterPipe.transform(this.notes,this.FilterText);
     
    }, (error) => {
      console.log(error);
    });
  }

  FilterTrash(notes) {
    var newNote = notes.filter(function (note) {
      return (note.isDeleted == false && note.isArchived == false);
    })
    return newNote

  }
}
