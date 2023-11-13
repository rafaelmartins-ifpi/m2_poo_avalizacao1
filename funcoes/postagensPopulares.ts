import prompt from 'prompt-sync'
import { app } from "../app";
import { imprimirPostagens } from './funcoes_auxiliares';
let input = prompt();

function postagensPopulares (): void {
    console.clear();
    console.log("---------------------------------------- POSTAGENS POPULARES ---------------------------------------\n");
    console.log("Relaciona as todas as postagens populares do Blog.\n");
    input ("[enter]");

    let postagens = app.redeSocial.getPostagensPopulares();
    console.log("\nRESULTADO:\n");
    
    if (postagens.length = 0) {
        console.log("Não existem Postagens Populares.");
    } else {
        imprimirPostagens(postagens);
    }
}

export {postagensPopulares}