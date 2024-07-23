
export interface Contacto
{
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
  rut: string;
  mensaje: string;
  estado?: boolean;
  fecha_creacion?: string;
}
