let ligado = true;
const nomeCompleto = prompt("Digite seu nome completo:");

while(ligado){

    try{
        const anoNascimento = parseInt(prompt(`${nomeCompleto}, digite o ano de seu nascimento:`));
        if(anoNascimento>=1922 && anoNascimento<=2022){
            const idade = 2022 - anoNascimento;
            alert(`Olá! ${nomeCompleto}, Você completará / completou ${idade} anos em 2022.`);
            ligado = false;
        }else{
            throw new Error("Digite um ano de nascimento após 1922.");
        }

    }catch(erro){
        alert(erro);
        alert(`${nomeCompleto}, digite seu ano de nascimento novamente.`);
    }
}
alert(`${nomeCompleto}, progama encerrado.`);