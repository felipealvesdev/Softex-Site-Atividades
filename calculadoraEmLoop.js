let ligado = true;

function calculadora(operac){
    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));
    let result;

    if(operac === 1){
        result = numero1 + numero2;
        alert(`Resultado de ${numero1} + ${numero2} = ${result}`);
    }else if(operac === 2){
        result = numero1 - numero2;
        alert(`Resultado de ${numero1} - ${numero2} = ${result}`);
    }else if(operac === 3){
        result = numero1 * numero2;
        alert(`Resultado de ${numero1} * ${numero2} = ${result}`);
    }else if(operac === 4){
        result = numero1 / numero2;
        alert(`Resultado de ${numero1} / ${numero2} = ${result}`);
    }else{
        result = 0;
        alert(result);
        alert("Por favor, insira um número entre 1 e 5 para realizar uma operação.");
    }
}
while(ligado === true){
    const operacao = parseInt(prompt("Digite a opção de operador desejado: 1.Soma 2.Subtração 3.Multiplicação 4.Divisão 0.Parar programa"));
    if(operacao !== 0){
        calculadora(operacao);
    }else{
        ligado = false;
        alert("Programa será fechado.");
    }
}
