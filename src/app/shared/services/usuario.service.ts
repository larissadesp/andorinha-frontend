import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Resultado } from '../models/util/resultado';
import { Observable, of } from 'rxjs';
import {UsuarioSeletor} from '../models/seletor/usuario.seletor';
import { HttpClient } from '@angular/common/http';


const USUARIOS = [
];

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarTodos(): Observable<Array<Usuario>>{
    return this.http.get<Array<Usuario>>("http://localhost:8080/andorinha-backend/api/usuario");
  }

  pesquisar(seletor: UsuarioSeletor): Observable<Array<Usuario>> {
    return this.http.post<Array<Usuario>>("http://localhost:8080/andorinha-backend/api/usuario/pesquisar", seletor);
    //return of( new Resultado<Usuario>().of(this.paginar( USUARIOS, seletor.limite, seletor.pagina ), USUARIOS.length) );
  }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/andorinha-backend/api/usuario", usuario);
  }

  contar(seletor: UsuarioSeletor): Observable<Number> {
    return this.http.post<Number>("http://localhost:8080/andorinha-backend/api/usuario/contar", seletor);
  }

  private paginar( array: Array<Usuario>, limite: number, pagina: number ): Array<Usuario>{
    return array.slice( (pagina - 1) * limite, (pagina) * limite);
  }
}
