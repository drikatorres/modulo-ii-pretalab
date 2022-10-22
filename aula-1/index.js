function podeVotar (idade) {
    if (idade >= 18 && idade < 70) {
        console.log('Sua idade é ' + idade + ' anos e você deve votar, o voto é obrigatório!')
    } else if (idade >=16 || idade >=70) {
        console.log('Sua idade é ' + idade + ' anos e você pode votar, mas não é obrigatório.')
    } else {
        console.log('Sua idade é ' + idade + ' anos e você não pode votar!')
    }
}

podeVotar(15);
podeVotar(18);
podeVotar(70);