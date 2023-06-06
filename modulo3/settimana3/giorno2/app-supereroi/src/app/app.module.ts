import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupereroiFormTemplateDrivenComponent } from './supereroi-form-template-driven/supereroi-form-template-driven.component';
import { SupereroiFormReactiveComponent } from './supereroi-form-reactive/supereroi-form-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SupereroiFormTemplateDrivenComponent,
    SupereroiFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
