/* DOM (Document Object Model)
Àrovre de elementos do navegador     

document -> html 

getElementById -> tras um elementos pelo id 
getElementByClassName ->tras todos elementos com essa classe
getElementByTagName ->tras todos elementos com essa tag 
getElemantByName -> tras todos elementos com esse name

querySelector -> Tras um elementos , o primeiro que  encontrar 
querySelectorAll -> tras todos elementos que encontrar.

para puxar algo no html devemos usar docment.
exemplo quero puxar um id :

document.getElementById("main-ipunt")

=================================
alterando e acessando textos 
=================================

textContent -> Pega todos o conteúdo
innerText -> Pega apenas o textos 
innerHtml -> Permite adicionar Html e Texto  

1. textContent
Pega todo o conteúdo de texto de um elemento,
incluindo textos que estão dentro de elementos filhos,
mesmo que estejam ocultos por CSS.

Também permite alterar o texto de um elemento.

2. innerText
Pega o texto visível de um elemento, considerando
a apresentação do conteúdo na página.

Também permite alterar o texto de um elemento.

3. innerHTML
Pega o conteúdo HTML que está dentro de um elemento,
incluindo suas tags HTML.

Também permite adicionar ou substituir HTML e texto.

IMPORTANTE:
Ao inserir conteúdo com innerHTML, o navegador
interpreta as tags HTML.

RESUMO:
textContent -> Texto de todos os elementos filhos.
innerText  -> Texto visível na página.
innerHTML  -> Conteúdo HTML, incluindo as tags.


========================================
EVENTOS NO JAVASCRIPT
========================================

O QUE SÃO EVENTOS?

Eventos são ações que acontecem na página e que o
JavaScript consegue detectar e responder.

Essas ações podem ser realizadas pelo usuário ou pelo
próprio navegador.

EXEMPLOS DE EVENTOS:
- click: quando alguém clica em um elemento.
- input: quando alguém digita ou altera um campo.
- submit: quando um formulário é enviado.
- mouseover: quando o mouse passa por cima de um elemento.
- keydown: quando uma tecla é pressionada.
- change: quando o valor de um campo é alterado.

COMO UTILIZAR EVENTOS?

Podemos utilizar o addEventListener() para dizer ao
JavaScript qual evento ele deve observar e o que deve
fazer quando esse evento acontecer.

ESTRUTURA:

elemento.addEventListener("evento", function() {
    // Código que será executado quando o evento acontecer.
});

EXEMPLO:

const botao = document.querySelector("button");

botao.addEventListener("click", function() {
    alert("Você clicou no botão!");
});

EXPLICANDO O CÓDIGO:

1. document.querySelector("button")
   Busca o primeiro elemento <button> do HTML.

2. const botao
   Armazena o elemento encontrado na variável botao.

3. addEventListener("click", ...)
   Fica observando se acontece um clique no botão.

4. function()
   Define o código que será executado quando o evento
   acontecer.

5. alert()
   Exibe uma mensagem na tela.

IMPORTANTE:

O JavaScript não executa o código de dentro da função
imediatamente. Nesse exemplo, ele espera o usuário clicar
no botão para executar o código.

POR QUE OS EVENTOS SÃO IMPORTANTES?

Os eventos permitem criar páginas interativas, nas quais
o site responde às ações do usuário.

Exemplos:
- Abrir ou fechar um menu.
- Validar um formulário.
- Mostrar uma mensagem após um clique.
- Capturar o que o usuário digita.
- Atualizar informações na tela.

RESUMO:

Evento = ação que acontece.
addEventListener() = método que escuta o evento.
Função = código executado quando o evento acontece.



















*/
