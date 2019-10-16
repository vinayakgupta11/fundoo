import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth/auth.service'
import { Router } from '@angular/router';
import{UploadImageComponent} from '../upload-image/upload-image.component'
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService,  private router:Router,private dialog : MatDialog) { }
  email= localStorage.getItem('email');
  firstName=localStorage.getItem('firstName');
  lastName=localStorage.getItem('lastName');
  

  ngOnInit() {
      
  }
  openDialog()
  {
    let dialogref = this.dialog.open(UploadImageComponent,{
      panelClass: 'myClass'
    });
    
  }
  displayNot()
  {
    this.router.navigate(['/display-notes']);
  }
  displayTrash()
  {
    this.router.navigate(['/trash']);
  }
  displayArchive()
  {
    this.router.navigate(['/archive']);
  }

}
