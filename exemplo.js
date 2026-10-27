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

            

if => Se 
else => se nao

*/