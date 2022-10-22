fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(resposta => resposta.json()).then(dados => console.log(dados.name))


fetch('https://cep.awesomeapi.com.br/70878050').then(resposta => resposta.json()).then(dados => console.log(dados.city))

document.getElementById('aula').innerHTML = 'Trabalhando com o DOM no JS'
const novaDiv = document.createElement('div');
novaDiv.innerHTML = 'Div criada com DOM'

document.getElementById('aula').appendChild(novaDiv)