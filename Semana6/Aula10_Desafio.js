let array1 = [1, 2, 3, 4];

//Incluir o número 5 no final do array;
//R.: [1, 2, 3, 4, 5]

//Incluir o número 6 no início do array;
//R.: [6, 1, 2, 3, 4, 5]

//Criar um novo array, apenas com os números; divisíveis por 3;
//R.: [6, 3]

//Multiplicar por 3 todos os elementos do array;
//R.:[18, 3, 6, 9, 12, 15]

//Multiplicar todos os elementos do array, um a um;
//R.:720

console.log('Desafio 1');
array1.push(5); //Adiciona o número 5 no final do array.
console.log(array1);

console.log('----------------------');

console.log('Desafio 2');
array1.unshift(6); //Adiciona o número 5 no início do array.
console.log(array1);

console.log('----------------------');

console.log('Desafio 3')
function funcaoCallback(paramValor){
    return paramValor % 3 == 0
}

let novoArray = array1.filter(funcaoCallback);
console.log(novoArray);

console.log('----------------------');

console.log('Desafio 4');
let triplo = array1.map(function(array1){
    return array1 * 3;
});
console.log(triplo);

console.log('----------------------');

console.log('Desafio 5');
let MultiplicaTodos = array1.reduce(function funcaoMultiTodos(valorDoArray1, valorDoArray2){
    return valorDoArray1 * valorDoArray2;
})
console.log(MultiplicaTodos)