import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-categorias',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export class AdminCategoriasComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    slug: ['', Validators.required],
    descricao: ['', Validators.required]
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) return;
    this.data.addCategoria(this.form.getRawValue());
    this.form.reset();
  }
}
