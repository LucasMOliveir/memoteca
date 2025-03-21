import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly api = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.api);
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.api, pensamento);
  }

  excluir(id: string): Observable<Pensamento>{
    const url = `${this.api}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: string): Observable<Pensamento>{
    const url = `${this.api}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.api}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }
}
