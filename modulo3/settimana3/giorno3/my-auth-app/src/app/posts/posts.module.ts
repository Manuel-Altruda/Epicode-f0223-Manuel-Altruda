import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PostsRoutingModule } from '../posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';



@NgModule({
  declarations: [
    PostDetailComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
