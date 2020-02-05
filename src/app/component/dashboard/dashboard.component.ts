import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'
import { Router } from '@angular/router';
import { UploadImageComponent } from '../upload-image/upload-image.component'
import { MatDialog } from '@angular/material';
import { environment } from '../../../environments/environment'
import { DataService } from '../../services/data-services/data.service'
import { LabelsComponent } from '../labels/labels.component';
import { NoteService } from 'src/app/services/note-services/note.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  drawerVal:boolean=false;
  imgbase = environment.imagebase;
  localstor: any;
  url: any
  FilterText: any;
  i: number = 0;
  TokenAuth: boolean = true;
  labels: any;
  show: boolean = false;


  constructor(private spinnerService: Ng4LoadingSpinnerService, public auth: AuthService, private noteService: NoteService, private router: Router, private dialog: MatDialog, private datasvc: DataService) { }
  email = localStorage.getItem('email');
  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');


  ngOnInit() {

    console.log('40',this.drawerVal);
    this.datasvc.Drawerdisplay.subscribe((res:any)=>
    {
      this.drawerVal=res;
      console.log('40',this.drawerVal);
    })
    

    this.GetLabelList();
    this.datasvc.currentMessage.subscribe((res) => {
      this.changeProfile();
    })
    this.datasvc.LabelMessage.subscribe((res) => {
      this.GetLabelList();
    })
  }
  toggle() {
    this.show = !this.show;
    this.datasvc.View(this.show);
  }

  onOpenedChange(val: boolean) {
    this.datasvc.DisplyDrawer(val)
  }
  GetLabelList() {
    this.noteService.GetLabelList(this.TokenAuth).subscribe((response: any) => {
      this.labels = response.data.details;
      console.log('line 52', this.labels);


    }, (error) => {
      console.log(error);
    });

  }
  openDialoglab() {
    let dialogref = this.dialog.open(LabelsComponent, {
      panelClass: 'LabelClass'
    });
  }
  changeProfile() {
    this.spinnerService.show();
    this.localstor = localStorage.getItem('imageUrl');
    this.url = (this.imgbase + this.localstor)
  }
  openDialog() {
    let dialogref = this.dialog.open(UploadImageComponent, {
      panelClass: 'myClass'
    });

  }
  displaycart() {
    this.router.navigate(['/shoppingCart']);
  }
  displayNot() {
    this.router.navigate(['/display-notes']);
  }
  displayTrash() {
    this.router.navigate(['/trash']);
  }
  displayArchive() {
    this.router.navigate(['/archive']);
  }
  displaySearch() {
    this.router.navigate(['/serach']);

  }
  displayLabel() {
    this.router.navigate(['/labels']);
  }

  onKeyUp(event: any) {
    this.i++;
    if (this.i >= 3) {
      this.FilterText = event.target.value;
      //console.log(this.FilterText);
      this.datasvc.changeMessage(this.FilterText)
    }
  }

  goToLabelData(data) {
    console.log('1117', data);

    this.router.navigate(["/label/" + data]);
    this.datasvc.DisplayLab(data);
  }



}
