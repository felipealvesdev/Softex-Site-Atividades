let arr = [[],[],[]];
let tempName;
let tempAge;
let tempFavColor;

for(let i = 0; i<2; i++){
    
    tempName = prompt(`Por favor, insira o nome da ${i+1} pessoa da lista:`);
    tempAge = parseInt(prompt(`Por favor, insira a idade de ${tempName}`));
    tempFavColor = prompt(`Por favor, insira a cor favorita de ${tempName}`);
    arr[0].push(tempName);
    arr[1].push(tempAge);
    arr[2].push(tempFavColor);
}

for(let i = 0; i<2; i++){  
    alert(`O ${i+1} nome da lista é : ${arr[0][i]}, a idade de ${arr[0][i]} é ${arr[1][i]} anos e
    a cor favorita de ${arr[0][i]} é ${arr[2][i]}`);
}

alert("Alteração automática do sistema");
arr[1][1] = 20;
arr[2][1] = "Rosa"
alert(`${arr[0][1]} agora tem a idade igual a ${arr[1][1]} e sua cor favorita agora é ${arr[2][1]}`);

alert("Repetindo lista após alteração automática do sistema");
for(let i = 0; i<2; i++){  
    alert(`O ${i+1} nome da lista é : ${arr[0][i]}, a idade de ${arr[0][i]} é ${arr[1][i]} anos e
    a cor favorita de ${arr[0][i]} é ${arr[2][i]}`);
}