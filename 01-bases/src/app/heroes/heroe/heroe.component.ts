import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe', 
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent {
    public nombre: string  = 'Ironman';
    public edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    camiarEdad(): void{
        this.edad = 30;
    }
}