import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-depoimentos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './depoimentos.component.html',
  styleUrl: './depoimentos.component.scss'
})
export class AdminDepoimentosComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    texto: ['', Validators.required],
    tratamento: ['', Validators.required],
    nota: [5, Validators.required],
    publicado: [true],
    data: [new Date().toISOString().slice(0, 10), Validators.required]
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) return;
    this.data.addDepoimento(this.form.getRawValue());
    this.form.reset({ nota: 5, publicado: true, data: new Date().toISOString().slice(0, 10) });
  }
}
