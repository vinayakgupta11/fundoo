import { Component, OnInit,Input,Output } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import { Remind } from '../../models/remind.models';
import { NoteService } from '../../services/note-services/note.service';

@Component({
  selector: 'app-remind-me',
  templateUrl: './remind-me.component.html',
  styleUrls: ['./remind-me.component.scss']
})
export class RemindMeComponent implements OnInit {
  @Input() CardId: any;
  date:Date;
  TokenAuth: boolean = true;
  cardId: any;
  user: Remind;
  options:any;
  remindList = [
    { day: 'Later Today', time: '20:00' },
    { day: 'Tommorow', time: '08:00'},
    { day: 'Next Week', time: '9:00AM' },
  ]
  constructor(private datasvc: DataService, private noteService: NoteService) { }

  ngOnInit() {
  }
  SaveReminder(card,datee)
  {
    this.cardId = card.id;
    this.user = {
      noteIdList: [this.cardId],
      reminder: datee._selected
    }
    this.options = {
      data: this.user,
    }
    this.noteService.addReminder(this.options, this.TokenAuth).subscribe((response) => {
      this.GetReminder();
     
      this.datasvc.changeMessage('save')
    }, (error) => {
      console.log(error);
    });
  }
  GetReminder()
  {
    this.noteService.GetReminderList(this.TokenAuth).subscribe((response: any) => {
    }, (error) => {
      console.log(error);
    });

  }

}
