import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://pdf-curric-gk-2024.s3.us-east-2.amazonaws.com/CV_GUSTAVO_KARNOPP_2024.pdf'
  constructor(
    private http: HttpClient
  ) { }

  downloadPDF(){
    let headers = new HttpHeaders();
    headers = headers.set('Accept','application/pdf')
    return this.http.get(this.url, {headers:headers, responseType: 'blob'})
  }
}
