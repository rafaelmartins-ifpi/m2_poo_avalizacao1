import prompt from "prompt-sync";
import { App } from "./class_app";
import { consultarPerfil, consultarPostagens, incluirPerfil, incluirPostagem, loppFunction, curtir } from "./funcoes_auxiliares";

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
                loppFunction(incluirPerfil, "Deseja incluir outro Perfil ?");
                break;
            case "2":
                consultarPerfil();
                break;
            case "3":
                loppFunction(incluirPostagem, "Deseja incluir outra Postagem ?");
                break;
            case "4":
                consultarPostagens();
                break;
            case "5":
                curtir();
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

