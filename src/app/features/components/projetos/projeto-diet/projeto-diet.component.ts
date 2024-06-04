import { Component, Input } from '@angular/core';
import { environment } from '../../../../../env/environment.assets';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FiltersGlobalsService } from '../../../shared/utils/filters-globals.service';
import { ProjetosComponent } from '../../../pages/projetos/projetos.component';

@Component({
  selector: 'app-projeto-diet',
  standalone: true,
  imports: [ProjetosComponent, NgxSkeletonLoaderModule],
  templateUrl: './projeto-diet.component.html',
  styleUrl: './projeto-diet.component.scss'
})
export class ProjetoDietComponent {
  @Input() imageUrlGif2: string = '';
  @Input() isImageLoadedGif2: boolean = false;
  // public projetoDiet = environment.PROJETO_DIET
}
