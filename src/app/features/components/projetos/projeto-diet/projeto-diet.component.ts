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

  // imageUrlGif2 = 'https://buck-gifs-portfolio-1.s3.us-east-2.amazonaws.com/gifprojetosDiet.gif';
  // isImageLoadedGif2: boolean  = false;

  // constructor(
  //   private filtersGlobalsService: FiltersGlobalsService
  // ) {}

  // ngOnInit(): void {

  //   //! Valida se a imagem ja carregou para apresentar se nao persiste o skeleton
  //   this.filtersGlobalsService.checkImageLoad(this.imageUrlGif2).then(isLoaded => {
  //     this.isImageLoadedGif2 = isLoaded;
  //   }).catch(error => {
  //     console.log(error, 'Error loading image');
  //   });
  // }
}
