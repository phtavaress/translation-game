import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jogoEmAndamento: boolean = true;
  encerramento: string;

  encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.encerramento = tipo;
  }
}
