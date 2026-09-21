/*
  EXERCÍCIO: Seleção e Manipulação do DOM
  ----------------------------------------
  Objetivo: praticar como selecionar elementos do DOM e alterar
  sua aparência (via .style) ou seu conteúdo (via .innerText).

  Nos exercícios 1, 2 e 4, as mudanças devem acontecer assim que
  a página carregar (sem eventos).

  Nos exercícios 3 e 5, você vai usar eventos (addEventListener)
  para alterar o elemento quando o usuário interagir com ele.

  Complete cada exercício abaixo escrevendo o código onde indicado.
*/

// ------------------------------------------------------
// Exercício 1
// Selecione o elemento com id "titulo" e:
// - altere o texto para "Título Alterado"
// - mude a cor do texto para azul
// ------------------------------------------------------

const titulo = window.document.getElementById('titulo');

titulo.innerText = 'Título Alterado'
titulo.style.backgroundColor = 'blue'


// ------------------------------------------------------
// Exercício 2
// Selecione TODOS os elementos com a classe "paragrafo"
// e mude a cor de fundo (background-color) de todos eles para amarelo.
// ------------------------------------------------------

const paragrafo = window.document.getElementsByClassName('paragrafo');

paragrafo[0].style.backgroundColor = 'yellow'
paragrafo[1].style.backgroundColor = 'yellow'


// ------------------------------------------------------
// Exercício 3
// Selecione o elemento com id "caixa" e adicione um evento
// de "mouseover" (quando o mouse passar por cima) que:
// - altere o innerText para "Você passou o mouse aqui!"
// - mude a borda (border) para "3px solid red"
// - mude o tamanho da fonte (fontSize) para "20px"
// ------------------------------------------------------

const caixa = window.document.getElementById('caixa');

function mouseover() {
    caixa.innerText = 'Você passou o mouse aqui!'
    caixa.style.border = '3px solid red'
    caixa.style.fontSize = '20px'
}

caixa.addEventListener('mouseover', mouseover)


// ------------------------------------------------------
// Exercício 4
// Selecione o item da lista com id "item2"
// e mude seu texto para "Item alterado"
// ------------------------------------------------------

const item2 = window.document.getElementById('item2');

item2.innerText = 'Item Alterado'
item2.style.color = 'Purple'
item2.style.fontWeight = 'bold'
item2.style.backgroundColor = 'lightgray'


// ------------------------------------------------------
// Exercício 5
// Selecione o botão com id "botao" e adicione um evento
// de "click" que:
// - altere o texto do botão para "Você clicou!"
// - mude a cor de fundo para verde
// - mude a cor do texto para branco
// ------------------------------------------------------

const botao = document.getElementById('botao');

function click() {
    botao.innerText = 'Você clicou!'
    botao.style.backgroundColor = 'green'
    botao.style.color = '#fff'
}

botao.addEventListener('click', click)