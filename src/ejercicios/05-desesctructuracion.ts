//DESESTRUCTURANDO OBJETOS.
interface Reproductor { 
    volumen: number;
    segundo: number;
    cancion: string; 
    detalles: Detalles
}

interface Detalles {
    autor: string; 
    anio: number
}

const reproductor : Reproductor = { 
    volumen : 90,
    segundo : 360, 
    cancion : 'Para tu amor',
    detalles : {
        autor : "Juanes",
        anio : 2020
    }

}

const autor = 'Fulano';

const {volumen, segundo, cancion, detalles   } = reproductor;
const {autor : AutorDetalles} = detalles;
const {anio} = detalles; 

/*console.log('El volumen actual es: ', volumen);
console.log('El tiempo transcurrido actual es: ', segundo); 
console.log('La canción actual es: ', cancion)
console.log('Autor ', AutorDetalles)
console.log('Año de creación', anio); */

//DESECTRUCTURACIÓN DE ARREGLOS

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, p2 ,] = dbz; 
const[p1] =dbz;
const [, , p3] = dbz;
console.log('El segundo personaje es ', p2)
console.log('El primero personaje es', p1)
console.log('El tercer personaje es', p3)


