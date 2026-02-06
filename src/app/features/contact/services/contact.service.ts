import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Contact, ContactResponse } from '../../../shared/models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly apiService = inject(ApiService);

  sendEmail(contact: Contact): Observable<ContactResponse> {
    return this.apiService.post<ContactResponse>('/v1/contact/send-email', contact);
  }
}
