import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-procedimentos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './procedimentos.component.html',
  styleUrl: './procedimentos.component.scss'
})
export class AdminProcedimentosComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    categoriaId: ['', Validators.required],
    duracaoMinutos: [60, Validators.required],
    preco: [0, Validators.required],
    destaque: [false],
    imagem: ['https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&h=1100&fit=crop']
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.data.addProcedimento(this.form.getRawValue());
    this.form.reset({
      duracaoMinutos: 60,
      preco: 0,
      destaque: false,
      imagem: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&h=1100&fit=crop'
    });
  }
}
