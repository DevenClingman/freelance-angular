import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `

  <h1>Navigation</h1>


  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Freelance Dashboard';
}
