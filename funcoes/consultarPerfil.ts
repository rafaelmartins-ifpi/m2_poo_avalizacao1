import prompt from 'prompt-sync';
import { app } from '../app';
let input = prompt();


function consultarPerfil (): void {
    console.clear();
    console.log("---- CONSULTAR PERFIL ---\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Nome, E-mail]\n");

    let id: number = Number(input ("Id: "));
    let nome: string = input ("Nome: ");
    let email: string = input ("E-mail: ");

    console.log("\nRESULTADO: \n");
    let perfilEncontrado = app.redeSocial.consultarPerfil(id, nome, email);

    if(perfilEncontrado){
        console.log (`Id: ${perfilEncontrado.id} \n`);
        console.log (`Nome: ${perfilEncontrado.nome} \n`);
        console.log (`E-mail: ${perfilEncontrado.email} \n`);
    }

    input("\n[enter]");
    
}

export {consultarPerfil}