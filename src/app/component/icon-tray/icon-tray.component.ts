import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-tray',
  templateUrl: './icon-tray.component.html',
  styleUrls: ['./icon-tray.component.scss']
})
export class IconTrayComponent implements OnInit {
  @Input() show:any;
  @Input() card:any;
  @Output() messageEventnote= new EventEmitter<string>();
  message:any;


  constructor() { }

  ngOnInit() {
    //console.log('dsdd',this.show);
    
  }
  

}
