import {Postagem} from './class_postagem';
import {Perfil} from './class_perfil';
import { app } from '../app';


class PostagemAvancada extends Postagem{
    private _hashtags: string[];
    private _visualizacoesRestantes: number;

    constructor (id: number, texto: string, perfil: Perfil) {
        super (id, texto, perfil);
        this._hashtags = [];
        this._visualizacoesRestantes = 5;
    }

    get hashtags (): string[] {
        return this._hashtags;
    }

    get visualizacoesRestantes (): number {
        return this._visualizacoesRestantes;
    }

    adicionarHashtag (hashtag: string): void {
        if (this.existeHashtag(hashtag)){
            console.log("🚨 Hashtag já incluída !!");
        } else {
            this._hashtags.push(hashtag);
            app.redeSocial.repositórioDePostagens.atualizarControleHashtags(hashtag);
            //console.log ("✅");
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

