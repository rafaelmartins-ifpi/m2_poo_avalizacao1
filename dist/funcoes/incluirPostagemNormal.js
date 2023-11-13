"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incluirPostagemNormal = void 0;
const class_postagem_1 = require("../classes/class_postagem");
const app_1 = require("../app");
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
function incluirPostagemNormal() {
    console.clear();
    console.log("---------------------------------------- INCLUIR POSTAGEM NORMAL ---------------------------------------\n");
    console.log("Insira o nome do perfil que deseja incluir a Postagem Normal:\n");
    let nome = (0, funcoes_auxiliares_1.inputString)("Nome: ");
    let perfilEncontrado = app_1.app.redeSocial.consultarPerfil(0, nome);
    console.log();
    if (perfilEncontrado) {
        let texto = (0, funcoes_auxiliares_1.inputString)("Texto da Postagem: ");
        let id = app_1.app.redeSocial.repositórioDePostagens.criarId();
        let postagem = new class_postagem_1.Postagem(id, texto, perfilEncontrado);
        app_1.app.redeSocial.repositórioDePostagens.incluir(postagem);
    }
    else {
        console.log("\n🚨 Perfil não localizado !");
    }
}
exports.incluirPostagemNormal = incluirPostagemNormal;
