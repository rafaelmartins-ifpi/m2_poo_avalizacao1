"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.curtir = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
const app_1 = require("../app");
let input = (0, prompt_sync_1.default)();
function curtir() {
    console.clear();
    console.log("---------------------------------------- CURTIR POSTAGEM ---------------------------------------\n");
    console.log("Insira o ID da Postagem que deseja curtir.\n");
    let id = (0, funcoes_auxiliares_1.inputNumber)("Id.: ");
    console.log();
    let postagens = app_1.app.redeSocial.repositórioDePostagens.consultar(id);
    if (postagens) {
        console.log(`Postagem de ${postagens[0].perfil.nome}`);
        console.log(`Texto: ${postagens[0].texto}`);
        console.log();
        let confirmacao = (input("curtir ? [S/n] ")).toLowerCase();
        if (confirmacao == "s") {
            app_1.app.redeSocial.curtir(postagens[0].id);
            console.log("\n✅ Postagem curtida !!");
        }
    }
    else {
        console.log("🚨 Postagem não localizada !!");
    }
}
exports.curtir = curtir;
