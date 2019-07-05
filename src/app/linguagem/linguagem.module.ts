import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinguagemComponent } from './linguagem/linguagem.component';
import { ListaLinguagensComponent } from './lista-linguagens/lista-linguagens.component';
import { AddLinguagemComponent } from './add-linguagem/add-linguagem.component';
import { YearPipe } from './year.pipe';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: ListaLinguagensComponent },
  { path: 'add', component: AddLinguagemComponent },
];

@NgModule({
  declarations: [
    LinguagemComponent,
    ListaLinguagensComponent,
    AddLinguagemComponent,
    YearPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
  ]
})
export class LinguagemModule { }
