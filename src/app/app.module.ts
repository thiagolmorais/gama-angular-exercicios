import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HttpClientModule } from '@angular/common/http';
import { Linguagem } from 'src/typings/Linguagem';
import { LinguagemComponent } from './linguagem/linguagem.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaLinguagensComponent } from './lista-linguagens/lista-linguagens.component';
import { AddLinguagemComponent } from './add-linguagem/add-linguagem.component';
import { FormsModule } from '@angular/forms';
import { YearPipe } from './year.pipe';

const routes: Routes = [
  { path: 'counter', component: ContadorComponent },
  { path: 'languages', component: ListaLinguagensComponent },
  { path: 'add-languagem', component: AddLinguagemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LinguagemComponent,
    ListaLinguagensComponent,
    AddLinguagemComponent,
    YearPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
