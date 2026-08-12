import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {
  readonly links = [
    { path: '/minha-area', label: 'Início', exact: true },
    { path: '/minha-area/dados', label: 'Dados pessoais' },
    { path: '/minha-area/historico', label: 'Histórico' },
    { path: '/minha-area/agendamentos', label: 'Agendamentos' },
    { path: '/minha-area/evolucao', label: 'Evolução' },
    { path: '/minha-area/recomendacoes', label: 'Recomendações' },
    { path: '/minha-area/documentos', label: 'Documentos' }
  ];

  constructor(public auth: AuthService) {}
}
