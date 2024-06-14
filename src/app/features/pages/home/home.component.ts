  import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
  import { ApiService } from '../../services/api.service';
  import { HttpClientModule } from '@angular/common/http';
  import { CommonModule } from '@angular/common';
  import { MetaTagsService } from '../../shared/utils/meta-tags.service';
  import { FiltersGlobalsService } from '../../shared/utils/filters-globals.service';
  import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
  import { isPlatformBrowser } from '@angular/common';

  @Component({
    selector: 'app-home',
    standalone: true,
    imports: [HttpClientModule, CommonModule, NgxSkeletonLoaderModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent implements OnInit {
    imageUrl = 'https://img-front-portolio.s3.us-east-2.amazonaws.com/profile-pic.png';
    isImageLoaded: boolean  = false;

    constructor(
      private api: ApiService,
      private metaTagsService: MetaTagsService,
      private filtersGlobalsService: FiltersGlobalsService,
      @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    ngOnInit(): void {
      if (isPlatformBrowser(this.platformId)) {
        this.metaTagsService.getMetas();

        //! Valida se a imagem ja carregou para apresentar se nao persiste o skeleton
        this.filtersGlobalsService.checkImageLoad(this.imageUrl).then(isLoaded => {
          this.isImageLoaded = isLoaded;
        }).catch(error => {
          console.log(error, 'Error loading image');
        });
      }
    }

    download() {
      this.api.downloadPDF().subscribe(res => {
        let url = window.URL.createObjectURL(res);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'Download PDF';
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });
    }

  }
