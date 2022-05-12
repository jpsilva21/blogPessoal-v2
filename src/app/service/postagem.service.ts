import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagens[]>{
    return this.http.get<Postagens[]>('http://localhost:8080/postagens', this.token)
  }

  getByIdPotagens(id: number): Observable<Postagens>{
    return this.http.get<Postagens>(`http://localhost:8080/postagens/${id}`, this.token)
  }

  postPostagens(postagens: Postagens): Observable<Postagens>{
    return this.http.post<Postagens>('http://localhost:8080/postagens', postagens, this.token)
  }

  putPostagens(postagens: Postagens): Observable<Postagens>{
    return this.http.put<Postagens>('http://localhost:8080/postagens', postagens, this.token)
  }

  deletePostagens(id: number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
  }
}
