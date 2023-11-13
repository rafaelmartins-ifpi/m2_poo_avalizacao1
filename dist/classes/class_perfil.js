"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perfil = void 0;
class Perfil {
    _id;
    _nome;
    _email;
    _postagens = [];
    constructor(id, nome, email) {
        this._id = id;
        this._nome = nome;
        this._email = email;
    }
    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    get postagens() {
        return this._postagens;
    }
    vincularPostagem(postagem) {
        this._postagens.push(postagem);
    }
}
exports.Perfil = Perfil;
