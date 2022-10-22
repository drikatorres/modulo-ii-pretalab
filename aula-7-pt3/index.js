    
function meuNome() {   
    if(!document.querySelector('#meunome')) {  
            const nome = document.createElement('h1')
            nome.innerHTML = 'Drika Torres Cruz'
            nome.id = 'meunome'
            document.querySelector('#nome').appendChild(nome) 
            //nome.id = 'mudaCorNome'
    }

} 

function saindoDaDiv() {
    alert('Saindo da div')
}

function mudaCor() {
    let corFonte = document.querySelector('#meunome').style.color
    if (corFonte =='' || corFonte == 'blue' ) {
        document.querySelector('#meunome').style.color = 'pink'
    } else {
        document.querySelector('#meunome').style.color = 'blue'
    } 
}