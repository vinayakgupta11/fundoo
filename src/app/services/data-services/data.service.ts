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

  private quesSource = new BehaviorSubject('default message');
  QuesMessage = this.quesSource.asObservable();

  private ViewSource = new BehaviorSubject('default message');
  ViewMessage = this.ViewSource.asObservable();




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

}
