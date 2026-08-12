import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class AdminDashboardComponent {
  readonly leadsNovos = computed(
    () => this.data.leads().filter((l) => l.status === 'novo').length
  );

  constructor(public data: DataService) {}
}
