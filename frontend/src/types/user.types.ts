// Tipos de usuario
export type UserRole = 'admin' | 'usuario';

export interface User {
  id: number;
  nombre1: string;
  nombre2: string;
  apellido1: string;
  apellido2: string;
  cedula: string;
  correo: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  rol: UserRole;
}

export interface RegisterData {
  nombre1: string;
  nombre2?: string;
  apellido1: string;
  apellido2?: string;
  cedula: string;
  correo: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  clave: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}