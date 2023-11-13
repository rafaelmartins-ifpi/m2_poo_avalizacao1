"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const class_redeSocial_1 = require("./class_redeSocial");
class App {
    _redeSocial = new class_redeSocial_1.RedeSocial();
    get redeSocial() {
        return this._redeSocial;
    }
    mostrarMenu() {
        console.clear();
        console.log("                      ____   _        ____    _____");
        console.log("                     |  _ \\ | |      / __ \\  / ____|");
        console.log("                     | |_) || |     | |  | || |  __");
        console.log("                     |  _ < | |     | |  | || | |_ |");
        console.log("                     | |_) || |____ | |__| || |__| |");
        console.log("                     |____/ |______| \\____/  \\_____|");
        console.log();
        console.log();
        console.log("[1] Incluir Perfil            [2] Consultar Perfil       [3] Incluir Postagem");
        console.log("[4] Consultar Postagens       [5] Curtir                 [6] Descurtir");
        console.log("[7] Decrementar Visualizações [8] Exibir Postagens       [9] Postagens Populares");
        console.log("[10] HashTags Populares       [11] ");
        console.log();
    }
}
exports.App = App;
