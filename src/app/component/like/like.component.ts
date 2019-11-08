import { Component, OnInit,Input } from '@angular/core';
import { NoteService } from '../../services/note-services/note.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  TokenAuth: boolean = true;
  liked=false;
  likeObject;
  count=0;
  @Input()   public set LikeMessage(v: any) {
    this.likeObject = v;
    this.likeCheck(v);
  }
  likeCheck(v)
  {
    for (let i = 0; i < v.like.length; i++) {
      if (v.userId == v.like[i].userId && v.like[i].like) {
        this.liked = true;
      }
      if (v.like[i].like) {
        this.count++;
      }
    }
  }
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    console.log('kjugkjugb',this.likeObject);
    
  }
  like() {
    this.liked = true;
    this.likeDislikeService(this.likeObject.id, true);
    this.count++;

  }

  unlike() {
    this.liked = false;
    this.likeDislikeService(this.likeObject.id, false);
    this.count--;
  }

  likeDislikeService(userId, value) {
    
      let user = {
        "like": value
      }
      let options=
      {
        data: user,
        "parentId": userId
      }
      this.noteService.Like(options, this.TokenAuth).subscribe((res: any) => {
        console.log('rate api hit', res);
      })
      

}

}
