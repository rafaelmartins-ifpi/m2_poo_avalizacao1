"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositorioDePerfis = void 0;
class RepositorioDePerfis {
    _perfis;
    _contIdPerfil;
    constructor() {
        this._perfis = [];
        this._contIdPerfil = 1;
    }
    get perfis() {
        return this._perfis;
    }
    get contIdPerfil() {
        return this._contIdPerfil++;
    }
    criarId() {
        return this._contIdPerfil++;
    }
    consultarPorId(id) {
        let perfilEncontrado;
        for (let i = 0; i < this._perfis.length; i++) {
            if (this._perfis[i].id == id) {
                perfilEncontrado = this._perfis[i];
                break;
            }
        }
        return perfilEncontrado;
    }
    consultarPorNome(nome) {
        let perfilEncontrado;
        for (let i = 0; i < this._perfis.length; i++) {
            if ((this._perfis[i].nome).toLowerCase() == nome.toLowerCase()) {
                perfilEncontrado = this._perfis[i];
                break;
            }
        }
        return perfilEncontrado;
    }
    consultarPorEmail(email) {
        let perfilEncontrado;
        for (let i = 0; i < this._perfis.length; i++) {
            if (this._perfis[i].email == email) {
                perfilEncontrado = this._perfis[i];
                break;
            }
        }
        return perfilEncontrado;
    }
    incluir(perfil) {
        if (!this.consultarPorEmail(perfil.email) && !this.consultarPorId(perfil.id) && !this.consultarPorNome(perfil.nome)) {
            this._perfis.push(perfil);
            console.log("\n✅ Perfil incluído com sucesso !!");
        }
        else {
            if (this.consultarPorEmail(perfil.email)) {
                console.log(`\n🚨 E-mail ${perfil.email} já existe no cadastro !!`);
            }
            if (this.consultarPorId(perfil.id)) {
                console.log(`\n🚨 ID ${perfil.id} já existe no cadastro !!`);
            }
            if (this.consultarPorNome(perfil.nome)) {
                console.log(`\n🚨 Usuário(a) ${perfil.nome} já está cadastrado(a) !!`);
            }
        }
    }
    consultar(id = 0, nome, email) {
        let perfisEncontrados = [];
        let perfilEncontrado;
        if (id) {
            if (this.consultarPorId(id)) {
                let jaInserido = false;
                for (let i = 0; i < perfisEncontrados.length; i++) {
                    if (perfisEncontrados[i].id == id) {
                        jaInserido = true;
                        break;
                    }
                }
                if (jaInserido == false) {
                    perfisEncontrados.push(this.consultarPorId(id));
                }
            }
        }
        if (nome) {
            if (this.consultarPorNome(nome)) {
                let jaInserido = false;
                for (let i = 0; i < perfisEncontrados.length; i++) {
                    if ((perfisEncontrados[i].nome).toLowerCase() == nome.toLowerCase()) {
                        jaInserido = true;
                        break;
                    }
                }
                if (jaInserido == false) {
                    perfisEncontrados.push(this.consultarPorNome(nome));
                }
            }
        }
        if (email) {
            if (this.consultarPorEmail(email)) {
                let jaInserido = false;
                for (let i = 0; i < perfisEncontrados.length; i++) {
                    if (perfisEncontrados[i].email == email) {
                        jaInserido = true;
                        break;
                    }
                }
                if (jaInserido == false) {
                    perfisEncontrados.push(this.consultarPorEmail(email));
                }
            }
        }
        if (perfisEncontrados.length == 1) {
            perfilEncontrado = perfisEncontrados[0];
        }
        return perfilEncontrado;
    }
}
exports.RepositorioDePerfis = RepositorioDePerfis;
