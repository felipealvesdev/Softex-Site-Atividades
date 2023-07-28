let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;
let nulo = 0;

let ligado = true;
let resultado;

while(ligado){

    try{
        const voto = parseInt(prompt("Insira seu voto: x = 889 ; y = 847 ; z = 515 ; branco = 0;"));
        if(voto == 889){
            candidato_X ++;
        }else if(voto == 847){
            candidato_Y ++;
        }else if(voto == 515){
            candidato_Z ++;
        }else if(voto == 0){
            branco ++;
            nulo++;
        }else{
            nulo++;
            throw new Error("Número de chapa não encontrado!! Voto considerado nulo.");
        }
        if(candidato_X> candidato_Y && candidato_X> candidato_Z){
            resultado = "Candidato X";
        }else if(candidato_Y> candidato_X && candidato_Y> candidato_Z){
            resultado = "Candidato Y";
        }else if(candidato_Z> candidato_X && candidato_Z> candidato_Y){
            resultado = "Candidato Z";
        }else{
            resultado = "Empate entre os candidatos";
        }




        const continuarVoto = prompt("Deseja continuar votando? s = sim / n = não;");
        if(continuarVoto === "n"){
            ligado = false;
            alert("Votação encerrada.");
            alert(`O resultado da votação foi: X = ${candidato_X}; Y = ${candidato_Y}; Z = ${candidato_Z}; Brancos = ${branco}; Nulo: ${nulo}`);
            alert(`${resultado} foi o resultado final.`);
        }else{
            alert(`Continuando com a votação.`);
        }

    }catch(error){
        alert(error);
        alert("Por favor, digite uma das opcões: x = 889 ; y = 847 ; z = 515 ; branco = 0;");
    }
}