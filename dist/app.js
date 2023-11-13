"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const class_app_1 = require("../src/classes/class_app");
const funcoes_auxiliares_1 = require("./funcoes/funcoes_auxiliares");
const incluirPerfil_1 = require("./funcoes/incluirPerfil");
const consultarPerfil_1 = require("./funcoes/consultarPerfil");
const incluirPostagem_1 = require("./funcoes/incluirPostagem");
const consultarPostagem_1 = require("./funcoes/consultarPostagem");
const curtir_1 = require("./funcoes/curtir");
const descurtir_1 = require("./funcoes/descurtir");
const decrementarVisualizacoes_1 = require("./funcoes/decrementarVisualizacoes");
const exibirPostagem_1 = require("./funcoes/exibirPostagem");
const postagensPopulares_1 = require("./funcoes/postagensPopulares");
const hashtagsPopulares_1 = require("./funcoes/hashtagsPopulares");
let input = (0, prompt_sync_1.default)();
let app = new class_app_1.App();
exports.app = app;
function main() {
    let opcao = "";
    do {
        console.clear();
        app.mostrarMenu();
        opcao = input("Opção: ");
        switch (opcao) {
            case "1":
                (0, funcoes_auxiliares_1.loppFunction)(incluirPerfil_1.incluirPerfil, "Deseja incluir outro Perfil ?");
                break;
            case "2":
                (0, funcoes_auxiliares_1.loppFunction)(consultarPerfil_1.consultarPerfil, "Deseja consultar outro Perfil ?");
                break;
            case "3":
                (0, funcoes_auxiliares_1.loppFunction)(incluirPostagem_1.incluirPostagem, "Deseja incluir outra Postagem ?");
                break;
            case "4":
                (0, funcoes_auxiliares_1.loppFunction)(consultarPostagem_1.consultarPostagens, "Deseja consultar outra Postagem ?");
                break;
            case "5":
                (0, funcoes_auxiliares_1.loppFunction)(curtir_1.curtir, "Deseja curtir outra postagem ?");
                break;
            case "6":
                (0, funcoes_auxiliares_1.loppFunction)(descurtir_1.descurtir, "Deseja descurtir outra mensagem ?");
                break;
            case "7":
                (0, funcoes_auxiliares_1.loppFunction)(decrementarVisualizacoes_1.decrementarVisualizacoes, "Deseja Decrementar Visualização de outra Postagem Especial ?");
                break;
            case "8":
                (0, funcoes_auxiliares_1.loppFunction)(exibirPostagem_1.exibirPostagem, "Deseja realizar nova exibição ?");
                break;
            case "9":
                (0, funcoes_auxiliares_1.loppFunction)(postagensPopulares_1.postagensPopulares, "Deseja exibir novamente ?");
                break;
            case "10":
                (0, funcoes_auxiliares_1.loppFunction)(hashtagsPopulares_1.hashtagsPopulares, "Deseja exibir novamente ?");
                break;
            case "0":
                break;
            default:
                input("\nOpção Inválida !! \n [enter]");
                break;
        }
    } while (opcao != "0");
    input("\nAplicação encerrada !! \n[enter]");
}
main();
