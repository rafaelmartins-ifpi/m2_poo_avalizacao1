import prompt from 'prompt-sync';
import { incluirPostagemNormal } from './incluirPostagemNormal';
import { incluirPostagemEspecial } from './incluirPostagemEspecial';
let input = prompt();


//Executa a tela de opções para escolha do tipo de postagem (normal ou Especial)
// Chama outra função de acordo com a opção escolhida

function incluirPostagem (): void {
    console.clear();
    console.log("---------------------------------------- CONSULTAR PERFIL ---------------------------------------\n");
    console.log("Que tipo de Postagem deseja incluir ? \n");
    console.log("[1] Postagem Normal \n[2] Postagem Especial\n");

    let opcao: string = input("Opçao: ");

    switch (opcao) {
        case "1" :
            incluirPostagemNormal();
            break;
        case "2" :
            incluirPostagemEspecial();
            break;
        default :
            input ("\n Opção inválida ! \n [enter]");
            break;
    }
}

export {incluirPostagem}