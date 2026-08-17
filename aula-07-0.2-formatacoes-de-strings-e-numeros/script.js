// JAVASCRIPT
const nome = window.prompt("Qual o seu nome?")
// CONTANDO OS CARACTERES
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`)

// ALTERNANDO PARA MAIÚSCULAS
document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()}<br>`)

// ALTERNANDO PARA MINÚSCULAS
document.write(`Seu nome em minúsculas é: ${nome.toLowerCase()}<br>`)

// FORMATANDO NÚMEROS
const salario = Number(window.prompt('Digite seu salário:'))

// INSERINDO CASAS DECIMAIS
document.write(`Seu salário com casas decimas é: ${salario.toFixed(2)}<br>`)

// ALTERNANDO O IDENTIFICADOR DE CASAS DECIMAIS
document.write(`Seu salário com vírgula nas casas decimais é: ${salario.toFixed(2).replace('.', ',')}<br>`)

// FORMATAÇÃO DE MOEDA  
document.write(`Seu salário em real: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})} <br>`)

// DÓLAR
document.write(`Seu salário em dólar: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'USD'})} <br>`)

// EURO
document.write(`Seu salário em euro: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'EUR'})} <br>`)