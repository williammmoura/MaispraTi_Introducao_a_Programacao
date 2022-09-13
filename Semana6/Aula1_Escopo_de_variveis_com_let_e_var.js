/*Uma function serve como um procedimento em JavaScript, e portanto, cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente dentro da função não pode ser acessada de fora da função ou dentro de outras funções.*/

/*"let" permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada. Isso é inverso da keyword "var" , que define uma variável globalmente ou no escopo inteiro de uma função, independentemente do escopo de bloco.*/


//Ex.1:
var v1 = 10;

function teste(){
    var v1 = 20;
    console.log('Dentro da função teste ' + v1);//v1 = 20, conforme é declado dentro deste escopo.
}

teste()
console.log('Fora da função teste ' + v1) //v1 = 10

console.log('///////////////////////////////')

//Ex.2:
v2 = 10;

function teste2(){
    v2 = 20;
    console.log('Dentro da função teste ' + v2);//v2 = 20, conforme é declado dentro deste escopo.
}

teste2()
console.log('Fora da função teste ' + v2) //v2 = 20, conforme é feita a mudanca da variável, de mesmo nome, dentro da função.

console.log('///////////////////////////////')

//Ex.3:
let v3 = 10;

if(true){
    let v3 = 20;
    console.log('Dentro do "if" ' + v3);//v3 = 20, conforme é declado dentro deste escopo.
}

console.log('Fora do bloco do "if" ' + v3) //v3 = 10.