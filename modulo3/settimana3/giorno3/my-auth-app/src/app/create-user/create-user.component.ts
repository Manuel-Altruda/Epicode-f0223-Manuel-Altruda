import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  dirtyForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {

      this.dirtyForm = false;
      this.router.navigate(['/users']);
    }
  }

  canDeactivate(): boolean {
    if (this.dirtyForm) {
      return confirm('Sei sicuro di voler lasciare la pagina? Le modifiche non salvate andranno perse.');
    }
    return true;
  }
}
