//Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.

const read = require('readline-sync')

let conversao = parseFloat(read.question("Digite o valor em metros para converter em milimetros: "))


let calculo = (conversao * 1000)

if( !conversao ){
    console.log("Digite um valor para converter.")
}else{
    console.log(` ${conversao} metros`)
    console.log(` Seu valor em milímetros é: ${calculo} mm `)
}