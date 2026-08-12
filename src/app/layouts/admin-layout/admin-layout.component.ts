import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MobileTopbarComponent } from '../../shared/components/mobile-topbar/mobile-topbar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MobileTopbarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  menuOpen = signal(false);

  readonly links = [
    { path: '/admin', label: 'Painel', exact: true },
    { path: '/admin/clientes', label: 'Clientes' },
    { path: '/admin/procedimentos', label: 'Procedimentos' },
    { path: '/admin/profissionais', label: 'Profissionais' },
    { path: '/admin/agenda', label: 'Agenda' },
    { path: '/admin/depoimentos', label: 'Depoimentos' },
    { path: '/admin/antes-depois', label: 'Antes/depois' },
    { path: '/admin/categorias', label: 'Categorias' },
    { path: '/admin/galeria', label: 'Galeria' },
    { path: '/admin/leads', label: 'Leads' }
  ];

  constructor(public auth: AuthService) {}

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
