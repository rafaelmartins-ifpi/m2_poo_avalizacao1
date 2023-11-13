"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incluirPostagemEspecial = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const class_postagemAvancada_1 = require("../classes/class_postagemAvancada");
const app_1 = require("../app");
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
let input = (0, prompt_sync_1.default)();
function incluirPostagemEspecial() {
    console.clear();
    console.log("---------------------------------------- INCLUIR POSTAGEM ESPECIAL ---------------------------------------\n");
    console.log("ATENÇÃO: Nas Postagens Especiais é possível incluir #HashTags,");
    console.log("         Porém, são limitadas a 05 (cinco) visualizações\n");
    console.log("Insira o nome do perfil que deseja incluir a Postagem Especial:\n");
    let nome = (0, funcoes_auxiliares_1.inputString)("Nome: ");
    console.log();
    let perfilEncontrado = app_1.app.redeSocial.consultarPerfil(0, nome);
    if (perfilEncontrado) {
        let texto = (0, funcoes_auxiliares_1.inputString)("Texto da Postagem: ");
        let id = app_1.app.redeSocial.repositórioDePostagens.criarId();
        let postagem = new class_postagemAvancada_1.PostagemAvancada(id, texto, perfilEncontrado);
        console.log("\nAgora você pode incluir quantas #Hashtags quiser:");
        let hashtag = "";
        let repetir = "";
        do {
            console.log();
            hashtag = (0, funcoes_auxiliares_1.inputString)("#Hashtag: ");
            postagem.adicionarHashtag(hashtag);
            console.log();
            repetir = input("outra # ? [S/n] ");
        } while (repetir.toLowerCase() === "s");
        app_1.app.redeSocial.repositórioDePostagens.incluir(postagem);
    }
    else {
        console.log("🚨 Perfil não localizado !");
    }
}
exports.incluirPostagemEspecial = incluirPostagemEspecial;
