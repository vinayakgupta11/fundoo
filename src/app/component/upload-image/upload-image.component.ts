import { Component, OnInit,Inject } from '@angular/core';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import{NoteService} from '../../services/note-services/note.service';
import{TestService} from '../../services/user-services/User.service'
import { DataService } from 'src/app/services/data-services/data.service';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  imageUrl:string;
  selectedfile:File=null;
  options:any;
  imageChangedEvent: any = '';
    croppedImage: any = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,private testService: TestService,private dialogRef: MatDialogRef< DisplayNotesComponent>) { }

  ngOnInit() {
  }
  
  // onSelect(event)
  // {
  //   console.log('imaggegegege',event);
    

  // }
 
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    // this.selectedfile=<File>event.target.files[0];
    // console.log('kjhkj',this.selectedfile);   
}
  imageCropped(event: ImageCroppedEvent) {
    console.log('event',event);
    //this.croppedImage=event
    this.croppedImage =event.file;
    console.log('mmmmmmmmmm',this.croppedImage);
    
}



changedp()
  {
    const fd= new FormData();
    fd.append('file',this.croppedImage);
    this.options={
      data: fd,
      url: 'uploadProfileImage'
    }
    this.testService.PostwithTokenimage(this.options).subscribe((response:any)=>
    {
      console.log("hjbskjbhs", response.status.imageUrl);
      localStorage.setItem('imageUrl', response.status.imageUrl)
    },(error)=>{
      console.log(error);
      
    })

  }
}
