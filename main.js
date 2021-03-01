var nome = "Ellen Christina";
var n1 = 18;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert
//alert("Bem vinda " + nome); //define um alerta para a tela

//Sinal de +
console.log(nome + " tem " + n1 + " anos "); //usado para contatenar strings
console.log("Soma: " + (n1 + n2)); //usado para somar numeros

//multiplicando
console.log("Multiplicação: " + n1 * n2);

//função string
console.log(frase.replace("Japão", "Brasil")); //troca temporariamente o 1º elemento pelo 2º
console.log(frase.toUpperCase()); //transforma em maiuscula
console.log(frase.toLowerCase()); //transforma em minuscula

//array
console.log("ARRAY");
var lista = ["maça", "pêra", "laranja"];

console.log(lista); //imprimindo todos os elementos
console.log(lista[1] + " é o elemento 1 da lista"); //imprimi apenas um elemento

lista.pop(); //retira o ultimo elemento
console.log(lista);
console.log("há " + lista.length + " itens na lista"); //mostra a quantidade de elementos na lista

lista.push("uva"); //adicionar um novo elemento à lista
console.log(lista);
console.log("há " + lista.length + " itens na lista"); //mostra a quantidade de elementos na lista

console.log(lista.reverse()); //reverte a ordem dos itens da lista

console.log("Os elementos são " + lista.toString()); //traz os elementos da lista como string
console.log("Primeiro elemento do array: " + lista[0]);
console.log("Primeiro elemento da String: " + lista.toString()[0]); //os elementos não serão mais itens, e sim letras

console.log(lista.join(" - ")); //altera o simbolo de separação da lista

//DICIONARIO
console.log("DICIONARIO");

var fruta = {nome:"maça", cor:"vermelha"}

console.log(fruta); //imprimindo todos os elementos
console.log(fruta.nome + " é " + fruta.cor); //imprimir um elemento do dicionario


//Lista de dicionario
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];

console.log(frutas); //imprimindo todos os elementos
console.log(frutas[1]); //imprimindo um item da lista
console.log(frutas[1].nome); //imprimindo um elemento do dicionario de um item
