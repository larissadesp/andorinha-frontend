import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Curtidas } from "../models/curtidas";
import { Deslike } from "../models/deslike";
import { Tweet } from "../models/tweet";

@Injectable({
    providedIn: 'root'
  })
  export class DeslikeService {
  
    constructor( private http: HttpClient ) { }

    darDeslike(idTweet: number): Observable<Deslike> {
        return this.http.get<Deslike>("http://localhost:8080/andorinha-backend/api/deslike/" + idTweet);
    }

  }