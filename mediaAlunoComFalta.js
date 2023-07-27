const nome = prompt("Informe o nome do aluno:");
const nota1 = parseFloat(prompt("Informe a primeira nota"));
const nota2 = parseFloat(prompt("Informe a segunda nota"));
const faltas = parseInt(prompt(`Informe o número de faltas do aluno ${nome}`));

const media = (nota1+nota2) / 2;

if(media<7){
    alert(`${nome} está reprovado(a) devido a média ser menor que 7. Valor da média = ${media}.`);
}else if(faltas>3){
    alert(`${nome} está reprovado(a) devido a quantidade de faltas. Quantidade de faltas = ${faltas}`);
}else if(media>= 7 && media<=10){
    alert(`${nome} está aprovado. Valor da média = ${media}`);
}else{
    alert(`Erro inesperado. Por favor, reinicie o sistema.`);
}

