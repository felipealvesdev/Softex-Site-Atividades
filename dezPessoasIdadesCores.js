let arr = [[],[],[]];
let tempName;
let tempAge;
let tempFavColor;

for(let i = 0; i<10; i++){
    
    tempName = prompt(`Por favor, insira o nome da ${i+1} pessoa da lista:`);
    tempAge = parseInt(prompt(`Por favor, insira a idade de ${tempName}`));
    tempFavColor = prompt(`Por favor, insira a cor favorita de ${tempName}`);
    arr[0].push(tempName);
    arr[1].push(tempAge);
    arr[2].push(tempFavColor);
}

for(let i = 0; i<10 ; i++){  
    alert(`O ${i+1} nome da lista é : ${arr[0][i]}, a idade de ${arr[0][i]} é ${arr[1][i]} anos e
    a cor favorita de ${arr[0][i]} é ${arr[2][i]}`);
}