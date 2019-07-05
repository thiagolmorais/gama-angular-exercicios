import { Component, OnInit } from '@angular/core';
import { Linguagem } from 'src/typings/Linguagem';
import { LinguagemService } from '../linguagem.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-linguagem',
  templateUrl: './add-linguagem.component.html',
  styleUrls: ['./add-linguagem.component.css']
})
export class AddLinguagemComponent implements OnInit {
  linguagem: Linguagem = {
    id: null,
    name: '',
    creator: '',
    year: null,
  }
  constructor(private linguagemService: LinguagemService, private router: Router) { }

  ngOnInit() {
  }

  enviar(){
    console.log(this.linguagem);
    this.linguagemService.enviar(this.linguagem).subscribe(() => {
      alert('Linguagem adicionada com sucesso');
      this.router.navigateByUrl('/languages');
    });
  }
}
