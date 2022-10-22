//node "caminho"
let i = 0;
while ( i < 11) {
    console.log("3 x " + i + " = " + i*3);
    i++
}


let salario = 1000;
while (salario < 5000) {
    salario +=500.50;
    console.log("O salário é R$" + salario.toFixed(2));  // casas decimais
}


const alunas = [
    { aluno: 'Amanda', nota: 10},
    { aluno: 'Simara', nota: 8},
    { aluno: 'Nathy', nota: 9},
    { aluno: 'Vera', nota: 10},
];

let index = 0;
let somaDasNotas = 0;
let totalAlunas = alunas.length;

do {
    somaDasNotas += alunas[index].nota;
    index++;
} while (index < totalAlunas);

let media = somaDasNotas/totalAlunas;

console.log(media.toFixed(2));