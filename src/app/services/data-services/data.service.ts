import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private labelSource = new BehaviorSubject('default message');
  LabelMessage = this.labelSource.asObservable();

  private quesSource = new BehaviorSubject('0');
  QuesMessage = this.quesSource.asObservable();

  private ViewSource = new BehaviorSubject(false);
  ViewMessage = this.ViewSource.asObservable();

  private ReminderSource = new BehaviorSubject('Save Reminder');
  ReminderMessage = this.ReminderSource.asObservable();

  private ServiceSource = new BehaviorSubject('Save Reminder');
  ServiceMessage = this.ServiceSource.asObservable();

  private ChecklistSource = new BehaviorSubject('open checklist');
  ChecklistMessage = this.ChecklistSource.asObservable();

  private ChecklistSourceNotes = new BehaviorSubject('');
  ChecklistMessageNotes = this.ChecklistSourceNotes.asObservable();

  private CollabSource = new BehaviorSubject('');
  CollabMessage = this.CollabSource.asObservable();

  private ArchiveSource = new BehaviorSubject('');
  ArchiveMessage = this.ArchiveSource.asObservable();

  private LabelSourceNotes = new BehaviorSubject('');
  LabelMessageNotes = this.LabelSourceNotes.asObservable();


  private dialogData = new BehaviorSubject('');
  dialogMessage = this.dialogData.asObservable();

  private dialogDataArch = new BehaviorSubject('save');
  dialogMessageArch = this.dialogDataArch.asObservable();

  private labdis = new BehaviorSubject('save');
  labdisplay = this.labdis.asObservable();

  private Icondata = new BehaviorSubject('save');
  Icondisplay = this.Icondata.asObservable();

  private drawerVal = new BehaviorSubject(false);
  Drawerdisplay = this.drawerVal.asObservable();



  constructor() { }
  DisplyDrawer(message: any) {
    this.drawerVal.next(message);

  }
  DisplayIcon(message: any) {
    this.Icondata.next(message)
  }

  DisplayLab(message: any) {
    this.labdis.next(message)
  }
  DialogMessArch(message: any) {
    this.dialogDataArch.next(message);
  }
  DialogMess(message: any) {
    this.dialogData.next(message);
  }
  changeMessage(message: any) {
    this.messageSource.next(message)
  }
  LabelList(message: any) {
    this.labelSource.next(message);
  }
  AskQuestion(message: any) {
    this.quesSource.next(message);
  }
  View(message: any) {
    this.ViewSource.next(message);
  }
  Reminder(message: any) {
    this.ReminderSource.next(message);
  }
  SelectService(message: any) {
    this.ServiceSource.next(message);
  }
  ChecklistService(message: any) {
    this.ChecklistSource.next(message);
  }
  CollabService(message: any) {
    this.CollabSource.next(message)
  }
  ArchiveService(message: any) {
    this.ArchiveSource.next(message);
  }
  ChecklistServiceNotes(message: any) {
    this.ChecklistSourceNotes.next(message);
  }
  LabelListNotes(message: any) {
    this.LabelSourceNotes.next(message);
  }

}
