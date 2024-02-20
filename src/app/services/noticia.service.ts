import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais + '&category=' + parametros.categoria + '&apiKey=d110d1c44d874324a0a68edd89d58963'
    return this.http.get(URL);
  }
}
