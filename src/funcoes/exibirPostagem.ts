import prompt from 'prompt-sync';
import { exibirPostagensPorPerfil } from './exibirPostagensPorPerfil';
import { exibirPostagensPorHashtag } from './exibirPostagemPorHashtag';
let input = prompt();

function exibirPostagem (): void {
    console.clear();
    console.log("---------------------------------------- EXIBIR POSTAGENS ---------------------------------------\n");
    console.log("Como deseja exibir as Postagens ? \n");
    console.log("[1] Por Perfil \n[2] Por HashTag\n");

    let opcao: string = input ("Opçao: ");

    switch (opcao) {
        case "1" :
            exibirPostagensPorPerfil();
            break;
        case "2" :
            exibirPostagensPorHashtag();
            break;
        default :
            input ("\n Opção inválida ! \n [enter]");
            break;
    }
}

export {exibirPostagem}