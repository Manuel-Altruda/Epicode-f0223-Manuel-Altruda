import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/Authservices/auth.service';
import { Accesso } from 'src/app/models/accesso';
import { LoginUser } from 'src/app/models/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authSvc: AuthService) {}

  sub(f: NgForm) {
    this.authSvc
      .login(new LoginUser(f.value.email, f.value.password))
      .subscribe((data: Accesso) => {
        console.log(data);
      });
  }
}
