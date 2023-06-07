import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostsGuard } from './active-posts.guard';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: PostsListComponent, canActivate: [ActivePostsGuard] },
  { path: ':id', component: PostDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PostsRoutingModule { }
