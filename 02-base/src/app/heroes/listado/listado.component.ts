import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman','Iroman', 'Hulk', 'Thor', 'Capitan America'];


  borrarHeroe() : void{
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
