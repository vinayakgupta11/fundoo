import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../services/auth/auth.service'
import { Router } from '@angular/router';
import{UploadImageComponent} from '../upload-image/upload-image.component'
import {MatDialog} from '@angular/material';
import{environment} from '../../../environments/environment'
import{ DataService} from '../../services/data-services/data.service'
import{LabelsComponent} from '../labels/labels.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imgbase=environment.imagebase;
  localstor:any;
  url:any
  FilterText: any;
  i:number=0;

  constructor(private auth:AuthService,  private router:Router,private dialog : MatDialog,private datasvc:DataService) { }
  email= localStorage.getItem('email');
  firstName=localStorage.getItem('firstName');
  lastName=localStorage.getItem('lastName');
  

  ngOnInit() {
    this.datasvc.currentMessage.subscribe((res)=>
    {
      this.changeProfile();
    })
      
  }
  openDialoglab()
  {
    let dialogref = this.dialog.open(LabelsComponent,{
      panelClass: 'LabelClass'
    });
  }
  changeProfile()
  {
    this.localstor= localStorage.getItem('imageUrl');
    this.url=(this.imgbase+this.localstor)
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
  displaySearch()
  {
    this.router.navigate(['/serach']);
    
  }
  displayLabel()
  {
    this.router.navigate(['/labels']);
  }

onKeyUp(event: any) {
  this.i++;
  if( this.i>=3)
  {
  this.FilterText = event.target.value;
  //console.log(this.FilterText);
  this.datasvc.changeMessage(this.FilterText)
  }
  }
  

}
