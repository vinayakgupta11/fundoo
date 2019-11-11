import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';
import { FormControl } from '@angular/forms';
import { Note } from '../../models/note.models';
import { DataService } from '../../services/data-services/data.service'


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() TypeIcon: any;
  TokenAuth: boolean = true;
  isArchived = 'false';
  show: boolean = true;
  message: string;
  title = new FormControl;
  description = new FormControl;
  note: Note;
  options: any;
  notes: any;
  colour: any = '#fff';
  titleM: any;
  descriptionM: any;
  ReminderNote: any;
  collaberators = [];
  collabHt: any;
  text = new FormControl;
  EmptyText:any;
  collab: any;
  collVal:any;
  arc:boolean=false
  ShowCheckList: any;
  remind:boolean=false;
  label:boolean=false;
  ChecklistArray=[];
  CheckListIndex:any;
  LabelId:any;
  LabelArray=[];
  LabelArrayId=[];
  constructor(private noteService: NoteService, private datasvc: DataService) { }

  ngOnInit() {
    this.datasvc.LabelMessageNotes.subscribe((resp:any)=>
    {
      if (resp == '') {
        this.LabelArray = []
      }
      else {
        this.LabelArray.push(resp)
        this.LabelArrayId.push(resp.id)
        this.label=true;
        console.log('data received', this.LabelArray);
      }
    })
    this.datasvc.ChecklistMessageNotes.subscribe((res: any) => {
      //console.log('checkkkhbfghbfgtk',res);
      if(res!=='')
      {
      this.ShowCheckList=res;
      console.log('checkkkk',this.ShowCheckList);
      }
    })
    this.datasvc.currentMessage.subscribe((res) => {
      if (res == 'save' || res == 'default message') {
        this.colour = '#fff';
      }
      else {
        this.colour = res;
      }
    }
    );
    this.datasvc.ArchiveMessage.subscribe((res:any)=>
    {  if (res != '') {
      this.arc=res.isArchived;
      console.log(res);
      this.receive();
    }
    else
    {
      this.arc=false;
    }
      
    })
    this.datasvc.ReminderMessage.subscribe((res) => {
      if (res == 'Save Reminder') {
        this.ReminderNote = ''
      }
      else {
        this.ReminderNote = res;
        this.remind=true;
      }
    })
    this.datasvc.CollabMessage.subscribe((res:any) => {
      if (res != '') {
        this.collaberators.push(res)
        console.log('data received', this.collaberators);
      }
      else{
        this.collabHt ='';
      }

    })
   // console.log('88888',this.ChecklistArray);
  }
  UpdateCheckList(itemname,status)
  {
    this.CheckListIndex= this.ChecklistArray.findIndex(i=> i.itemName=== itemname)
    if(status=='open'){
      this.ChecklistArray[this.CheckListIndex].status = 'close';
    }else{
      this.ChecklistArray[this.CheckListIndex].status = 'open';
    }

  }
  DeleteCheckList(itemname)
  {
    this.CheckListIndex= this.ChecklistArray.findIndex(i=> i.itemName=== itemname)
    console.log("index....", this.CheckListIndex);
    this.ChecklistArray.splice(this.CheckListIndex, 1);

  }
  AddCheckList()
  {
    this.ChecklistArray[this.ChecklistArray.length]= {itemName: this.text.value,status:"open"};
    this.EmptyText='';
    console.log("Array...",this.ChecklistArray);
  }
  toggle() {
    this.show = !this.show;
  }
  removeLabel(labelId)
  {
    console.log('hbhhhhh',labelId.id);
    this.LabelId=this.LabelArray.findIndex(i=> i.id=== labelId.id)
    console.log('jjjj',this.LabelId);
    this.LabelArray.splice(this.LabelId, 1);
    
    

  }
  remove()
  {
    this.ReminderNote='';
    this.remind=false;
  }
  receive() {
    if (this.title.value == null && this.description.value == null ) {
      this.toggle();
    }

    else if (this.title.value !== null && this.description.value !== null) {
      this.collab = JSON.stringify(this.collaberators)
      this.note = {
        title: this.title.value,
        description: this.description.value,
        color: this.colour,
        reminder: this.ReminderNote,
        collaberators: this.collab,
        isArchived: this.arc,
        checklist: JSON.stringify(this.ChecklistArray),
        labelIdList:JSON.stringify(this.LabelArrayId)
      }
      console.log('---',this.note);
      
      this.options = {
        data: this.note
      }
      this.noteService.AddNote(this.options, this.TokenAuth).subscribe((response) => {
        console.log(response);

        this.toggle();
        this.titleM = "";
        this.descriptionM = "";
        this.ReminderNote = "";
        this.collVal=""
        this.ChecklistArray=[];
        this.collaberators=[];
        this.LabelArray=[];
        this.ShowCheckList=false;
        this.datasvc.changeMessage("save");
      }, (error) => {
        console.log(error);
      });
    }
  }
}
