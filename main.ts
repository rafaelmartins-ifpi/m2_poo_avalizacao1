import prompt from "prompt-sync";
import { App } from "./app";
import { consultarPerfil, incluirIperfil } from "./funcoes_auxiliares";

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
                incluirIperfil();
                break;
            case "2":
                consultarPerfil();
                break;
            case "3":
                //função
                break;
            case "4":
                //função
                break;
            case "5":
                //função
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

