/*Crie uma função que receba uma temperatura em Fahrenheit 
e chame uma função que converta para Celsius.. C = 9*C/5 - 32 
 */

const read = require('readline-sync')



let num = parseInt(read.question("Digite um valor referente a temperatura em Celsius: ")) 

let calculo = ((num - 32) * (5 / 9)).toFixed(1)

 if( !num  ){    
    console.log("Preencha valores reais da temperatura!")
}else{
    console.log(`${num}°F na cidade.`)
    console.log(`Temperatura na cidade em Celsius= ${calculo}°C`)
}