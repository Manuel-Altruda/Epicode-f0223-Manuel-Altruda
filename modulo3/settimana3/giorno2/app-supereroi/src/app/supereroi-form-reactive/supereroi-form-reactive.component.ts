import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-supereroi-form-reactive',
  templateUrl: './supereroi-form-reactive.component.html',
  styleUrls: ['./supereroi-form-reactive.component.scss']
})


export class SupereroiFormReactiveComponent implements OnInit {

  supereroiForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    this.supereroiForm = this.formBuilder.group({
      name: ['', Validators.required],
      alterEgo: ['', Validators.required],
      power: ['', Validators.required],
      enemy: ['', Validators.maxLength(10)],
      planet: ['', Validators.required],
      weakness: ['']
    });

  }

  onSubmit() {

    if (this.supereroiForm.valid) {

      console.log(this.supereroiForm.value);

    }

  }

}
