import { Component } from '@angular/core';
import { environment } from '../../../../../env/environment.assets';

@Component({
  selector: 'app-projeto-diet',
  standalone: true,
  imports: [],
  templateUrl: './projeto-diet.component.html',
  styleUrl: './projeto-diet.component.scss'
})
export class ProjetoDietComponent {
  public projetoDiet = environment.PROJETO_DIET
}
