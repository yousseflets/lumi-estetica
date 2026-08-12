import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { MobileTopbarComponent } from '../../shared/components/mobile-topbar/mobile-topbar.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MobileTopbarComponent],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss'
})
export class PublicLayoutComponent {
  menuOpen = signal(false);

  readonly links = [
    { path: '/tratamentos', label: 'Tratamentos' },
    { path: '/antes-depois', label: 'Antes e depois' },
    { path: '/equipe', label: 'Equipe' },
    { path: '/depoimentos', label: 'Depoimentos' },
    { path: '/blog', label: 'Blog' },
    { path: '/contato', label: 'Contato' }
  ];

  constructor(public auth: AuthService) {}

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
