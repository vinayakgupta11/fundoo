import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data-services/data.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-cart-dialogue',
  templateUrl: './cart-dialogue.component.html',
  styleUrls: ['./cart-dialogue.component.scss']
})
export class CartDialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data,private datasvc: DataService,private router:Router,private dialogRef: MatDialogRef< RegisterComponent>) { }

  ngOnInit() {
    console.log(this.data);
    
  }
  SelService(selser)
  {
    this.router.navigate(['/register']);
    this.datasvc.SelectService(selser);
    this.dialogRef.close();
  }

}
