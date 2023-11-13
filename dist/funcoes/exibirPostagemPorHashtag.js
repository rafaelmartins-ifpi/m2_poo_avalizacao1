"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirPostagensPorHashtag = void 0;
const app_1 = require("../app");
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
function exibirPostagensPorHashtag() {
    console.clear();
    console.log("---------------------------------------- EXIBIR POSTAGENS POR HASHTAG ---------------------------------------\n");
    console.log("Insira a [Hashtag] desejada:\n");
    let hashtag = (0, funcoes_auxiliares_1.inputString)("Hashtag: ");
    console.log("\nRESULTADO: \n");
    let postagens = app_1.app.redeSocial.exibirPostagemPorHashtag(hashtag);
    if (postagens.length != 0) {
        (0, funcoes_auxiliares_1.imprimirPostagens)(postagens);
    }
    else {
        console.log("🚨 Não foram encontradas Postagens !!");
    }
}
exports.exibirPostagensPorHashtag = exibirPostagensPorHashtag;
