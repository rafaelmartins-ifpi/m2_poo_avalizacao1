"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePostagens = void 0;
const class_postagemAvancada_1 = require("./class_postagemAvancada");
class RepositorioDePostagens {
    _postagens;
    _contIdPostagem;
    _controleDeHashtags;
    constructor() {
        this._postagens = [];
        this._contIdPostagem = 1;
        this._controleDeHashtags = [];
    }
    get controleDeHashtags() {
        return this._controleDeHashtags;
    }
    get postagens() {
        return this._postagens;
    }
    get contIdPostagem() {
        return this._contIdPostagem;
    }
    criarId() {
        return this._contIdPostagem++;
    }
    consultarPorId(id) {
        let postagemEncontraga;
        for (let i = 0; i < this._postagens.length; i++) {
            if (this._postagens[i].id == id) {
                if (!(this._postagens[i] instanceof class_postagemAvancada_1.PostagemAvancada) || this._postagens[i].visualizacoesRestantes > 0) {
                    postagemEncontraga = this._postagens[i];
                    break;
                }
            }
        }
        return postagemEncontraga;
    }
    consultarPorTexto(texto) {
        let postagemEncontraga;
        for (let i = 0; i < this._postagens.length; i++) {
            if (this._postagens[i].texto == texto) {
                if (!(this._postagens[i] instanceof class_postagemAvancada_1.PostagemAvancada) || this._postagens[i].visualizacoesRestantes > 0) {
                    postagemEncontraga = this._postagens[i];
                    break;
                }
            }
        }
        return postagemEncontraga;
    }
    consultarPorPerfil(perfil) {
        let postagensEncontragas = [];
        for (let i = 0; i < this._postagens.length; i++) {
            if (this._postagens[i].perfil == perfil) {
                if (!(this._postagens[i] instanceof class_postagemAvancada_1.PostagemAvancada) || this._postagens[i].visualizacoesRestantes > 0) {
                    postagensEncontragas.push(this._postagens[i]);
                }
            }
        }
        return postagensEncontragas;
    }
    consultarPorHashtag(hashtag) {
        let postagensEncontradas = [];
        for (let i = 0; i < this._postagens.length; i++) {
            if (this._postagens[i] instanceof class_postagemAvancada_1.PostagemAvancada) {
                if (this._postagens[i].existeHashtag(hashtag)) {
                    if (this._postagens[i].visualizacoesRestantes > 0) {
                        postagensEncontradas.push(this._postagens[i]);
                    }
                }
            }
        }
        return postagensEncontradas;
    }
    consultar(id = 0, texto, hashtag, perfil) {
        let postagensEnconstradas = [];
        if (id) {
            let encontrada = this.consultarPorId(id);
            if (encontrada) {
                let jaInserido = false;
                for (let i = 0; i < postagensEnconstradas.length; i++) {
                    if (postagensEnconstradas[i].id == id) {
                        jaInserido = true;
                        break;
                    }
                }
                if (jaInserido == false) {
                    postagensEnconstradas.push(encontrada);
                }
            }
        }
        if (texto) {
            let encontrada = this.consultarPorTexto(texto);
            if (encontrada) {
                let jaInserido = false;
                for (let i = 0; i < postagensEnconstradas.length; i++) {
                    if (postagensEnconstradas[i].id == encontrada.id) {
                        jaInserido = true;
                        break;
                    }
                }
                if (jaInserido == false) {
                    postagensEnconstradas.push(encontrada);
                }
            }
        }
        if (perfil) {
            let encontradas = this.consultarPorPerfil(perfil);
            if (encontradas.length != 0) {
                let jaInserido = false;
                for (let i = 0; i < encontradas.length; i++) {
                    for (let j = 0; j < postagensEnconstradas.length; j++) {
                        if (encontradas[i].id == postagensEnconstradas[j].id) {
                            jaInserido = true;
                            break;
                        }
                    }
                    if (jaInserido == false) {
                        postagensEnconstradas.push(encontradas[i]);
                    }
                    jaInserido = false;
                }
            }
        }
        if (hashtag) {
            let encontradas = this.consultarPorHashtag(hashtag);
            if (encontradas.length != 0) {
                let jaInserido = false;
                for (let i = 0; i < encontradas.length; i++) {
                    for (let j = 0; j > postagensEnconstradas.length; j++) {
                        if (encontradas[i].id == postagensEnconstradas[j].id) {
                            jaInserido = true;
                            break;
                        }
                    }
                    if (jaInserido == false) {
                        postagensEnconstradas.push(encontradas[i]);
                    }
                    jaInserido = false;
                }
            }
        }
        if (postagensEnconstradas.length == 0) {
            postagensEnconstradas = null;
        }
        return postagensEnconstradas;
    }
    incluir(postagem) {
        if (!this.consultarPorId(postagem.id)) {
            this._postagens.push(postagem);
            postagem.perfil.vincularPostagem(postagem);
            console.log("\n✅ Postagem inserida com sucesso !!");
        }
        else {
            console.log(`🚨 Postagem com ID ${postagem.id} já existe no cadastro !!`);
        }
    }
    atualizarControleHashtags(hashtag) {
        for (let i = 0; i < this._controleDeHashtags.length; i++) {
            if (hashtag == this._controleDeHashtags[i][0]) {
                this._controleDeHashtags[i][1] += 1;
            }
            else {
                this._controleDeHashtags.push([hashtag, 1]);
            }
        }
    }
}
exports.RepositorioDePostagens = RepositorioDePostagens;
