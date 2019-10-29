import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-services/data.service';
import { NoteService } from '../../services/note-services/note.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ques-ans',
  templateUrl: './ques-ans.component.html',
  styleUrls: ['./ques-ans.component.scss']
})
export class QuesAnsComponent implements OnInit {
  noteData: any;
  QuesValue = new FormControl;
  TokenAuth: boolean = true;
  options:any;
  notedetails:any;
  quesToken:any

  constructor( private route: ActivatedRoute,private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
    this.quesToken = this.route.snapshot.paramMap.get('noteId');
    this.GetNoteDetails(this.quesToken);
  }

  GetNoteDetails(card)
  {
    this.options={
      noteIdList: [card]
    }
    this.noteService.GetNoteDetailss(this.options,this.TokenAuth).subscribe((response:any) => {
      this.notedetails= response.data.data;

    }, (error) => {
      console.log(error);
    });
    
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
