/*Crie uma função que receba uma temperatura em Celsius 
e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32 
 */

const read = require('readline-sync')



let num = parseInt(read.question("Digite um valor referente a temperatura em Celsius: ")) 

let calculo = (num * (9 / 5)) + 32

 if( !num  ){    
    console.log("Preencha valores reais da temperatura!")
}else{
    console.log(`${num}°C na cidade.`)
    console.log(`Temperatura em Fahrenheit= ${calculo}°F`)
}

// outra forma correta: 

// let temperatura = parseInt(read.question("Digite a temperatura: "))

// function calcularTemperatura(num){
// console.log(num * (9 / 5) + 32)
// }

// calcularTemperatura(temperatura)

