import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@root/auth/services/auth.service';

import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, RippleModule],
  providers: [MessageService],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nombre: string = '';
  apellido: string = '';
  username: string = '';
  email: string = '';

  telefono: string = '';

  constructor(private authService: AuthService, private router: Router){}

  contacto() {

  }
    volver(){
    this.router.navigate(['/']);
  }
}


