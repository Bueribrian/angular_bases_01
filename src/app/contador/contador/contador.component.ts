import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent {
  title = 'Contador';
  count: number = 0;
  base: number = 5;

  acumular(valor: number) {
    this.count += valor;
  }
}
