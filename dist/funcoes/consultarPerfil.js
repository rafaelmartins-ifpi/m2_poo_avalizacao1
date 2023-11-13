"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultarPerfil = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const app_1 = require("../app");
let input = (0, prompt_sync_1.default)();
function consultarPerfil() {
    console.clear();
    console.log("---------------------------------------- CONSULTAR PERFIL ---------------------------------------\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Nome, E-mail]\n");
    let id = Number(input("Id: "));
    let nome = input("Nome: ");
    let email = input("E-mail: ");
    console.log("\nRESULTADO: \n");
    let perfilEncontrado = app_1.app.redeSocial.consultarPerfil(id, nome, email);
    if (perfilEncontrado) {
        console.log(`Id: ${perfilEncontrado.id} \n`);
        console.log(`Nome: ${perfilEncontrado.nome} \n`);
        console.log(`E-mail: ${perfilEncontrado.email} \n`);
    }
    else {
        console.log("🚨 Não foi possível especificar o perfil !!");
        console.log("🚨 Confira os dados inseridos. (Tente consultar com apenas 1 parâmetro.)");
    }
}
exports.consultarPerfil = consultarPerfil;
