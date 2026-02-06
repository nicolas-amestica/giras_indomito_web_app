export interface User {
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  result: User;
}
