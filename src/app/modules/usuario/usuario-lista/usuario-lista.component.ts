import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Usuario } from 'src/app/shared/models/usuario';
import {UsuarioSeletor} from '../../../shared/models/seletor/usuario.seletor';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})

export class UsuarioListaComponent implements OnInit {

  usuarios: Array<Usuario>;
  totalUsuarios: Number;

  seletor: UsuarioSeletor;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.seletor = new UsuarioSeletor();
    this.seletor.limite = 5;
    this.seletor.pagina = 1;
    this.pesquisar();
  }

  listarUsuarios(){
    this.api.usuario().listarTodos().subscribe( usuarios =>{
     
      this.usuarios = usuarios;
      this.totalUsuarios = this.usuarios.length;
    })
  }

  pesquisar() {
    this.api.usuario().pesquisar( this.seletor ).subscribe(resultado => {
      this.usuarios = resultado;
      this.contarTotalUsuarios();
    });
  }

  contarTotalUsuarios() {
    this.api.usuario().contar( this.seletor ).subscribe( resultado => {
      this.totalUsuarios = resultado;
    });
  }

}
