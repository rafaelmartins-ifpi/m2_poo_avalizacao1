"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incluirPostagem = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const incluirPostagemNormal_1 = require("./incluirPostagemNormal");
const incluirPostagemEspecial_1 = require("./incluirPostagemEspecial");
let input = (0, prompt_sync_1.default)();
//Executa a tela de opções para escolha do tipo de postagem (normal ou Especial)
// Chama outra função de acordo com a opção escolhida
function incluirPostagem() {
    console.clear();
    console.log("---------------------------------------- CONSULTAR PERFIL ---------------------------------------\n");
    console.log("Que tipo de Postagem deseja incluir ? \n");
    console.log("[1] Postagem Normal \n[2] Postagem Especial\n");
    let opcao = input("Opçao: ");
    switch (opcao) {
        case "1":
            (0, incluirPostagemNormal_1.incluirPostagemNormal)();
            break;
        case "2":
            (0, incluirPostagemEspecial_1.incluirPostagemEspecial)();
            break;
        default:
            input("\n Opção inválida ! \n [enter]");
            break;
    }
}
exports.incluirPostagem = incluirPostagem;
