import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-services/data.service';
import { NoteService } from '../../services/note-services/note.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import{environment} from '../../../environments/environment'


@Component({
  selector: 'app-ques-ans',
  templateUrl: './ques-ans.component.html',
  styleUrls: ['./ques-ans.component.scss']
})
export class QuesAnsComponent implements OnInit {
  today = new Date();
  imgbase=environment.imagebase;
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  noteData: any;
  QuesValue:any;
  AnsValue:any;
  TokenAuth: boolean = true;
  options:any;
  notedetails:any;
  quesToken:any;
  showReply: boolean = false;
  localstor:any;
  url:any;
  questionAnsLength: number
  replyShow:any;
  rate:any;

  constructor( private route: ActivatedRoute,private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
    
    
    this.quesToken = this.route.snapshot.paramMap.get('noteId');
    this.GetNoteDetails(this.quesToken);
  }

  rating( event) {
    this.rate=event;
    console.log('---',this.rate);
    

    
  }
  replyQues(id)
  {
    console.log(';;;',id);
    console.log('dfsygjudfygjudf',this.questionAnsLength);
    
    for (var i = 0; i < this.questionAnsLength; i++) {
      if (this.notedetails[0].questionAndAnswerNotes[i].id == id) {
      this.replyShow = this.notedetails[0].questionAndAnswerNotes[i].id;
      console.log('ggggg',this.replyShow);
      
      this.toggleReply();
      return;
      }

  }
}
  
  QuestionReply(quesid)
  {
    let user=
    {
      "message": this.AnsValue
      
    }
    let options=
    {
      data:user,
      "quesId": quesid
    }
    console.log('repluuuuuu',options);
    
    this.noteService.ReplyQuestion(options, this.TokenAuth).subscribe((response) => {
      console.log(response);
      this.toggleReply();
      this.AnsValue='';
    }, (error) => {
      console.log(error);
    });

  }
  changeProfile()
  {
    this.localstor= localStorage.getItem('imageUrl');
    this.url=(this.imgbase+this.localstor)
  }
  toggleReply() {
    this.showReply = !this.showReply;
    
  }
 
  GetNoteDetails(card)
  {
    this.options={
      noteIdList: [card]
    }
    this.noteService.GetNoteDetailss(this.options,this.TokenAuth).subscribe((response:any) => {
      this.notedetails= response.data.data;
      
      this.questionAnsLength= this.notedetails[0].questionAndAnswerNotes.length;
      this.datasvc.AskQuestion(this.questionAnsLength);
      console.log('notedetails',this.notedetails);
      console.log('----------',this.questionAnsLength);
    }, (error) => {
      console.log(error);
    });
    
  }
  AddQues(id)
  { let user=
    {
      "message": this.QuesValue,
      "notesId": id
    }
    let options=
    {
      data:user
    }
    this.noteService.AddQuestion(options, this.TokenAuth).subscribe((response) => {
      this.GetNoteDetails(id);
      this.changeProfile();
      this.QuesValue='';
    }, (error) => {
      console.log(error);
    });
    
  }

}
