import { Component, Input } from '@angular/core';
import { ProjetosComponent } from '../../../pages/projetos/projetos.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-projeto-agendamentos',
  standalone: true,
  imports: [ProjetosComponent, NgxSkeletonLoaderModule],
  templateUrl: './projeto-agendamentos.component.html',
  styleUrl: './projeto-agendamentos.component.scss'
})
export class ProjetoAgendamentosComponent {
  @Input() imageUrlGif1: string = '';
  @Input() isImageLoadedGif1: boolean = false;
  // imageUrlGif1 = 'https://buck-gifs-portfolio-1.s3.us-east-2.amazonaws.com/gifprojetos.gif';
  // isImageLoadedGif1: boolean  = false;

  // constructor(
  //   private filtersGlobalsService: FiltersGlobalsService
  // ) {}

  // ngOnInit(): void {

  //   //! Valida se a imagem ja carregou para apresentar se nao persiste o skeleton
  //   this.filtersGlobalsService.checkImageLoad(this.imageUrlGif1).then(isLoaded => {
  //     this.isImageLoadedGif1 = isLoaded;
  //   }).catch(error => {
  //     console.log(error, 'Error loading image');
  //   });
  // }
}
