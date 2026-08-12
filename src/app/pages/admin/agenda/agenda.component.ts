import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-admin-agenda',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AdminAgendaComponent {
  private readonly fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    clienteId: ['', Validators.required],
    procedimentoId: ['', Validators.required],
    profissionalId: ['', Validators.required],
    dataHora: ['', Validators.required],
    status: ['agendado' as const, Validators.required],
    observacoes: ['']
  });

  constructor(public data: DataService) {}

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const raw = this.form.getRawValue();
    const cliente = this.data.clientes().find((c) => c.id === raw.clienteId);
    const procedimento = this.data.procedimentos().find((p) => p.id === raw.procedimentoId);
    const profissional = this.data.profissionais().find((p) => p.id === raw.profissionalId);
    if (!cliente || !procedimento || !profissional) return;

    this.data.addAgendamento({
      clienteId: cliente.id,
      clienteNome: cliente.nome,
      procedimentoId: procedimento.id,
      procedimentoNome: procedimento.nome,
      profissionalId: profissional.id,
      profissionalNome: profissional.nome,
      dataHora: raw.dataHora,
      status: raw.status,
      observacoes: raw.observacoes
    });
    this.form.reset({ status: 'agendado' });
  }
}
