const nome = prompt("Digite seu nome:");
const idade = parseInt(prompt("Digite sua idade:"));
const altura = parseFloat(prompt("Digite sua altura em metros: (ex: 1.80)"));
let maioridade;

if(idade>=18){
    maioridade = true;
}else{
    maioridade = false;
}

alert(`Nome: ${nome}`);
alert(`Idade: ${idade}`);
alert(`Altura: ${altura}`);
alert(`Maior de idade: ${maioridade}`);