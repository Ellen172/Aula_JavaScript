var lista = ["maça", "pêra", "laranja"];

console.log("Lista:");
console.log(lista); //imprimindo todos os elementos
console.log("Elemento 1: " + lista[1]); //imprimi apenas um elemento

lista.pop(); //retira o ultimo elemento
console.log("pop: " + lista);
console.log("Tamanho: " + lista.length); //mostra a quantidade de elementos na lista

lista.push("uva"); //adicionar um novo elemento à lista
console.log("push: " + lista);
console.log("Tamanho: " + lista.length); //mostra a quantidade de elementos na lista

console.log("reverse: " + lista.reverse()); //reverte a ordem dos itens da lista

console.log("toString: " + lista.toString()); //traz os elementos da lista como string
console.log("Primeiro elemento do array: " + lista[0]);
console.log("Primeiro elemento da String: " + lista.toString()[0]); //os elementos não serão mais itens, e sim letras

console.log("join: " + lista.join(" - ")); //altera o simbolo de separação da lista

//DICIONARIO
var fruta = {nome:"maça", cor:"vermelha"}
console.log(" ");
console.log("Dicionario: ");
console.log(fruta); //imprimindo todos os elementos
console.log("Elementos do dicionario: ");
console.log(fruta.nome + " é " + fruta.cor); //imprimir um elemento do dicionario


//Lista de dicionario
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(" ");
console.log("Lista de dicionario:");
console.log(frutas); //imprimindo todos os elementos
console.log("Item da lista (dicionario):");
console.log(frutas[1]); //imprimindo um item da lista
console.log("Parametro de item de lista:");
console.log(frutas[1].nome); //imprimindo um elemento do dicionario de um item