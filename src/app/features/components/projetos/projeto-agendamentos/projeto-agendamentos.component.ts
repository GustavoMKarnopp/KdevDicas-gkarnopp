import { Component, Input } from '@angular/core';
import { ProjetosComponent } from '../../../pages/projetos/projetos.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-projeto-agendamentos',
  standalone: true,
  imports: [ProjetosComponent, NgxSkeletonLoaderModule],
  templateUrl: './projeto-agendamentos.component.html',
  styleUrl: './projeto-agendamentos.component.scss'
})
export class ProjetoAgendamentosComponent {
  @Input() imageUrlGif1: string = '';
  @Input() isImageLoadedGif1: boolean = false;
}
