import { Component, OnInit, Inject,Input } from '@angular/core';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { TestService } from '../../services/user-services/User.service'
import { DataService } from 'src/app/services/data-services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from '../../../environments/environment';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NoteService } from 'src/app/services/note-services/note.service';

@Component({
  selector: 'app-collab',
  templateUrl: './collab.component.html',
  styleUrls: ['./collab.component.scss']
})
export class CollabComponent implements OnInit {
  @Input() collId:any;
  coll:any;
  notedetails:any;
  imgbase = environment.imagebase;
  localstor: any;
  filteredOptions: Observable<any[]>;
  myControl = new FormControl();
  url: any;
  searchValue:any;
  userslist: any;
  notes:any;
  TokenAuth: boolean = true;
  constructor(@Inject(MAT_DIALOG_DATA) dialogData: any, private testService: TestService,private  noteService: NoteService, private datasvc: DataService, private dialogRef: MatDialogRef<DisplayNotesComponent>) { 
  this.notedetails= dialogData.card.id
    
    
    
  }
  email = localStorage.getItem('email');
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  ngOnInit() {
    this.getNotesCollab();
    this.datasvc.currentMessage.subscribe((res) => {
      this.changeProfile();
    })
  }
  addCollab()
  {
    let value={
  'email':this.searchValue[0].email,
  'firstName':this.searchValue[0].firstName,
  'lastName':this.searchValue[0].lastName,
  'userId':this.searchValue[0].userId,
  }
  let options=
  {
    data: value,
    noteId:this.notedetails
  }
  this.noteService.addCollaborator(options,this.TokenAuth).subscribe((response:any)=>
  {
   // console.log('---',response);
   this.coll='';
    this.getNotesCollab();
  },
  (error) => {
    console.log(error);
  });
  }
  removeCollab(collabId)
  {
    let options=
    {
      noteId: this.notedetails,
      collId: collabId
    }
    this.noteService.DeleteCollab(options,this.TokenAuth).subscribe((response)=>
    {
     // console.log(response);
      this.getNotesCollab();
      
    })

  }
  getNotesCollab()
  {
    let options=
    {
      noteId:this.notedetails
    }
    this.noteService.GetNotesListCollab(options,this.TokenAuth).subscribe((response: any) => {
      this.notes = response.collaborators;
     // console.log('-------',this.notes);
      
    }, (error) => {
      console.log(error);
    });
  }
  changeProfile() {
    this.localstor = localStorage.getItem('imageUrl');
    this.url = (this.imgbase + this.localstor)
  }
  search(collob) {
    let value = {
      'searchWord': collob,
    };
    let options =
    {
      data: value
    }
    this.testService.searchUser(options, this.TokenAuth).subscribe((response: any) => {
      this.userslist = response.data.details;
      
      this.filterTest();
    }, (error) => {
      console.log(error);
    });
  }
  filterTest() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }
  filter(val) {
    this.searchValue= this.userslist.filter(option =>
      option.email.toLowerCase().includes(val.toLowerCase()));
     // console.log('------',this.searchValue);
      
      return this.searchValue
  }

  
}
