import prompt from "prompt-sync";
import { App } from "./classes/class_app";
import { loppFunction } from "./funcoes/funcoes_auxiliares";
import { incluirPerfil } from "./funcoes/incluirPerfil";
import { consultarPerfil } from "./funcoes/consultarPerfil";
import { incluirPostagem } from "./funcoes/incluirPostagem";
import { consultarPostagens } from "./funcoes/consultarPostagem";
import { curtir } from "./funcoes/curtir";

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
                consultarPerfil();
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
                //função
                break;
            case "7": 
                //função
                break;
            case "8":
                //função
                break;
            case "9":
                //função
                break;
            case "10":
                //função
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

