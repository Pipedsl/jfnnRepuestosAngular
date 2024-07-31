import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from '@root/dashboard/interfaces/contacto.interface';
import { ContactoService } from '@root/dashboard/services/contacto.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'dashboard-contacto',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, RippleModule],
  providers: [MessageService],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre: string = '';
  rut: string = '';
  email: string = '';
  mensaje: string = '';
  telefono: string = '';
  estado: boolean = false;

  constructor(
    private contactoService: ContactoService,
    private router: Router,
    private messageService: MessageService
  ){}

  contacto() {
    const newContacto: Contacto = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      rut: this.rut,
      mensaje: this.mensaje,
      estado: this.estado
    };

    this.contactoService.addContacto(newContacto).subscribe({
      next: (response) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Contacto enviado'});
        this.router.navigate(['/success']); // Redirige a una página de éxito
      },
      error: (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:'No se pudo enviar el contacto'});
      }
    });
  }
}
