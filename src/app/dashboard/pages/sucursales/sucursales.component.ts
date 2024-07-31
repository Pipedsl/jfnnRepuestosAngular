import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'dashboard-sucursales',
  standalone: true,
  imports: [CardModule],
  templateUrl: './sucursales.component.html',
  styleUrl: './sucursales.component.css'
})
export class SucursalesComponent {

}
