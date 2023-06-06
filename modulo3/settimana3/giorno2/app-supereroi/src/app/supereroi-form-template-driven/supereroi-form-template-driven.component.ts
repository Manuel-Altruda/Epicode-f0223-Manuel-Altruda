import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supereroi-form-template-driven',
  templateUrl: './supereroi-form-template-driven.component.html',
  styleUrls: ['./supereroi-form-template-driven.component.scss']
})
export class SupereroiFormTemplateDrivenComponent {

  superhero: Superhero = {
    name: '',
    alterEgo: '',
    power: '',
    enemy: '',
    planet: '',
    weakness: ''
  };

  onSubmit(form: any) {

    if (form.valid) {

      console.log(form.value);
      this.resetForm(form);

    }

  }
  resetForm(form: any) {

    form.resetForm();
    this.superhero = {
      name: '',
      alterEgo: '',
      power: '',
      enemy: '',
      planet: '',
      weakness: ''
    };


  }

}

interface Superhero {
  name: string;
  alterEgo: string;
  power: string;
  enemy: string;
  planet: string;
  weakness?: string;
}
