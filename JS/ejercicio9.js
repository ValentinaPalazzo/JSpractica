let frase = prompt("Por favor, ingrese una frase:");
let vocales = frase.split('').filter(char => 'aiueoAIUEO'.includes(char)).join('');
document.write(vocales)