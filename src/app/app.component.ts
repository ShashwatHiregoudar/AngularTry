import { Component } from '@angular/core';
// import { CoursesComponent } from './courses.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>iu</h1><courses></courses>',
  styleUrls: ['./app.component.css'],
  // directives: [CoursesComponent]
})
export class AppComponent {
  title = 'app';
  names = ['name1', 'name2', 'name3'];
  ages = [5, 6, 7];
}
