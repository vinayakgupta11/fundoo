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
  show: boolean = true;
  showReply: boolean = false;
  localstor:any;
  url:any

  constructor( private route: ActivatedRoute,private datasvc: DataService,private noteService: NoteService) { }

  ngOnInit() {
    console.log('dateee',this.today);
    
    this.quesToken = this.route.snapshot.paramMap.get('noteId');
    this.GetNoteDetails(this.quesToken);
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
  toggle() {
    this.show = !this.show;
  }

  GetNoteDetails(card)
  {
    this.options={
      noteIdList: [card]
    }
    this.noteService.GetNoteDetailss(this.options,this.TokenAuth).subscribe((response:any) => {
      this.notedetails= response.data.data;
      console.log('///////',this.notedetails);
      

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
      console.log(response);
      this.GetNoteDetails(id);
      this.changeProfile();
      this.toggle();
      this.QuesValue='';
    }, (error) => {
      console.log(error);
    });
    
  }

}
