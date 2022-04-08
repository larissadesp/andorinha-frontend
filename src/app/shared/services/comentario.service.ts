import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/comentario';
import { ComentarioSeletor } from '../models/seletor/comentario.seletor';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor( private http: HttpClient ) { }

  listarTodos(seletor: ComentarioSeletor): Observable<Array<Comentarios>> {
    return this.http.post<Array<Comentarios>>("http://localhost:8080/andorinha-backend/api/comentario/pesquisar", seletor);
  }

  inserir(comentario: Comentarios): Observable<Comentarios> {
    return this.http.post<Comentarios>("http://localhost:8080/andorinha-backend/api/comentario", comentario);
  }
  
}
