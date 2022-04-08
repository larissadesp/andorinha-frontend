import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Usuario } from 'src/app/shared/models/usuario';
import { ApiService } from 'src/app/shared/services/api.service';
import { UsuarioListaComponent } from '../usuario-lista/usuario-lista.component';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.scss']
})
export class UsuarioDetalheComponent implements OnInit {

  usuario: Usuario;
  private usuarios: Array<Usuario> = new Array<Usuario>();

  constructor( private api: ApiService ) { }

  ngOnInit() {
    this.limparFormulario();
    this.listarUsuarios();
  }

  limparFormulario(): void {
    this.usuario = new Usuario();
  }

  listarUsuarios(): void {
    this.api.usuario().listarTodos().subscribe( usuarios => {
        this.usuarios = usuarios;
    });
  }

  cadastrar(): void {
    this.api.usuario().inserir(this.usuario).subscribe( u => {
    });
  }

}
