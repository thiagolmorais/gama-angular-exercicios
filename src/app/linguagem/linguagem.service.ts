import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Linguagem } from 'src/typings/Linguagem';

@Injectable({
  providedIn: 'root'
})
export class LinguagemService {

  private pLinguagem = new BehaviorSubject(0);

  linguagem = this.pLinguagem.asObservable();

  constructor(private httpClient: HttpClient) { }

  getLinguagens(): Observable<Linguagem[]> {
    return this.httpClient.get<Linguagem[]>('http://localhost:3000/languages')
  }

  enviar(linguagem: Linguagem){
    return this.httpClient.post('http://localhost:3000/languages', linguagem)
  }


}
