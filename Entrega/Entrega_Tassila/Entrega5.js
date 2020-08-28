/*Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, 
a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.*/

const read = require('readline-sync')

let num = parseInt(read.question("Digite um numero para soma progressiva: "))
let soma = 0



for(let contador = 1; contador <= num; contador++){
   soma = soma + contador;
    console.log(contador);
}

console.log(`Resultado da sua soma progressiva: ${soma}`)