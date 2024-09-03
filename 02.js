/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// Resolvendo o problema
const num = 21;
let a = 0;
let b = 1;
let c = 0;
let pertence = false;

while (c <= num) {
  if (c === num) {
    pertence = true;
    break;
  }

  c = a + b;
  a = b;
  b = c;
}

pertence
  ? console.log("O número informado pertence à sequência de Fibonacci.")
  : console.log("O número informado não pertence à sequência de Fibonacci.");
