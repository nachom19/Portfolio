import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backendportfoliomillan.herokuapp.com//personas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + 'listado');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  /*public save(Persona:persona): Observable<any>{
    return this.httpClient.post<any> (this.URL + `crear`, Persona);
  }*/

  public update(id:number, Persona:persona): Observable<any>{
    return this.httpClient.put<any> (this.URL + `actualizar/${id}`, Persona);
  }

  /*public delete(id:number): Observable<any>{
    return this.httpClient.delete<any> (this.URL + `borrar/${id}`);
  }*/
}
