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
      content: 'Desenvolvedor de software há mais de 3 anos, trabalhei em alguns projetos como o hub de socio do Sport Club Internacional, site Sport Club de Recife, sistemas de venda de ingressos, entre outros projetos como Lading pages, sites de divulgação e projetos particulares.'
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
      content: "default-src 'self'"
    });
    this.metaTagService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0'
    });
  }
}
