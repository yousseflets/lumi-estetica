import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-tratamentos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tratamentos.component.html',
  styleUrl: './tratamentos.component.scss'
})
export class TratamentosComponent {
  categoria = signal<string>('todas');

  readonly filtrados = computed(() => {
    const cat = this.categoria();
    const list = this.data.procedimentos();
    return cat === 'todas' ? list : list.filter((p) => p.categoriaId === cat);
  });

  constructor(public data: DataService) {}
}
