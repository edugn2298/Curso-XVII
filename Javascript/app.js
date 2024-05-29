var compras = {
  frutas: [
    {
      nombre: 'Manzana',
      tipos: ['Roja', 'Verde'],
      cantidad: 2,
      precio: 5
    },
    {
      nombre: 'Pera',
      cantidad: 3,
      precio: 6
    },
    {
      nombre: 'Uva',
      tipos: ['Verde', 'Morada'],
      cantidad: 1,
      precio: 10
    },
    {
      nombre: 'Sandia',
      cantidad: 1,
      precio: 20,
      tamanos: ['Grande', 'Mediana', 'Pequeña']
    }
  ],
  charcuteria: [
    {
      nombre: 'Jamón',
      cantidad: 1,
      precio: 100
    },
    {
      nombre: 'Salchichón',
      cantidad: 2,
      precio: 50
    }
  ]
}

//Impresion en consola:
console.log(compras.frutas[1]['nombre']);
console.log(compras.frutas[2]['precio']);
console.log(compras.frutas[3]['tamanos'][0]);
console.log(compras.charcuteria[1]['nombre']);

//Opcional 1:
let suma_frutas = compras.frutas[0]['precio']+compras.frutas[1]['precio']+compras.frutas[2]['precio']+compras.frutas[3]['precio'];
console.log(suma_frutas)
//Opcional 2:
let suma_charcuteria = compras.charcuteria[0]['precio']+compras.charcuteria[1]['precio'];
console.log(suma_charcuteria)
console.log('La suma total es: ' + (suma_charcuteria+suma_frutas))