import prompt from 'prompt-sync';
import { inputNumber } from './funcoes_auxiliares';
import { Postagem } from '../classes/class_postagem';
import { app } from '../app';
let input = prompt();


function curtir (): void {
    console.clear();
    console.log("---------------------------------------- CURTIR POSTAGEM ---------------------------------------\n");
    console.log("Insira o ID da Postagem que deseja curtir.\n");

    let id: number = inputNumber("Id.: ");

    console.log();
    let postagens: Postagem [] | null = app.redeSocial.repositórioDePostagens.consultar(id);

    if(postagens) {
        console.log(`Postagem de ${postagens[0].perfil.nome}`);
        console.log(`Texto: ${postagens[0].texto}`);
        console.log();
        let confirmacao: string = (input("curtir ? [S/n] ")).toLowerCase();
        
        if (confirmacao == "s") {
            app.redeSocial.curtir(postagens[0].id);
            console.log("\n✅ Postagem curtida !!")
        } 
    } else {
        console.log("🚨 Postagem não localizada !!");
    }
}

export {curtir}