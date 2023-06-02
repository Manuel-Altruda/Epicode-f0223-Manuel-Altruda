import { PostsService } from './../../posts.service';
import { Component, OnInit} from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-posts',
  template: `
    <div *ngFor="let post of posts">

      <h2> {{ post.title }} </h2>
      <p> {{ post.body}} </p>
      <p>Type: {{ post.type }}</p>

    </div>
  `
})
export class PostscomponentComponent implements OnInit {
posts: Post[] = [];

constructor(private postsService: PostsService) { }

ngOnInit(): void {
  this.posts = this.postsService.getPosts();
}
}
