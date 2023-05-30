import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  Home(): boolean {
    return location.pathname == '/';
  }
  ActivePage(): boolean {
    return location.pathname == '/active';
  }
  InactivePage(): boolean {
    return location.pathname == '/inactive';
  }
}
