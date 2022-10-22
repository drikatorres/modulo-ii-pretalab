// const array = [10, 20 , 30, 40, 50];

// console.log(array[1]);

// array.push(10);

// console.log(array);

// array.pop();

// console.log(array.length);

// const notas = [4, 2, 3];

// notas.forEach((elementos) => {
//     console.log(elementos)
// })


// const linguagens = ['JS', 1, 2, 3, 'HTML', 'CSS'];


// linguagens.forEach((linguagens) => {
//     if (isNaN(linguagens)) {
//         console.log(linguagens)
//     }
// })

//concat
const setUp = ['Notebook', 'Monitor', 'Teclado', 'Mouse', 'Aromatizador', 'Mousepad', 'Garrafinha de água'];
console.log(setUp.length);
const quadros = ['Big ben', 'Carro antigo', 'Mulher fumando charuto', 'Pessoas dançando'];
const espacoEstudos = setUp.concat(quadros);
console.log(espacoEstudos);

console.log('copyWithin');

//copyWithin
const copia = setUp.copyWithin(0,1,3);
console.log(copia);

//toString
const numeros = [10,15,25,30,48,20,30];
const string = numeros.toString();
console.log(string);

const valores = [0,1,2,3,4];

function verificarPar (num) {
    if (num % 2 == 0) {
        return num;
    }
}


//filter  ()
console.log(valores.filter(verificarPar)); // aqui passa a função com parametro para o filtro




