import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  frases: Frase[] = FRASES;
  instrucao: string = 'Traduza a frase';
  resposta: string = '';
  rodada: number = 0;
  rodadaFrase: Frase;
  progresso: number = 0;
  tentativas: number = 3;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.rodadaFrase);
  }

  ngOnInit(): void {
  }

  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value);
    //console.log(this.resposta);
  }

  verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta!');
      this.rodada++;
      this.progresso = this.progresso + (100 / this.frases.length);
      this.atualizaRodada();
    } else {
      //alert('A tradução está errada.');
      this.tentativas--;
      if(this.tentativas < 0) {
        alert('Você perdeu todas as chances');
      }
    }
  }
  
  atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = '';
  }
}
