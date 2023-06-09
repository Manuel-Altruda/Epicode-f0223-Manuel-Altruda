import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { Accesso } from 'src/app/models/accesso';
import { LoginInt } from 'src/app/models/login-int';
import { RegisterInt } from 'src/app/models/register-int';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper: JwtHelperService = new JwtHelperService();

  private authSubject = new BehaviorSubject<null | Accesso>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((data) => Boolean(data)));

  constructor(private http: HttpClient) { }

  register(user: RegisterInt) {
    return this.http.post<RegisterInt>(environment.registerUrl, user);
  }

  login(user: LoginInt) {
    return this.http.post<Accesso>(environment.logUrl, user).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;
      })
    );
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');
    if (!userJson) {
      return;
    }
    const user: Accesso = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }
  }

}
