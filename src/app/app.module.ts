import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HttpClientModule } from '@angular/common/http';
import { Linguagem } from 'src/typings/Linguagem';
import { LinguagemComponent } from './linguagem/linguagem.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaLinguagensComponent } from './lista-linguagens/lista-linguagens.component';

const routes: Routes = [
  { path: 'counter', component: ContadorComponent },
  { path: 'languages', component: ListaLinguagensComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LinguagemComponent,
    ListaLinguagensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
