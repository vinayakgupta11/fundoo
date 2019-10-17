import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-icon-tray',
  templateUrl: './icon-tray.component.html',
  styleUrls: ['./icon-tray.component.scss']
})
export class IconTrayComponent implements OnInit {
  @Input() show:any;
  @Input() card:any;


  constructor() { }

  ngOnInit() {
  }

}
