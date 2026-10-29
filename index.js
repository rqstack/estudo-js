//tipo de dados//

const abacate = 40
const myString = `minha idade é ${abacate}, to ficando velho .`



let preco = 50
const quantidade = 3
let total = preco * quantidade 
const resultado = `preço do produto = ${preco}
quantidade de produto adicionado no carrinho = ${quantidade}
valor total = ${total}`

console.log(resultado)

const renan1 = {
    name:"renan" , 
    age: 21 ,
    address:"rua neymar junior, numero 10 "
}
console.log (renan1)

const renan2 = {
    name:"renan" , 
    age: 21 ,
    address: {
        street: 'neymar junior' ,
        number: 10 ,
        city: 'santos' ,
        state: 'sp',
        country: 'brasil'
    }
}

console.log (renan2)

const user = {
    nome:'renan',
    idade:21 ,
    nomeDoConjuge: null

}
//estrutura de dados
const myArray = [20, 30,130,]


myArray [1]= 510
console.log (myArray[1])

let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

const senhaDouser = 12234
const senhaDigitada=12238

if(senhaDouser==senhaDigitada){
    console.log('bem vindo ')
    
    
}
    else {
        console.log('senha incorreta')
    }