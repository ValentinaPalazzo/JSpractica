let numero = parseFloat(prompt("Por favor, ingresa un número:"));
let resultado = "";

if (numero % 2 === 0) {
    resultado = "El " + numero + " es divisible por 2.";
} else if (numero % 3 === 0) {
    resultado = "El " + numero + " es divisible por 3.";
} else if (numero % 5 === 0) {
    resultado = "El " + numero + " es divisible por 5.";
} else if (numero % 7 === 0) {
    resultado = "El " + numero + " es divisible por 7.";
} else {
    resultado = "El " + numero + " no es divisible por 2, 3, 5, ni 7.";
}

document.write(resultado);
