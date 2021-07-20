import { Producto,  calculaISV } from "./06-desestructurandoFunciones"

const carritoCompras: Producto[] = [
    {
        desc: 'Celular Samsung tap 2',
        precio: 163,
    },
    {
        desc: 'Celular Xiaomi redmi note 10s',
        precio: 200,
    }
]

const [total, descuento] = calculaISV(carritoCompras);

console.log(total, descuento);
