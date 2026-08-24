// JavaScript

// Capturando um elemento do DOM
const titulo = window.document.getElementsByTagName('h1')[0]

titulo.innerText = "Fui alterado pelo JavaScript :O" //innerText -> muda o texto
titulo.style.color = '#cfbc67' //const.style mesmas opcoes do css

// Alterando a cor da página pelo JS
const pagina = window.document.body

pagina.style.backgroundColor = '#2f2f2f'

// Capturando a div
const caixaMagica = window.document.getElementById('caixaMagica');

// criando uma função
function entrada() {
    caixaMagica.innerText = 'Oi!'
    caixaMagica.style.backgroundColor = '#54499b'
}
function saida() {
    caixaMagica.innerText = 'Tchau!'
    caixaMagica.style.backgroundColor = '#b8be9b'
}
function clicar() {
    caixaMagica.innerText = 'Clicou!'
    caixaMagica.style.backgroundColor = 'pink'
}
// Escutando um Evento
caixaMagica.addEventListener('mouseenter', entrada)
caixaMagica.addEventListener('mouseout', saida)
caixaMagica.addEventListener('click', clicar)