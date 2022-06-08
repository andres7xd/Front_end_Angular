import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { IData } from '../models/responses/i-data';

@Injectable({
    providedIn: 'root'
  })

export class DataService {

    constructor(private httpClient: HttpClient) { }

    GetData(): Observable <IData[]> {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
    
        const url = `https://jsonplaceholder.typicode.com/todos`;
    
        return this.httpClient.get<IData[]>(url, { headers });
      }
  
      
}



