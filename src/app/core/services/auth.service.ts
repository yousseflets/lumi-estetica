import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'lumi_user';
  private readonly currentUser = signal<User | null>(this.loadUser());

  readonly user = this.currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUser());
  readonly isAdmin = computed(() => this.currentUser()?.role === 'admin');
  readonly isCliente = computed(() => this.currentUser()?.role === 'cliente');

  constructor(private router: Router) {}

  login(email: string, password: string): { ok: boolean; message?: string } {
    const users: Record<string, { password: string; user: User }> = {
      'admin@lumi.com': {
        password: 'admin123',
        user: {
          id: 'u-admin',
          nome: 'Administradora Lumi',
          email: 'admin@lumi.com',
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
        }
      },
      'cliente@lumi.com': {
        password: 'cliente123',
        user: {
          id: 'c1',
          nome: 'Ana Beatriz Costa',
          email: 'cliente@lumi.com',
          role: 'cliente',
          telefone: '(11) 98888-1111',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
        }
      }
    };

    const found = users[email.toLowerCase()];
    if (!found || found.password !== password) {
      return { ok: false, message: 'E-mail ou senha inválidos.' };
    }

    this.currentUser.set(found.user);
    localStorage.setItem(this.storageKey, JSON.stringify(found.user));
    return { ok: true };
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/']);
  }

  requireRole(role: UserRole): boolean {
    return this.currentUser()?.role === role;
  }

  private loadUser(): User | null {
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }
}
