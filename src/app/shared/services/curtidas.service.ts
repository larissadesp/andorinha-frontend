import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet';
import { HttpClient } from '@angular/common/http';
import { Curtidas } from '../models/curtidas';

@Injectable({
    providedIn: 'root'
  })
  export class CurtidasService {
  
    constructor( private http: HttpClient ) { }

    darLike(idTweet: number): Observable<Curtidas> {
        return this.http.get<Curtidas>("http://localhost:8080/andorinha-backend/api/curtidas/" + idTweet);
    }

}