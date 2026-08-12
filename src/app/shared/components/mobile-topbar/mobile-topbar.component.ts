import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobile-topbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="topbar">
      <a routerLink="/" class="logo" (click)="closed.emit()" aria-label="LUMI - inicio">
        <img src="assets/logo-lumi.png" alt="LUMI" />
      </a>
      <button
        type="button"
        class="burger"
        [class.open]="open()"
        (click)="toggled.emit()"
        [attr.aria-expanded]="open()"
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
    </header>
  `,
  styles: [`
    :host {
      display: none;
    }

    @media (max-width: 960px) {
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 80;
      }
    }

    .topbar {
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 12px;
      background: #fdfbf7;
      border-bottom: 1px solid rgba(168, 134, 86, 0.22);
    }

    .logo {
      display: flex;
      align-items: center;
      height: 44px;
      width: 44px;
      border-radius: 12px;
      overflow: hidden;
      background: #fdfbf7;
      flex-shrink: 0;
    }

    .logo img {
      height: 44px;
      width: 44px;
      object-fit: cover;
      display: block;
    }

    .burger {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(168, 134, 86, 0.28);
      border-radius: 12px;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      padding: 0;
      margin: 0;
      cursor: pointer;
      flex-shrink: 0;
    }

    .burger span {
      display: block;
      width: 16px;
      height: 1.5px;
      background: #8b6d42;
      border-radius: 999px;
      transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
    }

    .burger.open span:nth-child(1) {
      transform: translateY(6.5px) rotate(45deg);
    }

    .burger.open span:nth-child(2) {
      opacity: 0;
    }

    .burger.open span:nth-child(3) {
      transform: translateY(-6.5px) rotate(-45deg);
    }
  `]
})
export class MobileTopbarComponent {
  open = input(false);
  toggled = output<void>();
  closed = output<void>();
}
