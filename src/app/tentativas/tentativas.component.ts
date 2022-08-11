import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  coracaoVazio: string = '../../assets/coracao_vazio.png';
  coracaoCheio: string = '../../assets/coracao_cheio.png';
  coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
  @Input() tentativas: number;

  constructor() {
    console.log(this.coracoes);
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.tentativas !== this.coracoes.length) {
      this.coracoes[this.tentativas].cheio = false;
    }
    console.log('Tentativas recebidas do painel: ' + this.tentativas);
  }

}
