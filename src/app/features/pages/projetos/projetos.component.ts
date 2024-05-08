import { Component } from '@angular/core';
import { ProjetoAgendamentosComponent } from '../../components/projetos/projeto-agendamentos/projeto-agendamentos.component';
import { ProjetoDietComponent } from '../../components/projetos/projeto-diet/projeto-diet.component';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ProjetoAgendamentosComponent, ProjetoDietComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss'
})
export class ProjetosComponent {

}
