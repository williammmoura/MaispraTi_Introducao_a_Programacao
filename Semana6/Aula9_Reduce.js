//Reduce
/*
Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array.
*/

//Ex.1:
function funçãoCallback(paramValor1, paramValor2){
    return paramValor1 + paramValor2;//Retorna o valor da soma dos elentos do "array1".
} 

let array1 = [1, 2, 3, 4];
let total = array1.reduce(funçãoCallback);
console.log(total);

console.log("---------Exemplo 2-----------")

//Ex.2:
function funçãoCallback2(paramValor01, paramValor02){
    //Explicação do resultado ser 10.
    console.log("Parametro do valor 1 = " + paramValor01);
    console.log("Parametro do valor 2 = " + paramValor02);
    return paramValor01+' + '+paramValor02;//Retorna o valor dos parâmetros.
} 

let array2 = [1, 2, 3, 4];
let total2 = array2.reduce(funçãoCallback2);
console.log(total2);