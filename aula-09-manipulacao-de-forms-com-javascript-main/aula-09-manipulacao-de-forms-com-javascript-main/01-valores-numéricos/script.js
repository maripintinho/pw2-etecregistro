const num1 = document.querySelector('input#n1')
const num2 = document.querySelector('input#n2')
const resultado = document.querySelector('div#resultado')

function somar() {
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const soma = num1 + num2;
    resultado.innerHTML = `Soma: <u><strong>${soma}</strong></u>.`;
}

function subtrair() {
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const subtracao = num1 - num2;
    resultado.innerHTML = `Subtração: <u><strong>${subtracao}</strong></u>.`;
}

function multiplicar() {
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const multiplicacao = num1 * num2;
    resultado.innerHTML = `Multiplicação: <u><strong>${multiplicacao}</strong></u>.`;
}

function dividir() {
    const num1 = Number(n1.value);
    const num2 = Number(n2.value);
    const divisao = num1 / num2;
    resultado.innerHTML = `Divisão: <u><strong>${divisao}</strong></u>.`;
}

function limpar(){
    num1.value = '';
    num2.value = '';
    resultado.innerHTML = '...';
}