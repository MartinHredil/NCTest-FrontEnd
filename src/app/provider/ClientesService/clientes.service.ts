import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  URL = 'https://localhost:5001/clientes';

  constructor(private http: HttpClient) { }


  getClientes(){
    return this.http.get(this.URL);
  }

  saveCliente(formValues){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      })
    };
    let body = new HttpParams().set('name',formValues.name);
    body = body.append('surname',formValues.surname);
    body = body.append('address',formValues.address);
    return this.http.post(this.URL,body,httpOptions);
  }
}
