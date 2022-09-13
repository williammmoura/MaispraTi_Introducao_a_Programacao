function funcaoUsadaNoForEach(valor){
    console.log(valor);
}

let array1 = [1, 2, 3, 4];
array1.push(5);//O "array1" recebe o elemento 5 na posição 4 (último).
array1.unshift(0);//O "array1" recebe o elemento 0 na posição zero (primeira).

//Percorrendo o array com "for".
for(let i=0; i<array1.length; i++){
    console.log(array1[i]);
}

console.log('////////////////////////////////')

//Percorrendo todos os elemntos do array1.
array1.forEach(funcaoUsadaNoForEach);