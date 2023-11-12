import prompt from 'prompt-sync';
import { inputNumber } from './funcoes_auxiliares';
import { Postagem } from '../classes/class_postagem';
import { app } from '../app';
let input = prompt();


function curtir (): void {
    console.clear();
    console.log("---- CURTIR POSTAGEM ---- \n");
    console.log("Insira o ID da postagem que deseja curtir.\n");

    let id: number = inputNumber("Id.: ");

    let postagens: Postagem [] | null = app.redeSocial.consultarPostagens(id);

    if(postagens) {
        console.log(`\nTexto da Postagem: ${postagens[0].texto}`);
        let confirmacao: string = (input("Deseja curti ? [S/n] ")).toLowerCase();
        
        if (confirmacao == "s") {
            app.redeSocial.curtir(postagens[0].id);
        } 
    }

    input("\n[enter] ");
}

export {curtir}