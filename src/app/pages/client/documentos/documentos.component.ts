import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-documentos',
  standalone: true,
  templateUrl: './documentos.component.html',
  styleUrl: './documentos.component.scss'
})
export class ClientDocumentosComponent {
  constructor(public data: DataService) {}
}
