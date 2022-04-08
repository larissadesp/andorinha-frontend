import { Tweet } from "./tweet";
import { Usuario } from "./usuario";

export class Comentarios {

    id: number;
    conteudo: string;
    data: Date;
    usuario: Usuario;
    tweet: Tweet;

}