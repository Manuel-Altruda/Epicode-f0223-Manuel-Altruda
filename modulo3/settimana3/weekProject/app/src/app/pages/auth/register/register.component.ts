import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Authservices/auth.service';
import { RegisterUser } from 'src/app/models/register-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authSvc: AuthService) {}

  sub(f: NgForm) {
    this.authSvc
      .register(
        new RegisterUser(
          f.value.name,
          f.value.surname,
          f.value.email,
          f.value.password
        )
      )
      .subscribe((data: any) => console.log(data));
  }

}
