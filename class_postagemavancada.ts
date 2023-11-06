import {Postagem} from './class_postagem';
import {Perfil} from './class_perfil';


class PostagemAvancada extends Postagem{
    private _hashtags: string[];
    private _visualizacoesRestantes: number;

    constructor (id: number, texto: string, perfil: Perfil) {
        super (id, texto, perfil);
        this._hashtags = [];
        this._visualizacoesRestantes = 10;
    }

    get hashtags (): string[] {
        return this._hashtags;
    }

    get visualizacoesRestantes (): number {
        return this._visualizacoesRestantes;
    }

    adicionarHashtag (hashtag: string): [boolean, string] {
        if (this.existeHashtag(hashtag)){
            return [false, "Essa hashtag já existe !!"];
        } else {
            this._hashtags.push(hashtag);
            return [true, "Hashtag incluída com sucesso"];
        }
    }

    existeHashtag (hashtag: string): boolean {
        for (let i: number = 0; i < this._hashtags.length; i++){
            if (this._hashtags[i] == hashtag){
                return true;
            }
        }
        return false;
    }

    decrementarVisualizacoes (): void {
        if (this._visualizacoesRestantes >= 1) {
            this._visualizacoesRestantes -= 1;
        }
    }
}

export {PostagemAvancada};

