import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MetaTagsService } from '../../shared/utils/meta-tags.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MetaTagsService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private api: ApiService,
    private metaTagsService: MetaTagsService
  ){
  }
  ngOnInit(): void {

    //! Constroi os metatags
    this.metaTagsService.getMetas();
  }

  Download(){
    this.api.downloadPDF().subscribe(res => {
      // console.log(res, 'res')
      let url = window.URL.createObjectURL(res);
      let a = document.createElement('a');
      a.href = url;
      a.download = 'Download PDF';
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
  }
}
