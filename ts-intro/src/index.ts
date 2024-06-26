/*
    ===== Código de TypeScript =====
*/

interface Dirr  {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Dirr;
    mostrarDireccion: () => string;

}


const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', '+this.direccion.ciudad+', '+this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);