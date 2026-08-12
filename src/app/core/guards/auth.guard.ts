import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserRole } from '../models';

export const authGuard = (role: UserRole): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (auth.requireRole(role)) {
      return true;
    }

    return router.createUrlTree(['/login'], {
      queryParams: { redirect: role === 'admin' ? '/admin' : '/minha-area' }
    });
  };
};
