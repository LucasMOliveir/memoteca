import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Pensamento } from '../pensamento';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  imports: [NgClass, RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: 'modelo2'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g';
    }
    else{
      return 'pensamento-p'
    }
  }
}