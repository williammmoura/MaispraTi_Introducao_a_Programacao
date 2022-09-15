//filter()
/*
O método "filter()" faz a leitura dos elementos do array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array.
Portanto, o resultado será o de todos os elementos que satisfaçam a condição do filtro. Vale ressaltar que a array original não sofre nenhum tipo de alteração pelo método filter().
*/

console.log("----------Exemplo 1----------")

//Ex.1:
function funcaoCallback(paramValor){
    return true;
}

let array = [1, 2, 3, 4, 5];
let novoArray = array.filter(funcaoCallback);
console.log(array);
console.log(novoArray);

console.log("----------Exemplo 2----------")

//Ex.2:
function funcaoCallback(paramValor){
    return false;
}

let novoArray1 = array.filter(funcaoCallback);
console.log(array);
console.log(novoArray1);//Retornará um array vazio.

console.log("----------Exemplo 3----------")

//Ex.3:
function funcaoCallback(paramValor){
    return paramValor % 2 == 0;//Retorna números pares.
}

let novoArray2 = array.filter(funcaoCallback);
console.log(array);
console.log(novoArray2);//Retornará um array vazio.

console.log("----------Exemplo 2----------")

//Ex.4:
function funcaoCallback(paramValor){
    return paramValor > 2;
}

let novoArray3 = array.filter(funcaoCallback);
console.log(array);
console.log(novoArray3);//Retornará um array vazio.

//every.
/*
O método "every()" testa se todos os elementos do array passam por um teste implementado por uma função fornecida. Ele retorna true ou false baseado na condição especificada. Funciona mais ou menos como "filter()", mas, ao invés de retornar um valor ou objeto, retorna um boolean.
Use "every()" para testar se se tudo dentro de um array corresponde a um critério determinado.
*/

console.log("----------Exemplo 1 (every)----------")

//Ex.1:
let arrayEvery = [-2, -1, 0, 1, 2, 3, 4, 5];
function funcaoCallback(paramValor){
    return paramValor > 7;//Retorna true, caso encontre um valor maior que 7.
}

let novoArrayEvery = arrayEvery.every(funcaoCallback);
console.log(arrayEvery);
console.log(novoArrayEvery);//Retorna um boolean(false), pois não há NENHUM valor, dentro do array, que seja maior que 7.

//some.
/*
Funciona exatamente como every(), mas se pelo menos 1 elemento passa no teste, ele já retorna true.
 use some() para testar se algum elemento dentro de um array corresponde a um critério determinado.
*/

console.log("----------Exemplo 1 (some)----------")

//Ex.1:
let arraySome = [-2, -1, 0, 1, 2, 3, 4, 5];
function funcaoCallback(paramValor){
    return paramValor < 0;//Retorna true, caso encontre ALGUM valor menor que 0.
}

let novoArraySome = arraySome.some(funcaoCallback);
console.log(arraySome);
console.log(novoArraySome);//Retorna true, pois a matriz têm valores menores que 0 (-1 e -2).