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

for(var element of fruta) {
    console.log(element.toUpperCase());
}

//4 Crear una variable que contenga el valor 'La Manzana es Verde' y utilizarlo para:
var manzanaVerde = 'La Manzana es Verde';

// a Convertirlo a minúscula y mostrar el resultado (método toLowerCase).
console.log(manzanaVerde.toLowerCase());

//b Obtener los últimos 4 caracteres del string (método substring).
var ultimos4;

ultimos4 = manzanaVerde.substring(15,19);
console.log(ultimos4);
//c Obtener los caracteres 3, 4 y 5 del string (método substring).
var caracter3, caracter4, caracter5;
caracter3 = manzanaVerde.charAt(3);
caracter4 = manzanaVerde.charAt(4);
caracter5 = manzanaVerde.charAt(5);
console.log('El caracter 3 es: ' + caracter3 + ', el caracter 4 es: ' + caracter4 + ' y el caracter 5 es: ' + caracter5);
//d Obtener un array con las palabras que hay en el string, asumiendo que cada
//palabra termina cuando se encuentra el carácter espacio (método split).
var arr;
arr = manzanaVerde.split(',');
console.log(arr);

//5.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
//string con la primera letra convertida a mayúscula.
var textoEj5;
textoEj5 = 'programar';

function aMayuscula(textoEj5)
{
    return textoEj5.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ');
}
console.log(aMayuscula(textoEj5));


//6 Crear una función que reciba como parámetro un string y que devuelva ese mismo
//string con la primera letra DE CADA PALABRA convertida a mayúscula.
var cadaPalabra;
cadaPalabra = 'mi nombre es ivan';
function cadaPalabraMayuscula(cadaPalabra){
    return cadaPalabra.split(' ').map( e => e[0].toUpperCase() + e.slice(1)).join(' ')

}
console.log(cadaPalabraMayuscula(cadaPalabra));


//7 Crear una función que reciba como parámetro un string y que devuelva la cantidad
//de vocales que posee.
var word;

word = 'Murcielago';
function contarVocales(texto) {
    var contadorVocales = 0;
    var vocales =  ["a", "e" , "i", "o", "u", "A", "E", "I", "O", "U"];
    for(var i = 0; i < word.length; ++i){
        if(vocales.indexOf(word[i]) >= 0){
            ++contadorVocales;
        }     
    }
    return contadorVocales;
}
console.log(contarVocales(word));

//8 Dado el siguiente código determinar qué valores poseerán las variables miNumero y
//miArray al final del script

function miFuncion(unNumero, unArray){
    ++unNumero;
    unArray.pop();
    }
    var miNumero = 15;
    var miArray = ['Un texto', true, 4, 5];
    miFuncion(miNumero, miArray)
    
//miArray quedará asi: ['Un texto', true, 4]
//miNumero quedará asi: 16


    

