import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-historico',
  standalone: true,
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export class ClientHistoricoComponent {
  constructor(public data: DataService) {}
}
