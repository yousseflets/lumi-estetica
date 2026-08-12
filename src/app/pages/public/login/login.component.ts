import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  erro = signal('');

  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  preencher(tipo: 'admin' | 'cliente'): void {
    if (tipo === 'admin') {
      this.form.setValue({ email: 'admin@lumi.com', password: 'admin123' });
    } else {
      this.form.setValue({ email: 'cliente@lumi.com', password: 'cliente123' });
    }
    this.erro.set('');
  }

  entrar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.getRawValue();
    const result = this.auth.login(email, password);

    if (!result.ok) {
      this.erro.set(result.message ?? 'Falha no login');
      return;
    }

    const redirect = this.route.snapshot.queryParamMap.get('redirect');
    const role = this.auth.user()?.role;
    const destino = redirect || (role === 'admin' ? '/admin' : '/minha-area');
    this.router.navigateByUrl(destino);
  }
}
