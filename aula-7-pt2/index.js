function bemVinda() {
    const mensagem = document.createElement('h1')
    mensagem.innerHTML = 'Bem Vinda'
    document.querySelector('#mensagem').appendChild(mensagem)
}

function saindoDaDiv() {
    alert('Saindo da div')
}