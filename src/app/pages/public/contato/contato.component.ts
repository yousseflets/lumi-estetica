import { Component, OnInit, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss'
})
export class ContatoComponent implements OnInit {
  enviado = signal(false);

  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    nome: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    interesse: [''],
    mensagem: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    const interesse = this.route.snapshot.queryParamMap.get('interesse');
    if (interesse) {
      this.form.patchValue({ interesse });
    }
  }

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.data.addLead(this.form.getRawValue());
    this.enviado.set(true);
    this.form.reset();
  }
}
