/*Objetos JavaScript*/
/*Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor.*/

//SEMPRE nome/valor.

/*Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.*/

//Ex.1:
const carros = [
    {marca:'Ferrari', cor:'vermelho', peso:850},
    {marca:'RedBull', cor:'azul', peso:855},
    {marca:'Mercedes', cor:'prata', peso:847}
];

console.log(carros);//Mostra um Array de 3 elementos.

console.log('-------------------------------')

for(let i=0; i<carros.length; i++){//Varrendo todos os elementos do Array.
console.log('Marca => '+ carros[i].marca);
console.log('Cor => '+ carros[i].cor);
console.log('Peso => '+ carros[i].peso);
}


console.log('///////////////////////////////')
//Ex.2:

const carros2 = [
    {vencedor:5, equipe:{marca:'Ferrari', cor:'vermelho', peso:850}},
    {vencedor:13, equipe:{marca:'RedBull', cor:'azul', peso:855}},
    {vencedor:3, equipe:{marca:'Mercedes', cor:'prata', peso:847}}
];

console.log(carros2);

console.log('-------------------------------')

for(let i=0; i<carros2.length; i++){//Varrendo todos os elementos do Array.
    console.log(carros[i].marca);
    console.log('Numero de vitórias: '+carros2[i].vencedor);
}