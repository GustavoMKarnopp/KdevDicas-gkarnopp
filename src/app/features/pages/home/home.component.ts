import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private api: ApiService){
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
