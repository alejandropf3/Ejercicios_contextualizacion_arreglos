const frutas = [ //Inicializamos el arreglo
    "Manzana", "Pera", "Banano"
];

// • Realice las siguientes operaciones y escriba el resultado final del arreglo:
// • Agregue "Mango" al final.
// • Elimine el último elemento.
// • Agregue "Uva" al inicio.
// • Elimine el primer elemento.
// • Escriba cuántos elementos tiene el arreglo actualmente usando length.

frutas.push("Mango");
console.log(frutas);
console.log(frutas.length)

frutas.pop();
console.log(frutas);
console.log(frutas.length)

frutas.unshift("Uva"); // añadimos el dato en la primera posicion
console.log(frutas); //Mostramos el arreglo
console.log(frutas.length) //Mostramos el numero de elementos en el arreglo

frutas.shift();
console.log(frutas);
console.log(frutas.length)

// sistema añadira el dato "Uva" al principio y luego lo eliminara
//Luego agregara el elemento mango en la ultima posicion y luego lo eliminara



