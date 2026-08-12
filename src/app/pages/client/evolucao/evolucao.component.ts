import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-evolucao',
  standalone: true,
  templateUrl: './evolucao.component.html',
  styleUrl: './evolucao.component.scss'
})
export class ClientEvolucaoComponent {
  constructor(public data: DataService) {}
}
