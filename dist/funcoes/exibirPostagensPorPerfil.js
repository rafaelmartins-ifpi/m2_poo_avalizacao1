"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirPostagensPorPerfil = void 0;
const app_1 = require("../app");
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
function exibirPostagensPorPerfil() {
    console.clear();
    console.log("---------------------------------------- EXIBIR POSTAGENS POR PERFIL ---------------------------------------\n");
    console.log("Insira o [Id] do Perfil desejado:\n");
    let id = (0, funcoes_auxiliares_1.inputNumber)("Id: ");
    console.log("\nRESULTADO: \n");
    let postagens = app_1.app.redeSocial.exibirPostagensPorPerfil(id);
    if (postagens.length != 0) {
        (0, funcoes_auxiliares_1.imprimirPostagens)(postagens);
    }
    else {
        console.log("🚨 Não foram encontradas Postagens !!");
    }
}
exports.exibirPostagensPorPerfil = exibirPostagensPorPerfil;
