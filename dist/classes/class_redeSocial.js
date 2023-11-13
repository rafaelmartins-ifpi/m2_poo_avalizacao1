"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedeSocial = void 0;
const class_repositorioPostagens_1 = require("./class_repositorioPostagens");
const class_repositorioPerfis_1 = require("./class_repositorioPerfis");
const class_postagemAvancada_1 = require("./class_postagemAvancada");
const app_1 = require("../app");
class RedeSocial {
    _repositórioDePostagens = new class_repositorioPostagens_1.RepositorioDePostagens;
    _repositorioDePerfis = new class_repositorioPerfis_1.RepositorioDePerfis;
    get repositórioDePostagens() {
        return this._repositórioDePostagens;
    }
    get repositorioDePerfis() {
        return this._repositorioDePerfis;
    }
    incluirPerfil(perfil) {
        this._repositorioDePerfis.incluir(perfil);
    }
    consultarPerfil(id = 0, nome, email) {
        let perfilEncontrado;
        perfilEncontrado = (this._repositorioDePerfis.consultar(id, nome, email));
        return perfilEncontrado;
    }
    incluirPostagem(postagem) {
        this._repositórioDePostagens.incluir(postagem);
    }
    consultarPostagens(id = 0, texto, hashtag, perfil) {
        let postagensEncontradas = this._repositórioDePostagens.consultar(id, texto, hashtag, perfil);
        if (postagensEncontradas) {
            for (let i = 0; i < postagensEncontradas.length; i++) {
                if (postagensEncontradas[i] instanceof class_postagemAvancada_1.PostagemAvancada) {
                    app_1.app.redeSocial.decrementarVisualizacoes(postagensEncontradas[i]);
                }
            }
        }
        return postagensEncontradas;
    }
    curtir(idPostagem) {
        let postagem = this._repositórioDePostagens.consultar(idPostagem);
        if (postagem) {
            postagem[0].curtir();
        }
    }
    descurtir(idPostagem) {
        let postagem = this._repositórioDePostagens.consultar(idPostagem);
        if (postagem) {
            postagem[0].descurtir();
        }
    }
    decrementarVisualizacoes(postagem) {
        postagem.decrementarVisualizacoes();
    }
    exibirPostagensPorPerfil(idPerfil) {
        let perfil = this.consultarPerfil(idPerfil);
        let postagensEncontradas = this._repositórioDePostagens.consultarPorPerfil(perfil);
        if (perfil) {
            for (let i = 0; i < postagensEncontradas.length; i++) {
                if (postagensEncontradas[i] instanceof class_postagemAvancada_1.PostagemAvancada) {
                    app_1.app.redeSocial.decrementarVisualizacoes(postagensEncontradas[i]);
                }
            }
        }
        return postagensEncontradas;
    }
    exibirPostagemPorHashtag(hashtag) {
        let postagensEncontradas = this._repositórioDePostagens.consultarPorHashtag(hashtag);
        if (postagensEncontradas) {
            for (let i = 0; i < postagensEncontradas.length; i++) {
                app_1.app.redeSocial.decrementarVisualizacoes(postagensEncontradas[i]);
            }
        }
        return postagensEncontradas;
    }
    getPostagensPopulares() {
        let postagensTotal = this._repositórioDePostagens.postagens;
        let postagensPopulares = [];
        for (let i = 0; i < postagensTotal.length; i++) {
            if (postagensTotal[i].ehPopular()) {
                postagensPopulares.push(postagensTotal[i]);
                if (postagensTotal[i] instanceof class_postagemAvancada_1.PostagemAvancada) {
                    app_1.app.redeSocial.decrementarVisualizacoes(postagensTotal[i]);
                }
            }
        }
        return postagensPopulares;
    }
    getHashtagsPopulares() {
        let totalHashtags = this._repositórioDePostagens.controleDeHashtags;
        let hashtagsOrdenadas = totalHashtags.sort((a, b) => {
            if (b[1] > a[1])
                return 1;
            if (b[1] > a[1])
                return -1;
            return 0;
        });
        /*teste SE NÃO DER CERTO, TENTAR DO JEITO ABAIXO
        data = [(0, 1), (2, 3), (4, -5), (6, -3)]
        data.sort(key=lambda x: x[1])
        >>> data
        [(4, -5), (6, -3), (0, 1), (2, 3)]
        */
        return hashtagsOrdenadas;
    }
}
exports.RedeSocial = RedeSocial;
