import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

export interface Post {
  id: number;
  title: string;
  description: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl = 'assets/db.json';

  constructor () {   }

  getPosts(): Observable<Post[]> {
    return new Observable<Post[]>((observer) => {
      fetch(this.apiUrl)
        .then(response => response.json())
        .then(data => {
          observer.next(data as Post[]);
          observer.complete();
        })
        .catch(error => observer.error(error));
    });
  }

}



