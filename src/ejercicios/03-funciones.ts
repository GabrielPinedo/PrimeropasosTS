function sumar(a: number, b: number): number { //PODEMOS ESPECIFICAR QUE TIPO DE VARIABLE RETORANARÁ LA FUNCIÓN
    return (a + b);
}

const sumarFlecha = (a: number, b: number): number => {//DE IGUAL FORMA EN LAS FUNCIONES EN FLECHA, PODEMOS ESPECIFICAR QUE TIPO DE VARIABLE RETORNAMOS
    return a + b
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

//const resultado = multiplicar(10, 0, 30);


interface personajeLOR {
    nombre: string;
    pv: number;
    mostrarPV: () => void;
}
function curar(personaje: personajeLOR, curarX: number): void {

    personaje.pv += curarX;

}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Strider',
    pv: 0,
    mostrarPV() {
        console.log("Pundos de vida:", this.pv);
    }
}
curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarPV();