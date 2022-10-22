function adicionarPessoa() {
    let pessoa = document.getElementById('nova-pessoa').value 
    let idade = document.getElementById('idade-nova-pessoa').value
    document.getElementById('lista').innerHTML += `<p>Pessoa: ${pessoa} Idade: ${idade}</p>`
}