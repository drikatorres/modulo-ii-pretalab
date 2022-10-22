const alunas = [
    'Nath',
    'Amanda',
    'Sarah',
    'Vera',
    'Carol'
]

let alunasRemovidas

function listarAlunas (alunaListadas) {
    alunasListadas.forEach(aluna => {
        const elementoLista = document.querySelector('#lista')
        const elementoAluna = document.createElement('p')
        elementoAluna.innerHTML = `${aluna}
            <button onclick="removerAluna()">
                Remover aluna
            </button>`
        elementoLista.appendChild(elementoAluna)
    })
}

listarAlunas(alunas)

const removerAluna = (alunaListada) => {
    alunas.pop()
    if(alunasRemovidas) {
        alunasRemovidas = alunasRemovidas.filter(aluna => aluna != alunaListada)
    }
        alunasRemovidas = alunas.filter(aluna => aluna != alunaListada)
    
    document.getElementById('lista').innerHTML = ''
    listarAlunas(alunasRemovidas)
}

function adicionarAluna() {
    const novaAluna = document.getElementById('nova-alunas').value
    document.getElementById('lista').innerHTML = ''
    alunas.push(novaAluna)

    if (alunasRemovidas) {
        alunasRemovidas.push(novaAluna)
        listarAlunas(alunasRemovidas)
    } else {
        alunas.push(novaAluna)
        listarAlunas(alunas)
    }
}