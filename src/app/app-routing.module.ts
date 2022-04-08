import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './components/sample/sample-component/sample-component';
import { UsuarioListaComponent } from './modules/usuario/usuario-lista/usuario-lista.component';
import { UsuarioDetalheComponent } from './modules/usuario/usuario-detalhe/usuario-detalhe.component';
import { TweetsComponent } from './modules/andorinha/tweets/tweets.component';
import { ComentariosComponent } from './modules/andorinha/comentarios/comentarios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tweets',
    pathMatch: 'full'
  },
  {
    path: 'usuario-lista',
    component: UsuarioListaComponent
  },
  {
    path: 'usuario-detalhe',
    component: UsuarioDetalheComponent
  },
  {
    path: 'tweets',
    component: TweetsComponent
  },
  {
    path: 'comentarios/:id',
    component: ComentariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
