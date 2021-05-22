//1 Completar las condiciones de los if del siguiente script para que los mensajes de los
//alert se muestren de forma correcta.
// var num1 = 5;
// var num2 = 8;

// if((num1 - num2) <= 0)
// {
//     alert('num1 no es mayor que num2');
// }

// if((num1 + num2) > num1) 
// {
//     alert('num2 es positivo');
// }

// if((num1 * num2) != 0) 
// {
//     alert('num1 es negativo o distinto de cero');
// }

// if(num2 - 3 == num1 ) 
// {
//     alert('Incrementar en 1 unidad el valor de num1 lo hace mayor que num2');
// }


//2 Crear un Array que contenga al menos 3 nombres de frutas y utilizar el bucle for in
//para recórrelo y mostrar dichos valores con la función console.log

var fruta = ['manzana', 'pera', 'banana'];

for(var element of fruta) {
    console.log(element);
}

//3 Al Array del ejercicio anterior utilizarlo para:

//a Ordenar el array alfabéticamente y mostrar el resultado (método sort).

console.log(fruta.sort());

//b Agregar un elemento al final y al principio del arreglo (métodos push y
// unshift).

fruta.unshift('frutilla'); 
fruta.push('naranja');   
console.log(fruta);
    
//c Eliminar un elemento al final y al principio del arreglo (métodos pop y
// shift).

fruta.pop();  
fruta.shift();  
console.log(fruta);
   
//d Invertir el orden de los elementos en el array (método reverse).

console.log(fruta.reverse());
    
//e Recorrer el array utilizando el bucle while (usar la propiedad length del array
// en la condición) y guardar los valores en una variable del tipo string
// concatenandolos. Mostrar el valor de la variable al final.
var guardarAca;

for(var i = 0; i <= fruta.length ; i++)
{
    guardarAca = fruta[0] + ' ' + fruta[1] + ' ' + fruta[2];
    console.log(guardarAca);          
}

    
//f Recorrer el array utilizando el bucle for y mostrar cada uno de los valores
// convirtiéndolos a mayúsculas (método toUpperCase de la clase String).

for(var i=0; i <= fruta.length - 1; i++)
{
    console.log(fruta[i].toUpperCase());
}