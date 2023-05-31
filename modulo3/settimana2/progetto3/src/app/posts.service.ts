import { Injectable } from '@angular/core';
import { Post } from './models/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [
    {
      "id":1,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type": "news"
  },
  {
      "id":2,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type": "politic"
  },
  {
      "id":3,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":true,
      "type": "education"
  },
  {
      "id":4,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":false,
      "type": "news"
  },
  {
      "id":5,
      "body":"Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.",
      "title":"Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.",
      "active":false,
      "type":"education"
  }
  ];

  getPosts(): Post[] {
    return this.posts
  }

  updatePost(updatedPost: Post): void {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
  }
}
