import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  frases: Frase[] = FRASES;
  instrucao: string = 'Traduza a frase';
  resposta: string = '';
  rodada: number = 0;
  rodadaFrase: Frase;
  progresso: number = 0;
  tentativas: number = 3;
  @Output() encerrarJogo = new EventEmitter<string>();

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      if(this.rodada == 4) {
        this.encerrarJogo.emit('vitória');
      }
      this.atualizaRodada();
    } else {
      this.tentativas--;
      if(this.tentativas < 0) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }
  
  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
