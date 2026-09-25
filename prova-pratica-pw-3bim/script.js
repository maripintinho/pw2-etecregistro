const cpun = document.querySelector('input#cpuinput')
const memn = document.querySelector('input#meminput')
const tempn = document.querySelector('input#tempinput')

const txtresultado = window.document.getElementsByClassName('txtresultado')

const cpur = document.querySelector('a#cpuresultado')
const memr = document.querySelector('a#memoriaresultado')
const tempr = document.querySelector('a#temperaturaresultado')

const cpubackg = window.document.getElementById('cpubckg')
const membackg = window.document.getElementById('membackg')
const tempbackg = window.document.getElementById('tempback')

function cpu() {
    const cpun = Number(cpuinput.value);
    
    if (cpun <= '60') {
        cpur.innerHTML = `${cpun}% - Normal`
        cpur.style.color = 'white';
        txtresultado[0].style.color = 'white';
        cpubackg.style.backgroundColor = 'green';
    }
    else if (cpun > '60' && cpun <= '85') {
        cpur.innerHTML = `${cpun}% - Atenção`;
        cpur.style.color = 'white';
        txtresultado[0].style.color = 'white';
        cpubackg.style.backgroundColor = '#cfa51b';
    }
    else if (cpun > '85') {
        cpur.innerHTML = `${cpun}% - Crítico`;
        cpur.style.color = 'white';
        txtresultado[0].style.color = 'white';
        cpubackg.style.backgroundColor = '#be1313';
    }
}

function memoria() {
    const memn = Number(meminput.value);
    /* memr.innerHTML = `${memn} - Normal`; */
    if (memn < '71') {
        memr.innerHTML = `${memn}% - Normal`;
        memr.style.color = 'white';
        txtresultado[1].style.color = 'white';
        membackg.style.backgroundColor = 'green';
        
    }
    else if (memn > '70' && memn <= '90') {
        memr.innerHTML = `${memn}% - Atenção`;
        memr.style.color = 'white';
        txtresultado[1].style.color = 'white';
        membackg.style.backgroundColor = '#cfa51b';
    }
    else if (memn > '90') {
        memr.innerHTML = `${memn}% - Crítico`;
        cpur.style.color = 'white';
        txtresultado[1].style.color = 'white';
        membackg.style.backgroundColor = '#be1313';
    }
}

function temperatura() {
    const tempn = Number(tempinput.value);
    if (tempn < '66') {
        tempr.innerHTML = `${tempn}°C - Normal`;
        tempr.style.color = 'white';
        txtresultado[2].style.color = 'white';
        tempbackg.style.backgroundColor = 'green';
    }
    else if (tempn >= '66' && tempn <= '80') {
        tempr.innerHTML = `${tempn}°C - Atenção`;
        tempr.style.color = 'white';
        txtresultado[2].style.color = 'white';
        tempbackg.style.backgroundColor = '#cfa51b'
    }
    else if (tempn > '80') {
        tempr.innerHTML = `${tempn}°C - Crítico`;
        tempr.style.color = 'white';
        txtresultado[2].style.color = 'white';
        tempbackg.style.backgroundColor = '#be1313';
    }

}

function reiniciarServidor() {
    cpun.value = '';
    memn.value = '';
    tempn.value = '';
    cpur.innerHTML = '';
    cpur.style.color = '';
    memr.style.color = '';
    tempr.style.color = '';
    memr.innerHTML = '';
    tempr.innerHTML = '';
    cpubackg.style.backgroundColor = '';
    membackg.style.backgroundColor = '';
    tempbackg.style.backgroundColor = '';
    txtresultado[0].style.color = '';
    txtresultado[1].style.color = '';
    txtresultado[2].style.color = '';
}


