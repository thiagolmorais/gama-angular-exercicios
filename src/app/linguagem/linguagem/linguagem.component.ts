import { Component, OnInit, Input } from '@angular/core';
import { Linguagem } from 'src/typings/Linguagem';

@Component({
  selector: 'app-linguagem',
  templateUrl: './linguagem.component.html',
  styleUrls: ['./linguagem.component.css']
})
export class LinguagemComponent implements OnInit {

  @Input() data: Linguagem;

  constructor() { }

  ngOnInit() {
  }

}