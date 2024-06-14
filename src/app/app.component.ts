import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { HeaderNavComponent } from './features/components/header-nav/header-nav.component';
import { FooterComponent } from './features/components/footer/footer.component';
import { inject } from "@vercel/analytics"

@Component({
  selector: 'app-root',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    RouterOutlet,
    HomeComponent,
    HeaderNavComponent,
    FooterComponent,

  ],
  template: `
  <router-outlet id="app">
    <app-header-nav></app-header-nav>
  </router-outlet>
  <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit{
  title = 'portfolio-g-karnopp';
  ngOnInit() {
    inject(); // substitua 'UA-XXXXXXXX-X' pelo seu ID de rastreamento do Google Analytics
  }
}
