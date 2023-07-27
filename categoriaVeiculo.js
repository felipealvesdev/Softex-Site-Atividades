const qtdRodas = parseFloat(prompt("Digite a quantidade de rodas do veículo:"));
const pesoVeiculo = parseFloat(prompt("Por favor, informe o peso do veículo em Kg:"));
const qtdMaxPessoas = parseFloat(prompt("Por favor, informe a quantidade máxima de pessoas no veículo:"));

if(qtdRodas>=2 && qtdRodas<=3){
    alert("Veículo pertence a categoria A.");
}else if(qtdRodas === 4 && qtdMaxPessoas<= 8 && pesoVeiculo< 3500){
    alert("Veículo pertence a categoria B.");
}else if(qtdRodas>=4 && qtdMaxPessoas>8){
    alert("Veículo pertence a categoria D.");
}else if(qtdRodas>=4 && pesoVeiculo>=3500 && pesoVeiculo<6000){
    alert("Veículo pertence a categoria C.");
}else if(qtdRodas>=4 && pesoVeiculo>=6000){
    alert("Veículo pertence a categoria E.");
}else{
    alert("Erro inesperado. Por favor, verifique suas informações fornecidas e reincie o sistema.");
}
