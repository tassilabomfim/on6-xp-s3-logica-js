/* Crie uma função com as seguintes características:

A função deve receber 3 parâmetros. ok
Se somente um argumento for passado, retorne o valor do argumento. ok
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros. ok 
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, 
e o resultado dividido pelo terceiro. ok
Se nenhum argumento for passado, retorne "não recebeu parâmetro" ok */

const read = require('readline-sync')

const valor1 = parseInt(read.question('Digite valor1: '))
const valor2 = parseInt(read.question('Digite valor2: '))
const valor3 = parseInt(read.question('Digite valor3: '))

if( !valor1 && !valor2 && !valor3 ){
    console.log("Não recebemos valores em nenhum parametro!!")
    
}else if(valor1 && !valor2 && !valor3){
    console.log(valor1);

}else if(!valor1 && valor2 && !valor3){
    console.log(valor2);

}else if(!valor1 && !valor2 && valor3){
    console.log(valor3);

}else if( !valor1 ){
    console.log(valor2 + valor3);
    
}else if( !valor2 ){
    console.log(valor1 + valor3);
    
}else if( !valor3 ){
    console.log(valor1 + valor2);
}else{
    console.log((valor1 + valor2) / valor3)
}
