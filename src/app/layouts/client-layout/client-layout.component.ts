import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MobileTopbarComponent } from '../../shared/components/mobile-topbar/mobile-topbar.component';

@Component({
  selector: 'app-client-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MobileTopbarComponent],
  templateUrl: './client-layout.component.html',
  styleUrl: './client-layout.component.scss'
})
export class ClientLayoutComponent {
  menuOpen = signal(false);

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

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
