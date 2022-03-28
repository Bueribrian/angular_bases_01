import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
  styleUrls: ['heroe.component.scss'],
})
export class HeroeComponent {
  name: string = 'Ironman';
  edad: number = 43;

  get nombreCapitalizado() {
    return this.name.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.name} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 18;
  }
}
