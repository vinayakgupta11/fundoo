import { Component, OnInit, Inject, Input } from '@angular/core';
import { DataService } from 'src/app/services/data-services/data.service';
import { NoteService } from 'src/app/services/note-services/note.service';
import { MatDialog } from '@angular/material';
import { CollabComponent } from '../collab/collab.component';


@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  @Input() CardId: any;

  constructor(private dialog: MatDialog, private datasvc: DataService, private noteService: NoteService) { }

  ngOnInit() {


  }
  openDialogcol(cardId) {
    let dialogref = this.dialog.open(CollabComponent, {
      data: {

        card: cardId
      },
      panelClass: 'CollabClass'
    });
  }
}
