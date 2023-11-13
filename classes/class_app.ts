import { RedeSocial } from "./class_redeSocial";


class App {
    private _redeSocial: RedeSocial = new RedeSocial();
    
    get redeSocial (): RedeSocial {
        return this._redeSocial;
    }

    mostrarMenu (): void {
        console.clear();
        console.log("Ecolha uma Opção:\n");
        console.log("[1] Incluir Perfil            [2] Consultar Perfil       [3] Incluir Postagem");
        console.log("[4] Consultar Postagens       [5] Curtir                 [6] Descurtir");
        console.log("[7] Decrementar Visualizações [8] Exibir Postagens       [9] Relatórios");
        console.log();
    }
}

export {App}