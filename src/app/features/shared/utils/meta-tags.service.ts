import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser'

@Injectable({
  providedIn: 'root'
})
export class MetaTagsService {

  constructor(private metaTagService : Meta) { }
  getMetas(){
    this.metaTagService.updateTag({
      name: 'og:title',
      content: 'Portfólio Gustavo Karnopp'
    });
    this.metaTagService.updateTag({
      name: 'og:description',
      content: 'Desenvolvedor de software há mais de 3 anos, atuando em projetos como o hub de socio do Sport Club Internacional, site Sport Club de Recife, sistemas de venda de ingressos, entre outros.'
    });
    this.metaTagService.updateTag({
      name: 'og:image',
      content: 'https://img-front-portolio.s3.us-east-2.amazonaws.com/logo-500x500.png'
    });
    this.metaTagService.updateTag({
      name: 'og:url',
      content: 'https://gustavokarnopp.netlify.app/home'
    });
    // Atualizando SEO Tags
    this.metaTagService.updateTag({
      name: 'description',
      content: 'Descubra os projetos e habilidades de Gustavo Karnopp, especialista em desenvolvimento web.'
    });
    this.metaTagService.updateTag({
      name: 'robots',
      content: 'index, follow'
    });
    // Outras Meta Tags relevantes
    this.metaTagService.updateTag({
      httpEquiv: 'Content-Security-Policy',
      content: `
      default-src 'self';
      style-src 'self' 'unsafe-inline';
      connect-src 'self' https://pdf-curric-gk-2024.s3.us-east-2.amazonaws.com;
      img-src 'self' https://img-front-portolio.s3.us-east-2.amazonaws.com https://buck-gifs-portfolio-1.s3.us-east-2.amazonaws.com ;
      media-src 'self' https://videos-portfolio-gk.s3.us-east-2.amazonaws.com/Gerar+Gif.mp4 https://videos-portfolio-gk.s3.us-east-2.amazonaws.com/Diet+sem+audio.mp4;
      `
    });
    this.metaTagService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    });
  }
}
