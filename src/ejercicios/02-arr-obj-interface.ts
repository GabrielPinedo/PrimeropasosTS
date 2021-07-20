//ARREGLOS
let habilidades: string[] = ["Angel", "Pinedo", "Andres"]; // Siempre especifiquemos que tipo de arreglo es.

interface Personaje { //CON LAS INTERFACES PODEMOS DEFINIR O ESPECIFICAR EL TIPO DE OBJETO. 
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?:string;
}

//OBJETOS 
const personaje: Personaje = { //Con los dos puntos estamos asignando el tipo de interface que tendrá el objeto. 
    nombre: 'strider',
    hp: 100,
    habilidades: ['Bash', 'Counter','Striking']
}
personaje.puebloNatal = 'Pueblo palta'
console.table(personaje);
