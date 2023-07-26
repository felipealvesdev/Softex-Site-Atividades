const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));

const media = (nota1 + nota2) / 2;

if(media>=7){
    alert("Aprovado");
}else{
    alert("Reprovado");
}