

const read = require('readline-sync')

let item = parseInt(read.question("Digite a quantidade de produtos: "))
let soma = 1.99

function valorTotal(valor){
    console.log(`O valor a ser pago referente a ${item} produtos é ${valor.toFixed(2)}`)
}

for(let contador = 1.99; contador <= item; contador++){
    if(contador = item){
    soma = soma + contador
    } 
}

valorTotal(soma)


