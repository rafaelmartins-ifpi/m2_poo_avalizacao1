import { Perfil } from "./class_perfil";
import { Postagem } from "./class_postagem";
import { PostagemAvancada } from "./class_postagemavancada";

class RepositorioDePostagens {
    private _postagens: Postagem[];
    private _contIdPostagem: number;

    constructor () {
        this._postagens = [];
        this._contIdPostagem = 1;
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
                postagemEncontraga = this._postagens[i];
                break;
            }
        }

        return postagemEncontraga;
    }

    consultarPorTexto (texto: string): Postagem {
        let postagemEncontraga!: Postagem;

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i].texto == texto) {
                postagemEncontraga = this._postagens[i];
                break;
            }
        }

        return postagemEncontraga;
    }

    consultarPorPerfil (perfil: Perfil): Postagem {
        let postagemEncontraga!: Postagem;

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i].perfil == perfil) {
                postagemEncontraga = this._postagens[i];
                break;
            }
        }

        return postagemEncontraga;
    }

    consultarPorHashtag (hashtag: string): PostagemAvancada[] {
        let postagensEncontraga!: PostagemAvancada[];

        for (let i = 0; i < this._postagens.length; i++){
            if (this._postagens[i] instanceof PostagemAvancada){
                if ((<PostagemAvancada>this._postagens[i]).existeHashtag(hashtag)){
                    postagensEncontraga.push(<PostagemAvancada>this._postagens[i]);
                }
            }
        }

        return postagensEncontraga;
    }

    consultar (id: number = 0, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] | null {
        let postagensEnconstradas: Postagem[] | null = [];

        if (id) {
            if (this.consultarPorId(id)){
                let jaInserido: boolean = false;

                for (let i = 0; i < postagensEnconstradas.length; i++){
                    if (postagensEnconstradas[i].id == id){
                        jaInserido = true;
                        break;
                    }
                }

                if (jaInserido == false) {
                    postagensEnconstradas.push(this.consultarPorId(id));
                }
            }
        }

        if (texto) {
            if (this.consultarPorTexto(texto)){
                let jaInserido: boolean = false;

                for (let i = 0; i < postagensEnconstradas.length; i++){
                    if (postagensEnconstradas[i].texto == texto){
                        jaInserido = true;
                        break;
                    }
                }

                if (jaInserido == false) {
                    postagensEnconstradas.push(this.consultarPorTexto(texto));
                }
            }
        }

        if (perfil) {
            if (this.consultarPorPerfil(perfil)){
                let jaInserido: boolean = false;

                for (let i = 0; i < postagensEnconstradas.length; i++){
                    if (postagensEnconstradas[i].perfil == perfil){
                        jaInserido = true;
                        break;
                    }
                }

                if (jaInserido == false) {
                    postagensEnconstradas.push(this.consultarPorPerfil(perfil));
                }
            }
        }

        if (hashtag) {
            if(this.consultarPorHashtag(hashtag)){
                let jaInserido: boolean = false;
                let encontradas: Postagem[] = this.consultarPorHashtag(hashtag);

                for (let i = 0; i < encontradas.length; i++){
                    for (let j = 0; j > postagensEnconstradas.length; j++){
                        if (postagensEnconstradas[j] == encontradas[i]) {
                            jaInserido = true;
                            break;
                        } 
                    }

                    if (jaInserido == false) {
                        postagensEnconstradas.push(encontradas[i]);
                        jaInserido = false;
                    }
                }
            }
        }

        return postagensEnconstradas;
    }

    incluir (postagem: Postagem): void {
        
        if (!this.consultarPorId(postagem.id)){
            this._postagens.push(postagem);
            postagem.perfil.vincularPostagem(postagem);
            console.log ("Postagem inserida com sucesso !!");
        } else {
            console.log (`Postagem com ID ${postagem.id} já existe no cadastro !!`);
        }
    }
}

export {RepositorioDePostagens};
