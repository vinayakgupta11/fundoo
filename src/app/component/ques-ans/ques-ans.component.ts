import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-services/data.service';
import { NoteService } from '../../services/note-services/note.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ques-ans',
  templateUrl: './ques-ans.component.html',
  styleUrls: ['./ques-ans.component.scss']
})
export class QuesAnsComponent implements OnInit {
  noteData: any;
  QuesValue = new FormControl;
  TokenAuth: boolean = true;

  constructor(private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
    this.datasvc.QuesMessage.subscribe((res) => {
      this.noteData = res;
      console.log('----', this.noteData);
    })
  }
  AddQues(id)
  { let user=
    {
      "message": this.QuesValue.value,
      "notesId": id
    }
    let options=
    {
      data:user
    }
    console.log('---',options);
    
    this.noteService.AddQuestion(options, this.TokenAuth).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    
  }

}
