let numero1 = parseFloat(prompt("Por favor, ingrese el primer número:"));
let numero2 = parseFloat(prompt("Por favor, ingrese el segundo número:"));

if (numero1 > numero2) {
    document.write("El" + numero1 + "es el número más grande");
} else if (numero2 > numero1) {
    document.write("El" + numero2 + "es el número más grande");
} else {
    document.write("Ambos números son iguales");
}