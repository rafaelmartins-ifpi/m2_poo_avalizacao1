import { Perfil } from "./class_perfil";
import { Postagem } from "./class_postagem";
import { PostagemAvancada } from "./class_postagemAvancada";

class RepositorioDePostagens {
    private _postagens: Postagem[];
    private _contIdPostagem: number;
    private _controleDeHashtags: [string, number] [];

    constructor () {
        this._postagens = [];
        this._contIdPostagem = 1;
        this._controleDeHashtags = [];
    }

    get controleDeHashtags(): [string,number] [] {
        return this._controleDeHashtags;
    }

    get postagens (): Postagem[] {
        return this._postagens;
    }

    get contIdPostagem (): number {
        return this._contIdPostagem;
    }

    criarId (): number {
        return this._contIdPostagem++;
    }

    consultarPorId (id: number): Postagem {
        let postagemEncontraga!: Postagem;

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i].id == id) {
                if (!(this._postagens[i] instanceof PostagemAvancada) || (<PostagemAvancada>this._postagens[i]).visualizacoesRestantes > 0){
                    postagemEncontraga = this._postagens[i];
                    break;
                }
            }
        }

        return postagemEncontraga;
    }

    consultarPorTexto (texto: string): Postagem {
        let postagemEncontraga!: Postagem;

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i].texto == texto) {
                if (!(this._postagens[i] instanceof PostagemAvancada) || (<PostagemAvancada>this._postagens[i]).visualizacoesRestantes > 0){
                    postagemEncontraga = this._postagens[i];
                    break;
                }
            }
        }

        return postagemEncontraga;
    }

    consultarPorPerfil (perfil: Perfil): Postagem[] {
        let postagensEncontragas: Postagem[] = [];

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i].perfil == perfil) {
                if (!(this._postagens[i] instanceof PostagemAvancada) || (<PostagemAvancada>this._postagens[i]).visualizacoesRestantes > 0) {
                    postagensEncontragas.push(this._postagens[i]);
                }
            }
        }

        return postagensEncontragas;
    }

    consultarPorHashtag (hashtag: string): PostagemAvancada[] {
        let postagensEncontradas: PostagemAvancada[] = [];

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i] instanceof PostagemAvancada){
                if ((<PostagemAvancada>this._postagens[i]).existeHashtag(hashtag)){
                    if ((<PostagemAvancada>this._postagens[i]).visualizacoesRestantes > 0){
                        postagensEncontradas.push(<PostagemAvancada>this._postagens[i]);
                    }
                }
            }
        }

        return postagensEncontradas;
    }

    consultar (id: number = 0, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] | null {
        let postagensEnconstradas: Postagem[] | null = [];
    
        if (id) {
            let encontrada = this.consultarPorId(id);
            if (encontrada){
                let jaInserido: boolean = false;

                for (let i = 0; i < postagensEnconstradas.length; i++){
                    if (postagensEnconstradas[i].id == id){
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
            if (encontrada){
                let jaInserido: boolean = false;

                for (let i = 0; i < postagensEnconstradas.length; i++){
                    if (postagensEnconstradas[i].id == encontrada.id){
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
            if (encontradas.length != 0){
                let jaInserido: boolean = false;

                for (let i = 0; i < encontradas.length; i++){
                    for (let j = 0; j < postagensEnconstradas.length; j++){
                        if (encontradas[i].id == postagensEnconstradas[j].id){
                            jaInserido = true;
                            break
                        }
                    }

                    if (jaInserido == false){
                        postagensEnconstradas.push(encontradas[i]);
                    }
                    jaInserido = false;
                }
            }
        }

        if (hashtag) {
            let encontradas = this.consultarPorHashtag(hashtag);

            if(encontradas.length != 0){
                let jaInserido: boolean = false;
                for (let i = 0; i < encontradas.length; i++){
                    for (let j = 0; j > postagensEnconstradas.length; j++){
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
            console.log("🚨 Nenhuma Postagem foi encontrada !!");
            postagensEnconstradas = null;
        }

        return postagensEnconstradas;
    }

    incluir (postagem: Postagem): void {
        
        if (!this.consultarPorId(postagem.id)){
            this._postagens.push(postagem);
            postagem.perfil.vincularPostagem(postagem);
            console.log ("\n✅ Postagem inserida com sucesso !!");
        } else {
            console.log (`🚨 Postagem com ID ${postagem.id} já existe no cadastro !!`);
        }
    }

    atualizarControleHashtags (hashtag: string): void {
        for (let i = 0; i < this._controleDeHashtags.length; i++) {
            if (hashtag == this._controleDeHashtags[i][0]) {
                this._controleDeHashtags[i][1] += 1;
            } else {
                this._controleDeHashtags.push([hashtag, 1]);
            }
        }
    }
}

export {RepositorioDePostagens};
