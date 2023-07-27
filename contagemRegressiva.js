alert("Iniciando contagem regressiva!");
   
let tempo = 10;

let interval = setInterval(()=>{
    document.writeln(`<br>${tempo}s<br>`);
    tempo--;
},1000)

setTimeout(()=>{
    clearInterval(interval);
    document.writeln(`<br>Booooooooooommmmmmmmmmmmm <br>`)
},11000);

