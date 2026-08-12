import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class DepoimentosComponent {
  readonly niveis = [1, 2, 3, 4, 5];
  readonly titulo = 'Hist\u00f3rias de cuidado';
  readonly subtitulo = 'A confian\u00e7a das nossas clientes \u00e9 o que mais nos move.';
  readonly sep = '\u00b7';

  constructor(public data: DataService) {}
}
