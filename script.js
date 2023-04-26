function atualizaRelogio() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minuto = dataAtual.getMinutes();
    const segundo = dataAtual.getSeconds();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();

    document.getElementById("hora").innerHTML = hora.toString().padStart(2, '0');
    document.getElementById("min").innerHTML = minuto.toString().padStart(2, '0');
    document.getElementById("seg").innerHTML = segundo.toString().padStart(2, '0');
    document.getElementById("dia").innerHTML = dia.toString().padStart(2, '0');
    document.getElementById("mes").innerHTML = mes.toString().padStart(2, '0');
    document.getElementById("ano").innerHTML = ano.toString();
}

setInterval(atualizaRelogio, 1000);