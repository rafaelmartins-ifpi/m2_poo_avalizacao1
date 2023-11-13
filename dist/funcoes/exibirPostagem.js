"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exibirPostagem = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const exibirPostagensPorPerfil_1 = require("./exibirPostagensPorPerfil");
const exibirPostagemPorHashtag_1 = require("./exibirPostagemPorHashtag");
let input = (0, prompt_sync_1.default)();
function exibirPostagem() {
    console.clear();
    console.log("---------------------------------------- EXIBIR POSTAGENS ---------------------------------------\n");
    console.log("Como deseja exibir as Postagens ? \n");
    console.log("[1] Por Perfil \n[2] Por HashTag\n");
    let opcao = input("Opçao: ");
    switch (opcao) {
        case "1":
            (0, exibirPostagensPorPerfil_1.exibirPostagensPorPerfil)();
            break;
        case "2":
            (0, exibirPostagemPorHashtag_1.exibirPostagensPorHashtag)();
            break;
        default:
            input("\n Opção inválida ! \n [enter]");
            break;
    }
}
exports.exibirPostagem = exibirPostagem;
