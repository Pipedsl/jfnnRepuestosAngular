import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'dashboard-politicas',
  standalone: true,
  imports: [CardModule],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {

}
