import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from '../../service/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})

export class InactivePostsComponent implements OnInit {
  constructor(private postsService: PostsService) { }

  inactivePosts: Post[] = [];

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.inactivePosts = posts.filter(post => post.active);
    });
  }

}
