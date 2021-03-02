function load() {
    alert("Página carregada");
}

function clicado() { //Mostrar mensagem de obrigado
    //alert("Obrigado por clicar");
    /*
    var text;
    text = document.getElementById("agradecimento"); //pega um elemento pelo seu id, armazena em text;
    console.log(text);
    text.innerHTML = "Obrigado por clicar!"; //insere algo em html;
    */
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //em uma unica função
}    

function redirecionar() {
    window.open("https://www.google.com.br/"); //redireciona para o url definido (em nova guia)
    //window.location.href = "https://www.google.com.br/"; //redireciona para o url definido (na mesma guia)
}

function trocar() {
    //alert("trocar texto");
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"; //o elemento id='mousemove' será alterado pelo o innerHTML
}
function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocarparametro(elemento) {
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse!"; //o elemento usado como parametro será alterado pelo o innerHTML
}
function voltarparametro(elemento) {
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value); //.value pega o valor do elemento
}