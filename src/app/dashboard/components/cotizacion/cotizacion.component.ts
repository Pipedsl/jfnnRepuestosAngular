import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@root/auth/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { Cotizacion } from '@root/dashboard/interfaces/cotizacion.interface';
import { CotizacionService } from '@root/dashboard/services/cotizacion.service';
import { FileService } from '@root/shared/services/file.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dashboard-cotizacion',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule, RippleModule, CommonModule],
  providers: [MessageService],
  templateUrl: './cotizacion.component.html',
  styleUrl: './cotizacion.component.css'
})
export class CotizacionComponent {
  nombre: string = '';
  rut: string = '';
  email: string = '';
  mensaje: string = '';
  telefono: string = '';
  marca: string = '';
  modelo: string = '';
  anio: string = '';
  chasis: string = '';
  direccion: string = '';
  foto: string | null = null;
  estado: boolean = false;

  constructor(
    private cotizacionService: CotizacionService,
    private router: Router,
    private messageService: MessageService,
    private fileService: FileService,
  ){}

  cotizacion() {
    const newCotizacion: Cotizacion = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      rut: this.rut,
      mensaje: this.mensaje,
      marca: this.marca,
      modelo: this.modelo,
      anio: this.anio,
      chasis: this.chasis,
      direccion: this.direccion,
      foto: this.foto,
      estado: this.estado
    };

    this.cotizacionService.addCotizacion(newCotizacion).subscribe({
      next: (response) => {
        this.messageService.add({severity:'success', summary:'Success', detail:'Cotización enviada'});
        this.router.navigate(['/success']); // Redirige a una página de éxito
      },
      error: (error) => {
        this.messageService.add({severity:'error', summary:'Error', detail:'No se pudo enviar la cotización'});
    }
  });
}

  uploadFile(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      this.fileService.uploadFile(file, `Cotizaciones/${file.name}`).then(
        url => this.foto = url,
        error => console.error('Error uploading file:', error)
      );
    }
  }
}
