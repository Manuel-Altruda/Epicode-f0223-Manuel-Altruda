import { LoginInt } from "./login-int";

export class LoginUser implements LoginInt{
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

}
