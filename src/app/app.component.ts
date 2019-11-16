import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundooApp';
  masonryItems = [
    { title: 'item 1vbghvhjvv\
    dsgfdfgdfgdfgdfg\
    fdgggggggggggggggggggggggggg\
    ' },
    { title: 'item 2' },
    { title: 'item 3' },
    { title: 'item 4' },
    { title: 'item 5' },
    { title: 'item 6' }
  ];
  constructor(){ 
  }

  ngOnInit(){
  }
}
