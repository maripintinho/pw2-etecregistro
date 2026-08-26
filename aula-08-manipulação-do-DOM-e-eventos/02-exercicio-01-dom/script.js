const parar = window.document.getElementById('parar');
const atencao = window.document.getElementById('atencao');
const prosseguir = window.document.getElementById('prosseguir');

const cvm = window.document.getElementById('cvm');
const cam = window.document.getElementById('cam');
const cvd = window.document.getElementById('cvd');

function vermelho() {
    cvm.style.backgroundColor = 'red'
    cam.style.backgroundColor = 'rgba(136, 136, 136)'
    cvd.style.backgroundColor = 'rgba(136, 136, 136)'
}
function amarelo() {
    cvm.style.backgroundColor = 'rgba(136, 136, 136)'
    cam.style.backgroundColor = 'yellow'
    cvd.style.backgroundColor = 'rgba(136, 136, 136)'
}
function verde() {
    cvm.style.backgroundColor = 'rgba(136, 136, 136)'
    cam.style.backgroundColor = 'rgba(136, 136, 136)'
    cvd.style.backgroundColor = 'green'
}

parar.addEventListener('click', vermelho)
atencao.addEventListener('click', amarelo)
prosseguir.addEventListener('click', verde)

