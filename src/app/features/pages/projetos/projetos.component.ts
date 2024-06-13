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
  imageUrlGif1 = 'https://videos-portfolio-gk.s3.us-east-2.amazonaws.com/Gerar+Gif.mp4';
  imageUrlGif2 = 'https://videos-portfolio-gk.s3.us-east-2.amazonaws.com/Diet+sem+audio.mp4';
  isImageLoadedGif1: boolean  = false;
  isImageLoadedGif2: boolean  = false;

  constructor(
    private filtersGlobalsService: FiltersGlobalsService
  ) {}

  //! Executa a  validação do tipo de arquivo
  checkFileType(url: string): string {
    const extension = url.split('.').pop();
    switch(extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'image';
      case 'mp4':
      case 'webm':
      case 'ogg':
        return 'video';
      default:
        return 'unknown';
    }
  }
  ngOnInit(): void {
    if(this.checkFileType(this.imageUrlGif1) === 'video'){
      //! Valida se o video ja carregou para apresentar se nao persiste o skeleton
        this.filtersGlobalsService.checkVideoLoad(this.imageUrlGif1).then(isLoaded => {
          this.isImageLoadedGif1 = isLoaded;
          this.filtersGlobalsService.checkVideoLoad(this.imageUrlGif2).then(isLoaded => {
              this.isImageLoadedGif2 = isLoaded;
            }).catch(error => {
              console.log(error, 'Error loading image');
          });
        }).catch(error => {
          console.log(error, 'Error loading image');
        });
    }else{
      //! Valida se a imagem ja carregou para apresentar se nao persiste o skeleton
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


}
