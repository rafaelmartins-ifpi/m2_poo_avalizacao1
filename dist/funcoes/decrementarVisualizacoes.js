"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrementarVisualizacoes = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
const app_1 = require("../app");
const class_postagemAvancada_1 = require("../classes/class_postagemAvancada");
let input = (0, prompt_sync_1.default)();
function decrementarVisualizacoes() {
    console.clear();
    console.log("---------------------------------------- DECREMENTAR VISUALIZAÇÕES ---------------------------------------\n");
    console.log("Insira opcionalmente [Id] ou [Texto] da Postagem Especial.\n");
    let id = (0, funcoes_auxiliares_1.inputNumber)("Id.: ");
    let texto = input("Texto: ");
    console.log();
    let postagens = app_1.app.redeSocial.repositórioDePostagens.consultar(id, texto);
    if (postagens) {
        if (postagens.length > 1) {
            console.log("🚨 Não foi possível definir a Postagem Especial pretendida.");
            console.log("🚨 Várias postagens foram encontradas com os parâmetros inseridos.");
        }
        else {
            console.log(`Postagem de ${postagens[0].perfil.nome}`);
            console.log(`Texto: ${postagens[0].texto}`);
            if (postagens[0] instanceof class_postagemAvancada_1.PostagemAvancada) {
                console.log(`👀 ${5 - postagens[0].visualizacoesRestantes}/5 \n`);
                console.log();
                let confirmacao = (input("Decrementar ? [S/n] ")).toLowerCase();
                if (confirmacao == "s") {
                    app_1.app.redeSocial.decrementarVisualizacoes(postagens[0]);
                    console.log("\n✅ Visualização decrementada !!");
                }
            }
            else {
                console.log();
                console.log(" 🚨 Não se trata de uma Postagem Especial !!");
            }
        }
    }
}
exports.decrementarVisualizacoes = decrementarVisualizacoes;
