"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostagemAvancada = void 0;
const class_postagem_1 = require("./class_postagem");
const app_1 = require("../app");
class PostagemAvancada extends class_postagem_1.Postagem {
    _hashtags;
    _visualizacoesRestantes;
    _visualizacoesTotal;
    constructor(id, texto, perfil) {
        super(id, texto, perfil);
        this._hashtags = [];
        this._visualizacoesRestantes = 10;
        this._visualizacoesTotal = 10;
    }
    get visualizacoesTotal() {
        return this._visualizacoesTotal;
    }
    get hashtags() {
        return this._hashtags;
    }
    get visualizacoesRestantes() {
        return this._visualizacoesRestantes;
    }
    adicionarHashtag(hashtag) {
        if (this.existeHashtag(hashtag)) {
            console.log("🚨 Hashtag já incluída !!");
        }
        else {
            this._hashtags.push(hashtag);
            app_1.app.redeSocial.repositórioDePostagens.atualizarControleHashtags(hashtag);
            //console.log ("✅");
        }
    }
    existeHashtag(hashtag) {
        for (let i = 0; i < this._hashtags.length; i++) {
            if (this._hashtags[i] == hashtag) {
                return true;
            }
        }
        return false;
    }
    decrementarVisualizacoes() {
        if (this._visualizacoesRestantes >= 1) {
            this._visualizacoesRestantes -= 1;
        }
    }
}
exports.PostagemAvancada = PostagemAvancada;
