import { Component } from '@angular/core';
import { Nav1Component } from '../../components/kdevdicas/nav-1/nav-1.component';
import { Nav2Component } from '../../components/kdevdicas/nav-2/nav-2.component';

@Component({
  selector: 'app-kdev-dicas',
  standalone: true,
  imports: [Nav1Component, Nav2Component],
  templateUrl: './kdev-dicas.component.html',
  styleUrl: './kdev-dicas.component.scss'
})
export class KdevDicasComponent {

}
