import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-antes-depois',
  standalone: true,
  templateUrl: './antes-depois.component.html',
  styleUrl: './antes-depois.component.scss'
})
export class AntesDepoisComponent {
  constructor(public data: DataService) {}
}
