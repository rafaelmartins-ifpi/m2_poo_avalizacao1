"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postagensPopulares = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const app_1 = require("../app");
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
let input = (0, prompt_sync_1.default)();
function postagensPopulares() {
    console.clear();
    console.log("---------------------------------------- POSTAGENS POPULARES ---------------------------------------\n");
    console.log("Relaciona as todas as postagens populares do Blog.\n");
    input("[enter]");
    let postagens = app_1.app.redeSocial.getPostagensPopulares();
    console.log("\nRESULTADO:\n");
    if (postagens.length == 0) {
        console.log("🚨 Não existem Postagens Populares.");
    }
    else {
        (0, funcoes_auxiliares_1.imprimirPostagens)(postagens);
    }
}
exports.postagensPopulares = postagensPopulares;
