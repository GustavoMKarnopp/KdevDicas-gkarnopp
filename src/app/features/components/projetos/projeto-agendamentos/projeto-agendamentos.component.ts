import { Component, ChangeDetectorRef } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FiltersGlobalsService } from '../../../shared/utils/filters-globals.service';

@Component({
  selector: 'app-projeto-agendamentos',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './projeto-agendamentos.component.html',
  styleUrls: ['./projeto-agendamentos.component.scss']
})
export class ProjetoAgendamentosComponent {
  imageUrlGif1 = 'https://buck-gifs-portfolio-1.s3.us-east-2.amazonaws.com/gifprojetos.gif';
  isImageLoadedGif1: boolean = false;

  constructor(
    private filtersGlobalsService: FiltersGlobalsService,
    private cdRef: ChangeDetectorRef  // Adicione ChangeDetectorRef no construtor
  ) {}

  ngOnInit(): void {
    this.filtersGlobalsService.checkImageLoad(this.imageUrlGif1).then(isLoaded => {
      this.isImageLoadedGif1 = isLoaded;
      this.cdRef.detectChanges();  // Chame detectChanges para atualizar a view
    }).catch(error => {
      console.log(error, 'Error loading image');
    });
  }
}
