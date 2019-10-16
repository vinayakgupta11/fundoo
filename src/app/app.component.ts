import { Component } from '@angular/core';
import{TestService} from './services/user-services/User.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundooApp';
  constructor(private svc:TestService, private http:HttpClient){
    
  }

  ngOnInit(){
  }
}
