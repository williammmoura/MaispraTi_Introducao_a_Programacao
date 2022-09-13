let array1 = [0, 1, 2, 3, 4, 5];
let array2 = [{carro:'Ferrari', cor:'vermelho'}, {carro:'Mercedes', cor:'prata'}];
let texto = 'Olá, Mundo!'

//Percorrendo o "array1" e em cada um dos elementos do "array1" será colocado na variável "elemento".
for(let elemento of array1){
    console.log(elemento);
}

console.log('-------------------------------');

for(let elemento2 of array2){
    console.log(elemento2)
}

console.log('-------------------------------');

for(let percorreString of texto){
    console.log(percorreString)
}