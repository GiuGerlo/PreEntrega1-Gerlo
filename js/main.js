// Funciones
function agregarArticulo(articulo, cantidad) {
    switch (articulo) {
        case 'Camiseta':
            total += cantidad * 80;
            break;
        case 'Short':
            total += cantidad * 40;
            break;
        case 'Zapatilla':
            total += cantidad * 100;
            break;
        case 'Media':
            total += cantidad * 15;
            break;
        default:
            console.log('No se encontró el producto');
    }
}

function calcularDescuento(metodoPago) {
    switch (metodoPago) {
        case 'Efectivo':
            total *= 0.75;
            break;
        case 'Transferencia':
            total *= 0.85;
            break;
        case 'Tarjeta':
            console.log('De 3 a 6 cuotas sin interés');
            break;
        default:
            console.log('No se encontró el metodo de pago');
    }
}

//Inicio del programa
let total = 0;
let compra = true;

while (compra) {
    const articulo = prompt('Ingrese el articulo que quiera: Camiseta👕, Short🩳, Zapatilla👟, Media🧦, o EXIT para salir):');
    if (articulo === 'EXIT') {
        compra = false;
    } else {
        const cantidad = parseInt(prompt('Ingrese la cantidad de articulo/s:'));
        agregarArticulo(articulo, cantidad);
    }
}

const metodoPago = prompt('Ingrese el método de pago (Efectivo (25% off), Transferencia (15% off), Tarjeta):');
calcularDescuento(metodoPago);
console.log('El total a pagar es de : $', total);