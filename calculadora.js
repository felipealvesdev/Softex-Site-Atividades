const numero1 = parseFloat(prompt("Digite o primeiro número:"));
const numero2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = parseInt(prompt("Digite a opção de operador desejado: 1.Soma 2.Subtração 3.Multiplicação 4.Divisão"));
let result;

function calculadora(num1, num2, operac){

    if(operac === 1){
        result = num1 + num2;
        alert(`Resultado de ${num1} + ${num2} = ${result}`);
    }else if(operac === 2){
        result = num1 - num2;
        alert(`Resultado de ${num1} - ${num2} = ${result}`);
    }else if(operac === 3){
        result = num1 * num2;
        alert(`Resultado de ${num1} * ${num2} = ${result}`);
    }else if(operac === 4){
        result = num1 / num2;
        alert(`Resultado de ${num1} / ${num2} = ${result}`);
    }else{
        result = 0;
        alert(result);
        alert("Por favor, insira um número entre 1 e 4 para realizar uma operação.")
    }
}
calculadora(numero1, numero2, operacao);