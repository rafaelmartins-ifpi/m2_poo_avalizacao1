"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarPostagens = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
const app_1 = require("../app");
let input = (0, prompt_sync_1.default)();
function consultarPostagens() {
    console.clear();
    console.log("---------------------------------------- CONSULTAR POSTAGENS ---------------------------------------\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Texto, #HashTag, Perfil]\n");
    let id = Number(input("Id: "));
    let texto = input("Texto da Postagem: ");
    let hashtag = input("#HashTag: ");
    let nome = input("Nome do Perfil: ");
    let perfil = app_1.app.redeSocial.consultarPerfil(0, nome);
    console.log("\nRESULTADO: \n");
    let postagensEncontradas = app_1.app.redeSocial.consultarPostagens(id, texto, hashtag, perfil);
    if (postagensEncontradas) {
        (0, funcoes_auxiliares_1.imprimirPostagens)(postagensEncontradas);
    }
    else {
        console.log("🚨 Não foram encontradas Postagens !!");
    }
}
exports.consultarPostagens = consultarPostagens;
