import { Component } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FiltersGlobalsService } from '../../shared/utils/filters-globals.service';


@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {
  isImageLoadedSobre1: boolean  = false;
  isImageLoadedSobre2: boolean  = false;
  imageUrlFamilia = 'https://img-front-portolio.s3.us-east-2.amazonaws.com/familia.jpg'
  imageUrlJob = 'https://img-front-portolio.s3.us-east-2.amazonaws.com/job.png'
  constructor(
    private filtersGlobalsService: FiltersGlobalsService
  ) {}

  ngOnInit(): void {

    //! Valida se a imagem ja carregou para apresentar se nao persiste o skeleton
    this.filtersGlobalsService.checkImageLoad(this.imageUrlFamilia).then(isLoaded => {
      this.isImageLoadedSobre1 = isLoaded;
      this.filtersGlobalsService.checkImageLoad(this.imageUrlJob).then(isLoaded => {
        this.isImageLoadedSobre2 = isLoaded;
        console.log('entrou')
      }).catch(error => {
        console.log(error, 'Error loading image sobre 2');
      });
    }).catch(error => {
      console.log(error, 'Error loading image sobre 1');
    });
  }
}
