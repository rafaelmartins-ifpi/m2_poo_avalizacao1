import prompt from 'prompt-sync';
import { inputString } from './funcoes_auxiliares';
import { app } from '../app';
import { Perfil } from '../classes/class_perfil';
let input = prompt();


function incluirPerfil (): void {
    console.clear();
    console.log("---------------------------------------- INCLUIR PERFIL ---------------------------------------\n");
    console.log("Insira os dados solicitados para criar um perfil:");
    console.log("[Nome, E-mail]\n");

    let id: number = app.redeSocial.repositorioDePerfis.criarId();
    let nome: string = inputString("Nome: ");
    let email: string = inputString("E-mail: ");

    let perfil: Perfil = new Perfil(id, nome, email);
    app.redeSocial.incluirPerfil(perfil);
    
}

export {incluirPerfil}