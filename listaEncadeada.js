const listaEncadeada = [
    {   
        id:0,
        nome:"Felipe",
        idade: "23",
        proxDaLista: "Index / id: "+listaEncadeada[0].id + 1,
    },
    {
        id:1,
        nome:"Luiza",
        idade:"22",
        proxDaLista: "Index / id: "+ listaEncadeada[1].id + 1,
    },
    {
        id:2,
        nome:"Lucy",
        idade:"25",
        proxDaLista: "Index / id: "+ listaEncadeada[2].id + 1,
    },
    {
        id:3,
        nome:"Corby",
        idade:"24",
        proxDaLista: "Index / id: "+ null,
    }
];
// cada index do array possui um objeto
// cada objeto possui suas características e seus respectivos proximos da lista
// formando assim, uma ligaão entre cada um, de maneira ao acessar o primeiro,
// eu tenha conhecimento de qual é o seu próximo
// formando uma lista em cadeia
// caso eu altere a posicao de qualquer um, eu conseguirei saber qual era a ordem inicial.