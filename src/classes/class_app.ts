import { RedeSocial } from "./class_redeSocial";


class App {
    private _redeSocial: RedeSocial = new RedeSocial();
    
    get redeSocial (): RedeSocial {
        return this._redeSocial;
    }

    mostrarMenu (): void {
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

export {App}