import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data-services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-reg',
  templateUrl: './select-reg.component.html',
  styleUrls: ['./select-reg.component.scss']
})
export class SelectRegComponent implements OnInit {

  constructor(private datasvc: DataService,private router:Router) { }

  ngOnInit() {
  }
  SelService(selser)
  {
    this.router.navigate(['/register']);
    this.datasvc.SelectService(selser);
  }

}
