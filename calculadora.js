const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = parseInt(prompt("Digite a opção de operador desejado: 1.Soma 2.Subtração 3.Multiplicação 4.Divisão"));
let result;

if(operacao === 1){
    result = numero1 + numero2;
    alert(`Resultado de ${numero1} + ${numero2} = ${result}`);
}else if(operacao === 2){
    result = numero1 - numero2;
    alert(`Resultado de ${numero1} - ${numero2} = ${result}`);
}else if(operacao === 3){
    result = numero1 * numero2;
    alert(`Resultado de ${numero1} * ${numero2} = ${result}`);
}else if(operacao === 4){
    result = numero1 / numero2;
    alert(`Resultado de ${numero1} / ${numero2} = ${result}`);
}else{
    result = 0;
    alert(result);
    alert("Por favor, insira um número entre 1 e 4 para realizar uma operação.")
}