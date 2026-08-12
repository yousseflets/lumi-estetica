import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-profissionais',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profissionais.component.html',
  styleUrl: './profissionais.component.scss'
})
export class AdminProfissionaisComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    cargo: ['', Validators.required],
    bio: ['', Validators.required],
    especialidades: ['', Validators.required],
    foto: ['https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop'],
    ativo: [true]
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    this.data.addProfissional({
      nome: raw.nome,
      cargo: raw.cargo,
      bio: raw.bio,
      especialidades: raw.especialidades.split(',').map((s) => s.trim()).filter(Boolean),
      foto: raw.foto,
      ativo: raw.ativo
    });
    this.form.reset({
      foto: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop',
      ativo: true
    });
  }
}
