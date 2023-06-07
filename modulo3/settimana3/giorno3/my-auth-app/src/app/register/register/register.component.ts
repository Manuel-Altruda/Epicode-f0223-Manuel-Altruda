import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  error: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const username = this.registerForm.value.username;
      const password = this.registerForm.value.password;
      const email = this.registerForm.value.email;

      // Esegui la registrazione utilizzando il servizio AuthService
      const isRegistered = this.authService.register(username, password, email);

      if (isRegistered) {

        console.log('Registrazione avvenuta con successo!');
      } else {
        console.log('Registrazione fallita. Riprova più tardi.');
      }
    }
  }
}
