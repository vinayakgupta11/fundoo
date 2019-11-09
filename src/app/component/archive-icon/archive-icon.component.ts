import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import { Color } from '../../models/color.models';
import { NoteService } from '../../services/note-services/note.service';

@Component({
  selector: 'app-archive-icon',
  templateUrl: './archive-icon.component.html',
  styleUrls: ['./archive-icon.component.scss']
})
export class ArchiveIconComponent implements OnInit {
  message: string = "save"
  TokenAuth: boolean = true;
  notes: any;
  options: any;
  user: Color;
  public noteSelected;
  cardId: any;
  @Output() messageEvent = new EventEmitter<string>();
  @Input() CardId: any;

  constructor(private datasvc: DataService, private noteService: NoteService) { }

  ngOnInit() {
  }
  ArchiveNote(card) {
    if (card != undefined) {
      this.cardId = card.id;
      this.user = {
        isArchived: true,
        noteIdList: [this.cardId]
      }
      this.options = {
        data: this.user
      }
      this.noteService.ArchiveNote(this.options, this.TokenAuth).subscribe((response) => {
        console.log(response);
        //this.messageEvent.emit(this.message)
        this.datasvc.changeMessage('save')
      }, (error) => {
        console.log(error);
      });
    }
    else {
      let data={
        isArchived: true
      }
      this.datasvc.ArchiveService(data);

    }
  }

}
