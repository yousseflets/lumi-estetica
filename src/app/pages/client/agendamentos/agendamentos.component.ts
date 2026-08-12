import { Component, computed } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-agendamentos',
  standalone: true,
  templateUrl: './agendamentos.component.html',
  styleUrl: './agendamentos.component.scss'
})
export class ClientAgendamentosComponent {
  readonly meus = computed(() =>
    this.data.agendamentos().filter((a) => a.clienteId === this.auth.user()?.id)
  );

  constructor(
    private auth: AuthService,
    public data: DataService
  ) {}
}
