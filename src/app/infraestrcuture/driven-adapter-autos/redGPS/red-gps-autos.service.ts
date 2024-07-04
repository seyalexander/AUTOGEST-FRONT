import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedGpsAutosService {

  private url = 'https://api.service24gps.com/api/v1/vehicleGetAll'

  getAutos(): Observable<any> {
    return this.httpClient.get<any>(this.url)
  }

  constructor(private httpClient: HttpClient) { }
}
