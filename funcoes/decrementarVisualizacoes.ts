import prompt from 'prompt-sync';
import { inputNumber } from './funcoes_auxiliares';
import { Postagem } from '../classes/class_postagem';
import { app } from '../app';
import { PostagemAvancada } from '../classes/class_postagemAvancada';
let input = prompt();


function decrementarVisualizacoes (): void {
    console.clear();
    console.log("---------------------------------------- DECREMENTAR VISUALIZAÇÕES ---------------------------------------\n");
    console.log("Insira opcionalmente [Id] ou [Texto] da Postagem Especial.\n");

    let id: number = inputNumber("Id.: ");
    let texto: string = input("Texto: ");

    console.log();
    let postagens: Postagem [] | null = app.redeSocial.repositórioDePostagens.consultar(id, texto);

    if(postagens) {
        if (postagens.length > 1){
            console.log("Não foi possível definir a Postagem Especial pretendida.");
            console.log("Várias postagens foram encontradas com os parâmetros inseridos.");
        }else {
            console.log(`Postagem de ${postagens[0].perfil.nome}`);
            console.log(`Texto: ${postagens[0].texto}`);

            if (postagens[0] instanceof PostagemAvancada){
                console.log(`👀 ${5 - postagens[0].visualizacoesRestantes}/5 \n`);
                console.log();
                
                let confirmacao: string = (input("Decrementar ? [S/n] ")).toLowerCase();
        
                if (confirmacao == "s") {
                    app.redeSocial.decrementarVisualizacoes(postagens[0]);
                    console.log("\nVisualização decrementada !!");
                }

            } else {
                console.log();
                console.log("Não se trata de uma Postagem Especial !!");
            }
        }

    }
}

export {decrementarVisualizacoes}