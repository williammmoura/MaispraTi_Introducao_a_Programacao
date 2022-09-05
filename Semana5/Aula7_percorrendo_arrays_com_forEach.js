let a = [[100,200], [300,400], [500,600], [700,800]];

/*function log(elemento){ //Executando uma função pra cada um dos elemntos do array.
    console.log(elemento);
}

a.forEach(log);//Aqui eu estou passando a função (acima) para cada elemento do array.*/

//Dominando agora.
a.forEach(elemento => console.log(elemento))

console.log('//////////////////////////////////////')

//Sintaxe alternativa.
/*let logElemento = elemento => console.log(elemento);*/

//É possível criar uma função dentro do "forEach".
function logArray(elementoArray){
    elementoArray.forEach(elemento => console.log(elemento));//Fazendo um "console.log" pra cada elemento (Externo/interno).
}

a.forEach(logArray);

//forEach construído como uma função.
/*let logArray = elementoArray => elementoArray.forEach(elemento => console.log(elemento));*/

//Tudo em uma linha.
/*a.forEach(elementoArray => elementoArray.forEach(elemento => console.log(elemento)));*/