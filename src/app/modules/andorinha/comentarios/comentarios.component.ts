import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comentarios } from 'src/app/shared/models/comentario';
import { ComentarioSeletor } from 'src/app/shared/models/seletor/comentario.seletor';
import { Tweet } from 'src/app/shared/models/tweet';
import { Usuario } from 'src/app/shared/models/usuario';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
}) 
export class ComentariosComponent implements OnInit {

  public comentario: Comentarios = new Comentarios();

  public comentarios: Array<Comentarios> = new Array<Comentarios>();

  public seletor: ComentarioSeletor = new ComentarioSeletor();

  public tweet: Tweet = new Tweet();

  constructor( private api: ApiService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.limparComentario();
    this.route.params.subscribe(params => {
      if (params.id){
        this.seletor.idTweet = params.id
        this.comentario.tweet.id = params.id
      }
      this.listarComentarios();
    })
  }

  limparComentario(): void {
    let user: Usuario = new Usuario();
    user.id = 1;
    user.nome = "Usuário 1";
    this.comentario.usuario = user;
  }

  listarComentarios(): void {
    this.api.comentario().listarTodos(this.seletor).subscribe( comentarios => {
        this.comentarios = comentarios;
    });
  }

  comentar(form: NgForm) {
    if (!form.valid){
      return alert("Preencha todos os campos.");
    }

    this.api.comentario().inserir(this.comentario).subscribe( c => { 
      this.limparComentario();
      this.listarComentarios();
    });
  }
}
