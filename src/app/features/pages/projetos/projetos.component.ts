import { Component } from '@angular/core';
import { ProjetoAgendamentosComponent } from '../../components/projetos/projeto-agendamentos/projeto-agendamentos.component';
import { ProjetoDietComponent } from '../../components/projetos/projeto-diet/projeto-diet.component';
import { FiltersGlobalsService } from '../../shared/utils/filters-globals.service';
@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ProjetoAgendamentosComponent, ProjetoDietComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

  // imageUrlGif1 = 'https://dbsxnnxbg8687.cloudfront.net/gifprojetos.gif';
  imageUrlGif1 = 'https://buck-gifs-portfolio-1.s3.us-east-2.amazonaws.com/gifprojetos.gif';
  // imageUrlGif2 = 'https://dbsxnnxbg8687.cloudfront.net/gifprojetosDiet.gif';
  imageUrlGif2 = 'https://buck-gifs-portfolio-1.s3.us-east-2.amazonaws.com/gifprojetosDiet.gif';
  isImageLoadedGif1: boolean  = false;
  isImageLoadedGif2: boolean  = false;

  constructor(
    private filtersGlobalsService: FiltersGlobalsService
  ) {}

  ngOnInit(): void {
    //   //! Valida se a imagem ja carregou para apresentar se nao persiste o skeleton
      this.filtersGlobalsService.checkImageLoad(this.imageUrlGif1).then(isLoaded => {
        this.isImageLoadedGif1 = isLoaded;
        this.filtersGlobalsService.checkImageLoad(this.imageUrlGif2).then(isLoaded => {
            this.isImageLoadedGif2 = isLoaded;
          }).catch(error => {
            console.log(error, 'Error loading image');
        });
      }).catch(error => {
        console.log(error, 'Error loading image');
      });
    }
}
