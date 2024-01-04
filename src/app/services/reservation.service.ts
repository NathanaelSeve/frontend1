import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  readonly API_URL = 'http://localhost:4000';
  readonly ENDPOINT_RESERVATION = "/reservation"

  constructor(private httpClient: HttpClient) { }

  getReservations(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}${this.ENDPOINT_RESERVATION}`);
  }

  saveItem(item: any) {
    return this.httpClient.post(`${this.API_URL}${this.ENDPOINT_RESERVATION}`, item);
  }

  updateItem(id: string, item: any) {
    return this.httpClient.put(`${this.API_URL}${this.ENDPOINT_RESERVATION}/${id}`, item);
  }

  deleteItem(id: string) {
    return this.httpClient.delete(`${this.API_URL}${this.ENDPOINT_RESERVATION}/${id}`);
  }

}

