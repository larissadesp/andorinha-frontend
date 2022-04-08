import * as internal from 'assert';
import { Usuario } from './usuario';
import { Curtidas } from './curtidas';
import { Deslike } from './deslike';

export class Tweet {

    id: number;
    conteudo: string;
    data: Date;
    usuario: Usuario;
    curtidas: Curtidas[];
    deslikes: Deslike[];

}
