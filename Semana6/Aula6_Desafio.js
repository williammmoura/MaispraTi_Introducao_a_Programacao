let estrutura = [
    [{x:1, y:12},{x:10, y:20},{x:3, y:10}],
    [{x:14, y:7},{x:0, y:10}],
    [{x:15, y:13}]
];

//Percorrer cada um dos arrays usando comando "for", "forEach" e "for...of".
/*Resultado esperado:
1,12
10,20
3,10
------
14,7
0,10
------
15,13
*/

//Comando "for".
for(let i=0; i<estrutura.length; i++){
    console.log(estrutura[i]);//Será exibido os elementos 0 do primeiro array.
}

console.log('////////////////////////////////')

//Comando "forEach".
estrutura.forEach(function(valor){
    console.log(valor);
})

console.log('////////////////////////////////')

//Comando "for...of".
for(let elemento of estrutura){
    console.log(elemento);
}
