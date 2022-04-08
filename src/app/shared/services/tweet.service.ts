import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { HttpClient } from '@angular/common/http';
import { Comentarios } from '../models/comentario';

@Injectable({
    providedIn: 'root'
  })
  export class TweetService {
  
    constructor( private http: HttpClient ) { }

    listarTodos(): Observable<Array<Tweet>> {
        return this.http.get<Array<Tweet>>("http://localhost:8080/andorinha-backend/api/tweet");
    }

    listarComDeslike(): Observable<Array<Tweet>> {
        return this.http.get<Array<Tweet>>("http://localhost:8080/andorinha-backend/api/tweet");
    }

    inserir(tweet: Tweet): Observable<Tweet> {
        return this.http.post<Tweet>("http://localhost:8080/andorinha-backend/api/tweet", tweet);
    }

    darLike(id: number): Observable<number> {
        return this.http.get<number>("http://localhost:8080/andorinha-backend/api/tweet/dar-like/" + id);
    }

    darDeslike(id: number): Observable<number> {
        return this.http.get<number>("http://localhost:8080/andorinha-backend/api/tweet/dar-deslike/" + id);
    }

}