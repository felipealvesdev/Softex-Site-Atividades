let matrizBidimen = [];
let ligado = true;
let countAnimals = 0;

let nomeAnimal;
let especieAnimal;
let idadeAnimal;
let tempMatriz;


while(ligado){

        nomeAnimal = prompt(`Por favor, digite o nome do animal:`);
        especieAnimal = prompt(`Por favor, digite a espécie de ${nomeAnimal}`);
        idadeAnimal = parseInt(prompt(`Por favor, digite a idade de ${nomeAnimal}`));
        
        matrizBidimen[countAnimals] = [nomeAnimal, especieAnimal, idadeAnimal];
        countAnimals++

        
        const temp = prompt("Digite qualquer tecla para continuar ou digite 0 para parar de adicionar animais");
        if(temp === "0"){
            ligado = false;
        }
}

for(let i = 0; i<countAnimals; i++){
    alert(`O ${i+1}º animal: ${matrizBidimen[i][0]}; A espécie do ${matrizBidimen[i][0]}: ${matrizBidimen[i][1]}; e a idade de ${matrizBidimen[i][0]}: ${matrizBidimen[i][2]} anos.`);
}

alert(`Programa encerrado.`);