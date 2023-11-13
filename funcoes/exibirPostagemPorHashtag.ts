import { app } from '../app';
import { imprimirPostagens, inputString } from './funcoes_auxiliares';


function exibirPostagensPorHashtag (): void {
    console.clear();
    console.log("---------------------------------------- EXIBIR POSTAGENS POR HASHTAG ---------------------------------------\n");
    console.log("Insira a [Hashtag] desejada:\n");
    let hashtag: string = inputString("Hashtag: ");
    
    console.log("\nRESULTADO: \n");
    let postagens = app.redeSocial.exibirPostagemPorHashtag(hashtag);

    if (postagens.length != 0) {
        imprimirPostagens(postagens);
    } else {
        console.log("🚨 Não foram encontradas Postagens !!");
    }
}

export {exibirPostagensPorHashtag}