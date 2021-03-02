function soma (n1, n2){
    return n1 + n2;
}

console.log("Função soma(5, 10): " + (soma (5, 10)));


function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

console.log("Função setReplace: ");
console.log(setReplace("Vai Japão", "Japão", "Brasil"));


function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade? ");
console.log(validaIdade(idade));