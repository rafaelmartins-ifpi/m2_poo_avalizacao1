import prompt from 'prompt-sync';
import { PostagemAvancada } from '../classes/class_postagemAvancada';
import { app } from '../app';
let input = prompt();


function consultarPostagens (): void {
    console.clear();
    console.log("---- CONSULTAR POSTAGENS ----\n");
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
        for (let i = 0; i < postagensEncontradas.length; i++){
            console.log("\n--------------- xx ---------------\n");
            console.log(`🗨️ id. ${postagensEncontradas[i].id}\n`);
            
            if (postagensEncontradas[i].ehPopular()){
                console.log(`🥇🥈🥉\n`);
            }
            
            if (postagensEncontradas[i] instanceof PostagemAvancada){
                console.log(`${postagensEncontradas[i].texto} \n`);
                console.log(`👍 ${postagensEncontradas[i].curtidas}   `+
                            `👎 ${postagensEncontradas[i].descurtidas}   `+
                            `👀 ${5 - (<PostagemAvancada>postagensEncontradas[i]).visualizacoesRestantes}/5 \n`);
                console.log(`${(<PostagemAvancada>postagensEncontradas[i]).hashtags}\n`);

            }else {
                console.log(`${postagensEncontradas[i].texto} \n`);
                console.log(`👍 ${postagensEncontradas[i].curtidas}   `+
                            `👎 ${postagensEncontradas[i].descurtidas}\n`);
            }
            
            console.log(`Postado por ${postagensEncontradas[i].perfil.nome}, em ${postagensEncontradas[i].data} \n`);
        }
    }

}


export {consultarPostagens}