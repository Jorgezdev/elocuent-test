// tipos de comillas
// comillas simples ' ' (boton al lado de 0)
// comillas dobles " " (shift + boton 2)

// comillas invertidas o backticks ` ` (boton Alt Gr + }) no confundir ´ ´ con comillas invertidas que estan al lado del boton p que no tienen funcion en javascript 
// las comillas invertidas se llaman template literals y permiten escribir texto en varias lineas y usar variables dentro del texto

// Las comillas simples y dobles son intercambiables, mientras que los backticks permiten interpolación de variables ${variable} y strings multilínea.

// ejemplo de comillas simples
let nombre = 'Juan';
console.log('Hola ' + nombre); // concatenación con comillas simples

// ejemplo de comillas dobles
let apellido = "Pérez";
console.log("Hola " + nombre + " " + apellido); // concatenación con comillas dobles

// ejemplo de comillas invertidas o backticks
let edad = 30;
console.log(`Hola ${nombre} ${apellido}, tienes ${edad} años`); // interpolación con comillas invertidas


// tambien puede sumar resultados dentro de las comillas invertidas
let frase = `la suma de 1000 * 2 es ${1000 * 2 }` 
console.log(frase);

// barra invertida \ permite escapar caracteres especiales como comillas dentro de un string (Alt Gr + ' al lado del boton 0)
let fraseEscapada = 'Ella dijo: \"Hola, ¿cómo estás?\"';
console.log(fraseEscapada); // con comillas dobles escapadas


// ejemplo de comillas invertidas con salto de línea
let textoMultilinea = `Este es un texto
que se extiende en
varias líneas.`;
console.log(textoMultilinea); // con comillas invertidas y salto de línea   


// \n es un carácter de nueva línea que se puede usar para crear saltos de línea dentro de un string
let textoConNuevaLinea = "Este es un texto\nque se extiende en\nvarias líneas con el slash con n.";
console.log(textoConNuevaLinea);


// resumen: las comillas simples y dobles son para strings normales, mientras que los backticks permiten interpolación de variables y texto multilínea. La barra invertida \ se usa para escapar caracteres especiales dentro de un string.
