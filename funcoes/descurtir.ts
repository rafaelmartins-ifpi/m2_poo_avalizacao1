import prompt from 'prompt-sync';
import { inputNumber } from './funcoes_auxiliares';
import { Postagem } from '../classes/class_postagem';
import { app } from '../app';
let input = prompt();


function descurtir (): void {
    console.clear();
    console.log("---------------------------------------- DESCURTIT POSTAGEM ---------------------------------------\n");
    console.log("Insira o ID da postagem que deseja descurtir.\n");

    let id: number = inputNumber("Id.: ");

    console.log();
    let postagens: Postagem [] | null = app.redeSocial.repositórioDePostagens.consultar(id);

    if(postagens) {
        console.log(`Postagem de ${postagens[0].perfil.nome}`);
        console.log(`Texto da Postagem: ${postagens[0].texto}`);
        console.log();
        let confirmacao: string = (input("Descurtir ? [S/n] ")).toLowerCase();
        
        if (confirmacao == "s") {
            app.redeSocial.descurtir(postagens[0].id);
            console.log("\n👍 Postagem descurtida !!")
        } 
    }
}

export {descurtir}