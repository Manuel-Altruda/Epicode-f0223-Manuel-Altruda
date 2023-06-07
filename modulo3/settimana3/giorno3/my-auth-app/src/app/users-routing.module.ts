import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailGuard } from './user-detail.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const routes: Routes = [
  { path: ':id', component: UserDetailComponent, canActivate: [UserDetailGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
