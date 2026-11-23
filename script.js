
let numero = +prompt("Digite uma quantidade :)");
let numeroA = 0;
let numeroB = 1;
let proximo;

for (let contador = 0; contador < numero; contador++) {
  proximo = numeroA + numeroB;
  numeroA = numeroB;
  numeroB = proximo; console.log(proximo);
};

