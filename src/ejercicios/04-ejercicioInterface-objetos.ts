interface superHeroe {
    nombre: string;
    edad: number; 
    direccion : Direccion; // PODEMOS DECLARAR LA PROPIEDAD DIRECCION CON OTRA INTERFACE, EN ESTE CASO LA INTERFACE DIRECCION.
    mostrarDireccion: () => string | number; 
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string,
}

const superHeroe: superHeroe ={

    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre +', '+this.direccion.ciudad+ ', '+ this.direccion.pais
    }

}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion)
