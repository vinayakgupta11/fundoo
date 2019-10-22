import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data-services/data.service'
import { Color } from '../../models/color.models';
import { NoteService } from '../../services/note-services/note.service';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  colorArray: any = [
    { color: '#ECEEEE' }, { color: '#F28B82' }, { color: '#F7BC04' }, { color: '#FAF474' },
    { color: '#CBFF90' }, { color: '#AAFEEB' }, { color: '#CBF0F8' }, { color: '#ADCBFA' },
    { color: '#D7AEFB' }, { color: '#FDCFE8' }, { color: '#E6C9A8' }, { color: '#FFFFFF' }];
  TokenAuth: boolean = true;
  message: string = "save"
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
  changeColor(card, colour) {
    if (card) {
      this.cardId = card.id;
      this.user = {
        color: colour,
        noteIdList: [this.cardId]
      }
      console.log(this.user);
      this.options = {
        data: this.user,
      }
      this.noteService.ColorChange(this.options, this.TokenAuth).subscribe((response) => {
        console.log(response);
        // this.messageEvent.emit(this.message);
        this.datasvc.changeMessage('save')
      }, (error) => {
        console.log(error);
      });
    }
    else {
      this.datasvc.changeMessage(colour)
      console.log('not card', colour);
    }
  }

}
