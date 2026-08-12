import { Component } from '@angular/core';
import { Lead } from '../../../core/models';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-leads',
  standalone: true,
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class AdminLeadsComponent {
  constructor(public data: DataService) {}

  atualizar(id: string, status: Lead['status']): void {
    this.data.updateLeadStatus(id, status);
  }
}
