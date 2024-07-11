let numero1 = parseFloat(prompt("Por favor, ingrese el primer número:"));
let numero2 = parseFloat(prompt("Por favor, ingrese el segundo número:"));
let numero3 = parseFloat(prompt("Por favor, ingrese el tercer número:"));

let mayor = numero1;

if (numero2 > mayor) {
    mayor = numero2;
}

if (num3 > mayor) {
    mayor = numero3;
}

document.write("El " + mayor + " es el número más grande");
