var data = new Date(); //encontra a data de hoje e armazena em uma variável
console.log("Completa: " + data); //imprimi a data completa
console.log("Dia: " + data.getDate()); //imprimi o dia de hoje
console.log("Mês: " + (data.getMonth()+1)); //retorna o mês (começa a contar do zero, é necessário somar 1)
console.log("Hora: " + data.getHours()); //retorna a hora
console.log("Minuto: " + data.getMinutes()); //retorna os minutos
