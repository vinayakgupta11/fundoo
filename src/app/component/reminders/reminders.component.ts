import { Component, OnInit } from '@angular/core';
import { DialogueComponent } from '../dialogue/dialogue.component'
import { MatDialog } from '@angular/material';
import { DataService } from 'src/app/services/data-services/data.service';
import { NoteService } from '../../services/note-services/note.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  component='notess';
  TokenAuth: boolean = true;
  notes: any;
  options: any;

  constructor(private noteService: NoteService, private dialog: MatDialog, private datasvc: DataService) { }

  ngOnInit() {
    this.GetReminder();
    this.datasvc.currentMessage.subscribe((res) => {
      this.GetReminder();
    })
   
  }
  openDialog(note) {
    console.log("the value of note is ", note);
    let dialogref = this.dialog.open(DialogueComponent,
      {
        data: {
          title: note.title,
          description: note.description,
          id: note.id,
          recycle: false
        }
      });
    dialogref.afterClosed().subscribe(result => {
      console.log("dialog result ", result);
    })
  }
  GetReminder()
  {
    this.noteService.GetReminderList(this.TokenAuth).subscribe((response: any) => {
      this.notes = response.data.data.reverse();
      
    }, (error) => {
      console.log(error);
    });

}
}
