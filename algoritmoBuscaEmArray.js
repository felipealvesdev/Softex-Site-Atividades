const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let indexBusca;


for(let i = 0; i<array.length; i++){
    if(array[i] === 20){
        indexBusca = array.indexOf(array[i]);
    }
}

alert(`O valor procurado de 20 está no index ${indexBusca} e é o ${indexBusca+1}º item da lista`);