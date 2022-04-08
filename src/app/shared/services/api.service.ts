import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { TweetService } from './tweet.service';
import { ComentarioService } from './comentario.service';
import { CurtidasService } from './curtidas.service';
import { DeslikeService } from './deslike.service';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private usuarioService: UsuarioService,
              private tweetService: TweetService,
              private comentarioService: ComentarioService,
              private curtidasService: CurtidasService,
              private deslikeService: DeslikeService) { }

  public usuario(): UsuarioService {
    return this.usuarioService;
  }

  public tweet(): TweetService {
    return this.tweetService;
  }

  public comentario(): ComentarioService {
    return this.comentarioService;
  }

  public curtidas(): CurtidasService {
    return this.curtidasService;
  }

  public deslike(): DeslikeService {
    return this.deslikeService;
  }

}
