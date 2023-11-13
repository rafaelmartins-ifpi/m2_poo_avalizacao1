import { Postagem } from "../classes/class_postagem";
import { PostagemAvancada } from "../classes/class_postagemAvancada";
import prompt from "prompt-sync";
let input = prompt();



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
                console.log(`${postagens[i].texto}\n`);
                console.log();
                console.log(`👍 ${postagens[i].curtidas}   `+
                            `👎 ${postagens[i].descurtidas}   `+
                            `👀 ${5 - ((<PostagemAvancada>postagens[i]).visualizacoesRestantes)}/5 \n`);
                console.log(`${(<PostagemAvancada>postagens[i]).hashtags}\n`);
            }else {
                console.log();
                console.log(`${postagens[i].texto} \n`);
                console.log();
                console.log(`👍 ${postagens[i].curtidas}   `+
                            `👎 ${postagens[i].descurtidas}\n`);
            }
            
            console.log(`Postado por ${postagens[i].perfil.nome}, em ${postagens[i].data} \n`);
            console.log("---------------------------------------- xx ---------------------------------------");
        }
}



export {dataAtual, inputNumber, inputString, loppFunction, imprimirPostagens};

