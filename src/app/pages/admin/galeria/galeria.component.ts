import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-galeria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class AdminGaleriaComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    titulo: ['', Validators.required],
    imagem: ['', Validators.required],
    categoria: ['Clínica', Validators.required],
    publicado: [true]
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) return;
    this.data.addGaleria(this.form.getRawValue());
    this.form.reset({ categoria: 'Clínica', publicado: true });
  }
}
