import prompt from "prompt-sync";
import { Perfil } from "./class_perfil";
import { app } from "./app";

let input = prompt();

function dataAtual (): string {
    let data = new Date;
    const dia = String(data.getDate()).padStart(2,'0');
    const mes = String(data.getMonth()+1).padStart(2,'0');
    const ano = String(data.getFullYear());
    const time = data.toTimeString();
    
    return `${dia}/${mes}/${ano} às ${time}`;
}

//recebe uma função e uma mensagem como parâmetro
//repete a função recebida enquanto o usuário clica "s" 
function loppFunction (funcao: () => void, mensagem: string ): void{
    let repetir: string = ""

    do {
        
        funcao();
        repetir = (input("\n" + mensagem + " [S/n] ")).toLowerCase();

    } while (repetir === "s");
}

function inputNumber (mensagem: string): number {
    let numero = input(mensagem);
    let numeroConvertido: number = Number(numero);

    while ((numero.length == 0) || (!numeroConvertido)){
        console.log("Não é um número válido !!\n");
        numero = input (mensagem);
        numeroConvertido = Number(numero);
    }
    
    return numeroConvertido
}

function inputString (message: string): string {
    let texto = input(message);
    let mensagemConvertida: string = String(texto);
    let mensagemTeste: number = Number(texto);

    while ((texto.length == 0) || (mensagemTeste)){
        console.log("Não é um texto válido !!\n");
        texto = input (message);
        mensagemConvertida = String(texto);
        mensagemTeste = Number(texto);
    }
    
    return mensagemConvertida
}

function incluirPerfil (): void {
    console.clear();
    console.log("---- INCLUIR PERFIL ----\n");
    console.log("Insira os dados solicitados para criar um perfil:");
    console.log("[Nome, E-mail]\n");

    let id: number = app.redeSocial.repositorioDePerfis.criarId();
    let nome: string = inputString("Nome: ");
    let email: string = inputString("E-mail: ");

    let perfil: Perfil = new Perfil(id, nome, email);
    app.redeSocial.incluirPerfil(perfil);
    
    input("\n[enter]");
}

function consultarPerfil (): void {
    console.clear();
    console.log("---- CONSULTAR PERFIL ---\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Nome, E-mail]\n");

    let id: number = Number(input ("Id: "));
    let nome: string = input ("Nome: ");
    let email: string = input ("E-mail: ");

    let perfisEncontrados = app.redeSocial.consultarPerfil(id, nome, email);

    console.log("\nRESULTADO:")

    if(!perfisEncontrados){
        console.log("\nNenhum perfil encontrado !!");
    } else {        
        for (let i = 0; i < perfisEncontrados.length; i++){
            console.log("\n--------------- xx ---------------\n");
            console.log(`Id: ${perfisEncontrados[i].id}`);
            console.log(`Nome: ${perfisEncontrados[i].nome}`);
            console.log(`E-mail: ${perfisEncontrados[i].email}`);
        }
    }

    input("\n[enter]");
    
}

//Executa a tela de opções para escolha do tipo de postagem (normal ou Especial)
// Chama outra função de acordo com a opção escolhida
function incluirPostagem (): void {
    console.clear();
    console.log("---- INCLUIR POSTAGEM --- \n");
    console.log("Que tipo de Postagem deseja incluir ? \n");
    console.log("[1] Postagem Normal \n[2] Postagem Especial\n");

    let opcao: string = input("Opçao: ");

    switch (opcao) {
        case "1" :
            console.log("\n incluirPostagemNormal");
            break;
        case "2" :
            console.log("\n Incluir Postagem Especial");
            break;
        default :
            input ("\n Opção inválida ! \n [enter]");
            break;
    }
}

function incluirPostagemNormal(): void {
    console.clear();
    console.log("---- INCLUIR POSTAGEM NORMAL ---- \n");
    console.log("Insira os dados solicitados para incluir uma Postagem Normal:");
    console.log("[Nome, E-mail]\n");



}

export {dataAtual, inputNumber, inputString, incluirPerfil, consultarPerfil, 
    loppFunction, incluirPostagem };

