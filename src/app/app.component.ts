import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { HeaderNavComponent } from './features/components/header-nav/header-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [RouterOutlet, HomeComponent, HeaderNavComponent],
  template: `
  <router-outlet id="app">
  <app-header-nav></app-header-nav>
  <app-home>
    </app-home>
  </router-outlet>
  `,
})
export class AppComponent {
  title = 'portfolio-g-karnopp';
}
