import prompt from "prompt-sync";
import { App } from "../src/classes/class_app";
import { loppFunction } from "./funcoes/funcoes_auxiliares";
import { incluirPerfil } from "./funcoes/incluirPerfil";
import { consultarPerfil } from "./funcoes/consultarPerfil";
import { incluirPostagem } from "./funcoes/incluirPostagem";
import { consultarPostagens } from "./funcoes/consultarPostagem";
import { curtir } from "./funcoes/curtir";
import { descurtir } from "./funcoes/descurtir";
import { decrementarVisualizacoes } from "./funcoes/decrementarVisualizacoes";
import { exibirPostagem } from "./funcoes/exibirPostagem";
import { postagensPopulares } from "./funcoes/postagensPopulares";
import { hashtagsPopulares } from "./funcoes/hashtagsPopulares";

let input = prompt();
let app: App = new App();


function main (){
    
    let opcao: string = "";

    do {
      
        console.clear();
        app.mostrarMenu();
        opcao = input("Opção: ");

        switch (opcao) {
            case "1":
                loppFunction (incluirPerfil, "Deseja incluir outro Perfil ?");
                break;
            case "2":
                loppFunction(consultarPerfil, "Deseja consultar outro Perfil ?");
                break;
            case "3":
                loppFunction (incluirPostagem, "Deseja incluir outra Postagem ?");
                break;
            case "4":
                loppFunction (consultarPostagens, "Deseja consultar outra Postagem ?");
                break;
            case "5":
                loppFunction (curtir, "Deseja curtir outra postagem ?");
                break;
            case "6":
                loppFunction(descurtir, "Deseja descurtir outra mensagem ?");
                break;
            case "7": 
                loppFunction(decrementarVisualizacoes, "Deseja Decrementar Visualização de outra Postagem Especial ?");
                break;
            case "8":
                loppFunction(exibirPostagem, "Deseja realizar nova exibição ?");
                break;
            case "9":
                loppFunction(postagensPopulares, "Deseja exibir novamente ?");
                break;
            case "10":
                loppFunction(hashtagsPopulares, "Deseja exibir novamente ?");
                break;
            case "0":
                break;
            default:
                input("\nOpção Inválida !! \n [enter]");
                break;
        }

    } while (opcao != "0");
    input("\nAplicação encerrada !! \n[enter]")
}

main ();

export {app}

