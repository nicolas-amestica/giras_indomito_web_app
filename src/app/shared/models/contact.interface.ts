export interface Contact {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  success: boolean;
}
