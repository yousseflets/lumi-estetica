import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class ClientDashboardComponent {
  readonly proximos = computed(() =>
    this.data
      .agendamentos()
      .filter((a) => a.clienteId === this.auth.user()?.id && (a.status === 'agendado' || a.status === 'confirmado'))
      .sort((a, b) => +new Date(a.dataHora) - +new Date(b.dataHora))
  );

  constructor(
    public auth: AuthService,
    public data: DataService
  ) {}
}
