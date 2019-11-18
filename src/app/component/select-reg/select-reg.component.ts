import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-services/data.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CartDialogueComponent } from '../cart-dialogue/cart-dialogue.component';
@Component({
  selector: 'app-select-reg',
  templateUrl: './select-reg.component.html',
  styleUrls: ['./select-reg.component.scss']
})
export class SelectRegComponent implements OnInit {

  constructor(private datasvc: DataService,private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(choice){
    this.dialog.open(CartDialogueComponent, {
    data: {
    type: choice
    }, width: '600px'
    });
    }
  SelService(selser)
  {
    this.router.navigate(['/register']);
    this.datasvc.SelectService(selser);
  }

}
