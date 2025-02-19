import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Custumer', url: '/custumer', icon: 'people' },
    { title: 'Servicios', url: '/servicios', icon: 'apps' },
    { title: 'Ayuda', url: '/ayuda', icon: 'help' }
  ];

  constructor() {}
}
