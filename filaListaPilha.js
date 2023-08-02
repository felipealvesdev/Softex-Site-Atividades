const array = [3,7,9,1,0];
queueArray = [(array[0])];
stackArray =[];

// fila -> primeiro que entra, primeiro a sair;

// lista -> ordena pelo menor pro maior, ou de A - Z;

// pilha -> primeiro a entrar, ultimo a sair;

alert(`Exibindo o array arr = [ 3, 7, 9, 1, 0] dado no exercício em diferentes estruturas de dados...`);
alert(`Estrutura em FILA:`);
for(let i = 0; i<array.length; i++){
    alert(array[i]);
}

alert(`Estrutura em LISTA:`);

for(let i = 0; i<array.length; i++){
    if(array[i]<queueArray[0]){
        queueArray.unshift(array[i]);
    }else if(array[i]> queueArray[0]){
        queueArray.push(array[i]);
    }
}
for(let i = 0; i<array.length; i++){
    alert(queueArray[i]);
}

alert(`Estrutura em PILHA:`);
for(let i = array.length-1; i>=0; i--){
    stackArray.push(array[i]);
}
for(let i = 0; i<array.length; i++){
    alert(stackArray[i]);
}
alert(`Programa encerrado.`);


