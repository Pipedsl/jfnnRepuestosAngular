export interface LoginRequest{
  email: string;
  password: string;
}

export interface LoginResponse{
  id: number;
  username: string;
  password: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  fecha_creacion: string;
  role: string;
  token: string;
}
