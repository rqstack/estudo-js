/* 

1. Lógica de programação -> Aprender como o computador pensa e aprender como se comunicar com ele .

2. Algoritmo -> Sequência de logica para fazer alguma coisa .
  
EXEMPLO:Algoritmo para fazer cafe 

SE a cafeteira estiver naa tomada, seguir para o proximo passo.
SE NÃO, ligá-la na tomada.

SE o compartimento de agua  estiver cheio , seguir o proximo passo .
SE NAO , colocar agua no compartimento .

SE o compartimento ja tiver uma  capsula , seguir para o proximio passo.
SE NAO , colocar uma capsula.

etc 

3.COMO APRENDER LOGICA , COMO FICO BOM  DE LOGICA?
nubank + superbonder= treinar codar bastante.



----------------------------------------------------------------------------------------------
variáveis :
    - let -> pode alterar o valor quando quiser .
    - const -> valor que nao poder ser declarado novamente.
    - var -> descontinuado / codigo antigo .



                    tipos de dados :


1.string -> textos
"textos com aspas duplas"
'textos com aspas simples'
`textos com crase, permite quebra linha no js e  chamar uma variavel nela   ` // templete literals ou template string
    exemplo de crase: 
    const abacate = 40
    const myString = `minha idade é ${abacate}, to ficando velho .`
    console.log (myString)



2.Numbers -> Números .
posso armarzena numeros ex: const number1 = 01234556 //posso usar tbm os operadores  * / + - .
                                                     
                                                      ex: const multiplicar = 10*15     
                                                          const dividir = 10/15
                                                          const adicionar = 10+15
                                                          const subtrair = 10-15 

3.Boolean -> Boleano.
so tem dois valores 0 e 1 ou false or true ( falso or verdadeiro ).

4.Object -> Objetos
todo objeto tem uma propiedade e um valor .
                     cor            preto.
    
ajuda muito para nao ficar criando varias variaveis 
ex : para eu nao ficar  fazendo isso  aqui .
conts name = 'renan'
const age = 21
const address = "rua neymar"

eu posso fazer isso aqui .
const renan = {
    name:"renan" , 
    age: 21 ,
    address:"rua neymar junior, numero 10 "
}

otimiza  muito o codigo, e tbm podemos colocar objetos dentro de outro objeto exemplo do endereço.

const renan = {
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

5.Null & Undefined -> Nulo & Indefinido .
- null é como uma garrafa vazia que você deixou vazia de propósito, no codigo tipo o id do user nao sei agr ele ,coloco como null de proposito , tipo deixa vazio , que dps eu faço.
                               

                                const user = {
                                nome:'renan',
                                idade:21 ,
                                nomeDoConjuge: null

}


- undefined é como tentar procurar algo que não existe.
                        exemplos:
                console.log(user.altura) // quando eu rodar esse codigo vai me voltar um Undefined.//
     
---------------------------------------------------------------------------------------------------------------------------------------------------------------
                        estrutura de dados
 
1.Array -> Vetor -> Matriz
o array serve para eu guarda varios tipos de dados em um lugar só.
                     exemplo:
                const myArray = [20,30,"ola js",{name: "renan", age: 30}]

if => (Se ) -> se tal coisa acontecer faça isso .
else => (se nao)-> se nao faça isso.

if e else servem para tomar decisões no código: o if executa algo se a condição for verdadeira, e o else executa outra coisa se for falsa.
Os operadores de comparação comparam valores: > maior, < menor, >= maior ou igual, <= menor ou igual, == igual e != diferente.
Exemplo: if (idade >= 18) verifica se a pessoa tem 18 anos ou mais.
Se for verdadeiro, executa o if; caso contrário, executa o else.

let idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

Operadores de comparação 

    > maior que 
    < menor que 
    == igual que 

    exemplo: esse numero 10 é maior que esse numero 5 ?

    10>5 = true 

    o numero 10 e menor que 5? 

    10<5 = false

    o 5 e igual a 5 ?

    5==5 = true


funtions /  funções 
    Trechode codigo que é executado somente quando solicitado 
    Functions (funções)** são blocos de código criados para executar uma tarefa específica e podem ser reutilizados várias vezes.
    Usamos `function` para criar uma função e damos um nome para ela.
    O código dentro da função só é executado quando ela é chamada pelo nome seguido de `()`.
    As funções podem receber informações (parâmetros) e também retornar resultados usando `return`.
    Elas ajudam a organizar o código e evitam repetições.

    function nomeNey() {
  console.log("neymar");
}
nomeNey();

*/
