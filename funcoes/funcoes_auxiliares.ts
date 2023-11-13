import { Postagem } from "../classes/class_postagem";
import { PostagemAvancada } from "../classes/class_postagemAvancada";
import prompt from "prompt-sync";
let input = prompt();

const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",
    
    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        gray: "\x1b[90m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        gray: "\x1b[100m",
        crimson: "\x1b[48m"
    }
};



function dataAtual (): string {
    let data = new Date;
    const dia = String(data.getDate()).padStart(2,'0');
    const mes = String(data.getMonth()+1).padStart(2,'0');
    const ano = String(data.getFullYear());
    const time = data.toTimeString();
    
    return `${dia}/${mes}/${ano} às ${time}`;
}


//recebe uma função e uma mensagem como parâmetro
//repete a função recebida enquanto o usuário clica "s" 
function loppFunction (funcao: () => void, mensagem: string ): void{
    let repetir: string = ""

    do {
        
        funcao();
        console.log();
        repetir = (input(mensagem + " [S/n] ")).toLowerCase();

    } while (repetir === "s");
}

function inputNumber (mensagem: string): number {
    let numero = input(mensagem);
    let numeroConvertido: number = Number(numero);

    while ((numero.length == 0) || (!numeroConvertido)){
        console.log("Não é um número válido !!\n");
        numero = input (mensagem);
        numeroConvertido = Number(numero);
    }
    
    return numeroConvertido
}

function inputString (message: string): string {
    let texto = input(message);
    let mensagemConvertida: string = String(texto);
    let mensagemTeste: number = Number(texto);

    while ((texto.length == 0) || (mensagemTeste)){
        console.log("Não é um texto válido !!\n");
        texto = input (message);
        mensagemConvertida = String(texto);
        mensagemTeste = Number(texto);
    }
    
    return mensagemConvertida
}

// recebe um array de postagens e formata para exibição na tela
function imprimirPostagens (postagens: Postagem[]) {
    console.log("---------------------------------------- xx ---------------------------------------");
        for (let i = 0; i < postagens.length; i++){
            console.log();
            console.log(`🗨️ id. ${postagens[i].id}\n`);
            
            if (postagens[i].ehPopular()){
                console.log(`🥇🥈🥉\n`);
            }
            
            if (postagens[i] instanceof PostagemAvancada){
                console.log();
                console.log(colours.fg.green, `${postagens[i].texto} \n`, colours.reset);
                console.log();
                console.log(`👍 ${postagens[i].curtidas}   `+
                            `👎 ${postagens[i].descurtidas}   `+
                            `👀 ${(<PostagemAvancada>postagens[i]).visualizacoesTotal - (<PostagemAvancada>postagens[i]).visualizacoesRestantes}/${(<PostagemAvancada>postagens[i]).visualizacoesTotal} \n`);
                console.log(colours.fg.yellow, `${(<PostagemAvancada>postagens[i]).hashtags}\n`,colours.reset);
            }else {
                console.log();
                console.log(colours.fg.cyan, `${postagens[i].texto}\n`, colours.reset);
                console.log();
                console.log(`👍 ${postagens[i].curtidas}   `+
                            `👎 ${postagens[i].descurtidas}\n`);
            }
            
            console.log(colours.dim, `Postado por ${postagens[i].perfil.nome}, em ${postagens[i].data}\n`, colours.reset);
            console.log("---------------------------------------- xx ---------------------------------------");
        }
}



export {dataAtual, inputNumber, inputString, loppFunction, imprimirPostagens};

