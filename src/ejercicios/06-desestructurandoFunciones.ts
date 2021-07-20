export interface Producto {
    desc: string; 
    precio: number;
}

const telefono : Producto = { 
    desc: 'Nokia V3',
    precio: 2000000, 
}

const tableta : Producto = {
    desc: 'samsung tap 3',
    precio: 4000000
}

export function calculaISV(productos: Producto[]) :[number, number]{
    let total = 0; 
    let nproducto = 0;
    let desc2 ='';
    productos.forEach(({precio, desc}) =>{
      total += precio;
      nproducto += 1;
     
    })
    
    return [total, total * 0.19];
}

const articulos = [telefono, tableta];
const [total, isv] = calculaISV(articulos);

console.log('El total es- : ', total);
console.log('el impuesto sobre la venta es dse : ', isv);