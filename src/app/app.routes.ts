import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { SobreComponent } from './features/pages/sobre/sobre.component';
import { ProjetosComponent } from './features/pages/projetos/projetos.component';
import { KdevDicasComponent } from './features/pages/kdev-dicas/kdev-dicas.component';
import { PageNotFoundComponentComponent } from './features/pages/page-not-found-component/page-not-found-component.component';

export const routes: Routes = [
  {
    path : '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component: HomeComponent,
    title: 'Home',
    pathMatch: 'full'
  },
  {
    path : 'sobre',
    component: SobreComponent,
    title: 'Painel',
    pathMatch: 'full'
  },
  {
    path : 'projetos',
    component: ProjetosComponent,
    title: 'Projetos',
    pathMatch: 'full'
  },
  {
    path : 'kdevdicas',
    component: KdevDicasComponent,
    title: 'KDev Dicas',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponentComponent
  },
];
