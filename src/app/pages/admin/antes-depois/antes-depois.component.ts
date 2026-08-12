import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-antes-depois',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './antes-depois.component.html',
  styleUrl: './antes-depois.component.scss'
})
export class AdminAntesDepoisComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    titulo: ['', Validators.required],
    procedimento: ['', Validators.required],
    descricao: ['', Validators.required],
    imagemAntes: ['', Validators.required],
    imagemDepois: ['', Validators.required],
    publicado: [true]
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) return;
    this.data.addAntesDepois(this.form.getRawValue());
    this.form.reset({ publicado: true });
  }
}
