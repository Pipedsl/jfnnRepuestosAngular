export interface Cotizacion {
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
  rut: string;
  marca: string;
  modelo: string;
  anio: string;
  chasis: string;
  direccion: string;
  mensaje: string;
  estado: boolean;
  fecha_creacion?: string;
  foto: string;
}
