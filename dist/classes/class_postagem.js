"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Postagem = void 0;
const funcoes_auxiliares_1 = require("../funcoes/funcoes_auxiliares");
class Postagem {
    _id;
    _texto;
    _curtidas;
    _descurtidas;
    _data;
    _perfil;
    constructor(id, texto, perfil) {
        this._id = id;
        this._texto = texto;
        this._perfil = perfil;
        this._curtidas = 0;
        this._descurtidas = 0;
        this._data = (0, funcoes_auxiliares_1.dataAtual)();
    }
    get id() {
        return this._id;
    }
    get texto() {
        return this._texto;
    }
    get curtidas() {
        return this._curtidas;
    }
    get descurtidas() {
        return this._descurtidas;
    }
    get data() {
        return this._data;
    }
    get perfil() {
        return this._perfil;
    }
    curtir() {
        this._curtidas += 1;
    }
    descurtir() {
        this._descurtidas += 1;
    }
    ehPopular() {
        return ((this._curtidas - this._descurtidas) / this._descurtidas) >= 0.5;
    }
}
exports.Postagem = Postagem;
