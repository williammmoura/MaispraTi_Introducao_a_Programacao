//.map

/*
Permite percorrer um vetor e obter um novo array cujos itens são o resultado de uma função de callback que recebe como parâmetro cada item original. Por exemplo, podemos partir de um array de valores numéricos e obter um novo contendo o quadrado de cada item original.

map() é invocado a partir de um array e recebe como parâmetro uma função de callback, que é invocada para cada item e retorna o valor do item equivalente no array resultante.

Fonte: https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648
*/

//Ex.1:
//Função "callback".
function funcaoCallback(paramValor){
    return paramValor * 2;
}

//Usando o "map".
let array1 = [1, 3, 7];
let novoArray = array1.map(funcaoCallback);
console.log(novoArray);//[2, 6, 14] => Mostra o "novoArray", que recebe o "array1" multiplicado por 2, ou seja, pelo retorno do parâmetro (paramValor) da função callback (funcaoCallback) multiplicado 2.

console.log('----------Exemplo 2-----------')

//Ex.2:
function funcaoCallback2(paramValor2){
    return paramValor2 + 10;
}

let array2 = [1, 3, 7];
let novoArray2 = array2.map(funcaoCallback2);
console.log(novoArray2);

console.log('----------Exemplo 3-----------')

//Ex.3:
function funcaoCallback3(paramValor3){
    return "Este valor é "+paramValor3;
}

let array3 = [1, 3, 7];
let novoArray3 = array3.map(funcaoCallback3);
console.log(novoArray3);

console.log('----------Exemplo 4-----------')

//Ex.4:

//y com o mesmo valor de x:
function funcaoCallback4(paramValor4){
    let pontoNovo = paramValor4;
        pontoNovo.y = pontoNovo.y + pontoNovo.x;//y = y + x
    return pontoNovo;
}

let array4 = [{x:1, y:1},
              {x:2, y:1},
              {x:3, y:1}];
let novoArray4 = array4.map(funcaoCallback4);
console.log(novoArray4);//Os valores de x vão continuar os mesmos, que estão no "array4". A modificação fica para os valores de y.