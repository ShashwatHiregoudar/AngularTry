import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormverifierComponent} from './formverifier.component';
// import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    AppComponent,
    FormverifierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FormverifierComponent]
})
export class AppModule { }
