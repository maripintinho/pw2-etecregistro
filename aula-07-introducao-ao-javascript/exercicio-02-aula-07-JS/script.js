const nome = window.prompt('Digite o seu nome')
const ano = Number(window.prompt('Digite seu ano de nascimento'))
const idade = 2026 - ano
const cidade = window.prompt('Digite a sua cidade')
const salario = Number(window.prompt('Digite o seu salário'))
const dolar = salario * 0.19
const euro = salario * 0.17

document.write(`O seu nome é: ${nome.toUpperCase()}.<br>`)
document.write(`Sua idade é: ${idade}.<br>`)
document.write(`Sua cidade é: ${cidade.toUpperCase()}.<br>`)
document.write(`A quantidade de caracteres na cidade "${cidade}" é: ${cidade.length}.<br>`)
document.write(`O seu salário na moeda real é: ${salario.toLocaleString('pt-br', {style: 'currency', currency:'BRL'})}.<br>`)
document.write(`O seu salário em dólares é: ${dolar.toLocaleString('pt-br', {style: 'currency', currency:'USD'})}.<br>`)
document.write(`O seu salário em euros é: ${euro.toLocaleString('pt-br', {style: 'currency', currency: 'EUR'} )}.<br>`)