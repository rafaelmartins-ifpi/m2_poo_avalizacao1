import prompt from 'prompt-sync';
import { PostagemAvancada } from '../classes/class_postagemAvancada';
import { imprimirPostagens } from './funcoes_auxiliares';
import { app } from '../app';
let input = prompt();


function consultarPostagens (): void {
    console.clear();
    console.log("---------------------------------------- CONSULTAR PPOSTAGENS ---------------------------------------\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Texto, #HashTag, Perfil]\n");

    let id: number = Number(input ("Id: "));
    let texto: string = input ("Texto da Postagem: ");
    let hashtag: string = input ("#HashTag: ");
    let nome: string = input("Nome do Perfil: ");
    let perfil = app.redeSocial.consultarPerfil(0, nome);

    console.log("\nRESULTADO: ");
    let postagensEncontradas = app.redeSocial.consultarPostagens(id, texto, hashtag, perfil);

    if (postagensEncontradas) {
        imprimirPostagens (postagensEncontradas);
    }

}


export {consultarPostagens}