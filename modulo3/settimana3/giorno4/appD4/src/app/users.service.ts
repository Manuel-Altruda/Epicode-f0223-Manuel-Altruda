import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users:User[] =[
    {
      email:'alberto@ggg.com',
      id:1,
      name:"alberto",
      role:'user'
    },
    {
      email:'luca@ttt.com',
      id:2,
      name:"luca",
      role:'admin'
    }
  ]

  constructor() { }

  getUsers(){
    return this.users
  }

  getUser(id:number){
    return this.users.find(user=>user.id==id)
  }
}
