import { Component, OnInit } from '@angular/core';
import { Linguagem } from 'src/typings/Linguagem';
import { LinguagemService } from '../linguagem.service';

@Component({
  selector: 'app-lista-linguagens',
  templateUrl: './lista-linguagens.component.html',
  styleUrls: ['./lista-linguagens.component.css']
})
export class ListaLinguagensComponent implements OnInit {

  linguagens: Linguagem[];

  constructor(private linguagemService: LinguagemService) { }

  ngOnInit() {
    this.linguagemService.getLinguagens().subscribe(value => {
      this.linguagens = value;
    });
  }

}

