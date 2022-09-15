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
for(let i=0; i<estrutura[0].length; i++){
    console.log(estrutura[0][i]);//Será exibido os elementos 0, 1 e 2 do primeiro array (elemento zero).
}

console.log('////////////////////////////////')

//Comando "forEach".
estrutura[1].forEach(function(valor){
    console.log(valor);
})

console.log('////////////////////////////////')

//Comando "for...of".
for(let elementoTerceiraLinha of estrutura[2]){
    console.log(elementoTerceiraLinha);
}
