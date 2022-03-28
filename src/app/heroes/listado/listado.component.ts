import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Thor',
    'Hulk',
    'WonderWoman',
    'Batman',
  ];
  heroesBorrados: string[] = [];

  borrarUnHeroe(id: number): void {
    this.heroes = this.heroes.filter((heroe, index) => {
      if (index !== id) {
        return true;
      } else {
        this.heroesBorrados.push(heroe);
        return false;
      }
    });
  }

  borrarTodosLosHeroes(): void {
    this.heroes = [];
  }
}
