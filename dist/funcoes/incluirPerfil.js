"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incluirPerfil = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const funcoes_auxiliares_1 = require("./funcoes_auxiliares");
const app_1 = require("../app");
const class_perfil_1 = require("../classes/class_perfil");
let input = (0, prompt_sync_1.default)();
function incluirPerfil() {
    console.clear();
    console.log("---------------------------------------- INCLUIR PERFIL ---------------------------------------\n");
    console.log("Insira os dados solicitados para criar um perfil:");
    console.log("[Nome, E-mail]\n");
    let id = app_1.app.redeSocial.repositorioDePerfis.criarId();
    let nome = (0, funcoes_auxiliares_1.inputString)("Nome: ");
    let email = (0, funcoes_auxiliares_1.inputString)("E-mail: ");
    let perfil = new class_perfil_1.Perfil(id, nome, email);
    app_1.app.redeSocial.incluirPerfil(perfil);
}
exports.incluirPerfil = incluirPerfil;
