import { Post } from './../models/post';
import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-home',
  template: `
  <div class=" mt-5 d-flex  justify-content-around">

    <button (click)="gotoActivePosts()" class="btn btn-primary" >vai a post attivi</button>
    <button (click)="gotoInactivePosts()" class="btn btn-primary" >vai a post non attivi</button>
  </div>
  `,
  styles: [
  ]
})
export class HomePage {
gotoInactivePosts() {
throw new Error('Method not implemented.');
}
gotoActivePosts() {
throw new Error('Method not implemented.');
}
  private posts: Post[] = [];

  constructor(private data: PostsService) {

  }


}
