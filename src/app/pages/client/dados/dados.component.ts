import { Component, computed } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-client-dados',
  standalone: true,
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.scss'
})
export class ClientDadosComponent {
  readonly cliente = computed(() => this.data.clientes().find((c) => c.id === this.auth.user()?.id) ?? null);

  constructor(
    public auth: AuthService,
    public data: DataService
  ) {}
}
