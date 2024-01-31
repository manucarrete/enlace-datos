import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent implements OnInit{

  valor: number = this.tiraDado();
  @Output() enviaValor = new EventEmitter<number>();

  tiraDado():number {
    console.log("a")
    return Math.floor(Math.random() * 20);
  }

  ngOnInit() {
    this.enviaValor.emit(this.valor);
  }
}
