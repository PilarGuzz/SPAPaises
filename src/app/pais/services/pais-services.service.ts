import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SPAPaises } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {
  private url : string = 'https://restcountries.com/v3.1/';

  constructor(private http : HttpClient) { }

  buscarPais ( query: string): Observable<SPAPaises[]> {
    let clean = query.trim().toLowerCase();
   
    return this.http.get<SPAPaises[]>(this.url+"name/" + clean)
 
  }
  
  buscarPaisCapital( query: string): Observable<SPAPaises[]> {
    let clean = query.trim().toLowerCase();
   
    return this.http.get<SPAPaises[]>(this.url+"capital/" + clean)
 
  }

  country(code:string): Observable<SPAPaises[]>{
    return this.http.get<SPAPaises[]>(this.url+"alpha/" + code)
  }


}
