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

  private ViewSource = new BehaviorSubject('default message');
  ViewMessage = this.ViewSource.asObservable();

  private ReminderSource = new BehaviorSubject('Save Reminder');
  ReminderMessage = this.ReminderSource.asObservable();

  private ServiceSource = new BehaviorSubject('Save Reminder');
  ServiceMessage = this.ServiceSource.asObservable();

  private ChecklistSource = new BehaviorSubject('open checklist');
  ChecklistMessage = this.ChecklistSource.asObservable();
 
  private CollabSource = new BehaviorSubject('');
  CollabMessage = this.CollabSource.asObservable();
 
  private ArchiveSource = new BehaviorSubject('');
  ArchiveMessage = this.ArchiveSource.asObservable();


  constructor() { }
  changeMessage(message: any) {
    this.messageSource.next(message)
  }
  LabelList(message: any) {
    this.labelSource.next(message);
  }
  AskQuestion(message: any) {
    this.quesSource.next(message);
  }
  View(message:any)
  {
    this.ViewSource.next(message);
  }
  Reminder(message:any)
  {
    this.ReminderSource.next(message);
  }
  SelectService(message:any)
  {
    this.ServiceSource.next(message);
  }
  ChecklistService(message:any)
  {
    this.ChecklistSource.next(message);
  }
  CollabService(message:any)
  {
    this.CollabSource.next(message)
  }
  ArchiveService(message:any)
  {
    this.ArchiveSource.next(message);
  }

}
