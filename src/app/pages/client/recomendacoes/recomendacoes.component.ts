import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-recomendacoes',
  standalone: true,
  templateUrl: './recomendacoes.component.html',
  styleUrl: './recomendacoes.component.scss'
})
export class ClientRecomendacoesComponent {
  constructor(public data: DataService) {}
}
