import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  opened = false;
  selectRoute: string = '';

  constructor(
    private router: Router,
  ){
    this.router.events.subscribe((events: any) => {
      if(events instanceof NavigationEnd){
        this.selectRoute = this.router.url
      }
    })
  }
}
