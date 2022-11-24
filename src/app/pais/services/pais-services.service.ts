import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SPAPaises } from '../interfaces/searchResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisServicesService {
  private url : string = 'https://restcountries.com/v3.1/name/';
  results: SPAPaises[] = [];

  constructor(private http : HttpClient) { }
}

