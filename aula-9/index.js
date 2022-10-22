function escreverMensagem() {
    const textoDigitado = document.getElementById('nome').value
    const bemVinda = document.getElementById('complemento').innerHTML
    console.log(bemVinda.split(':'))
    if (bemVinda.split(':')[1].length > 1) {
        document.getElementById('complemento').innerHTML = `Bem vinda: ${textoDigitado}`
    } else {
        document.getElementById('complemento').innerHTML += textoDigitado
    }
}

function adicionarAluna() {
    const aluna = document.getElementById('aluna').value
    document.getElementById('lista').innerHTML += `<p>${aluna}</p>`
    // const alunaElement = document.createElement('p')
    // alunaElement.innerHTML = aluna
    // document.getElementById('lista').appendChild(alunaElement)
}

