import { RepositorioDePostagens } from "./class_repositorioPostagens";
import { RepositorioDePerfis } from "./class_repositorioPerfis";
import { Perfil } from "./class_perfil";
import { Postagem } from "./class_postagem";
import { PostagemAvancada } from "./class_postagemAvancada";
import { app } from "../app";

class RedeSocial {
    private _repositórioDePostagens: RepositorioDePostagens = new RepositorioDePostagens;
    private _repositorioDePerfis: RepositorioDePerfis = new RepositorioDePerfis;

    get repositórioDePostagens (): RepositorioDePostagens {
        return this._repositórioDePostagens;
    }

    get repositorioDePerfis (): RepositorioDePerfis {
        return this._repositorioDePerfis;
    }

    incluirPerfil (perfil: Perfil): void {
        this._repositorioDePerfis.incluir(perfil);
    } 

    consultarPerfil (id: number = 0, nome?: string, email?: string): Perfil {
        let perfilEncontrado !: Perfil;
        perfilEncontrado = (this._repositorioDePerfis.consultar(id, nome, email));

        return perfilEncontrado;
    }

    incluirPostagem (postagem: Postagem): void {
        this._repositórioDePostagens.incluir(postagem);
    }

    consultarPostagens (id: number = 0, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] | null {
        let postagensEncontradas: Postagem[] | null = this._repositórioDePostagens.consultar(id, texto, hashtag, perfil);
        
        if (postagensEncontradas) {
            for (let i = 0; i< postagensEncontradas.length; i++) {
                if (postagensEncontradas[i] instanceof PostagemAvancada){
                    app.redeSocial.decrementarVisualizacoes(<PostagemAvancada>postagensEncontradas[i])
                }
            }
        }
       
        return postagensEncontradas;
    }

    curtir (idPostagem: number): void {
        let postagem: Postagem[] | null = this._repositórioDePostagens.consultar(idPostagem);
        if (postagem){
            postagem[0].curtir();
        }
    }

    descurtir (idPostagem: number): void {
        let postagem: Postagem[] | null = this._repositórioDePostagens.consultar(idPostagem);
        if (postagem) {
        postagem[0].descurtir();
        }
    }

    decrementarVisualizacoes (postagem: PostagemAvancada): void {
        postagem.decrementarVisualizacoes();
    }

    exibirPostagensPorPerfil (idPerfil: number): Postagem[] {
        let perfil: Perfil = this.consultarPerfil(idPerfil);
        let postagensEncontradas: Postagem[] = this._repositórioDePostagens.consultarPorPerfil(perfil);


        if (perfil) {
            for (let i = 0; i < postagensEncontradas.length; i++) {
                if (postagensEncontradas[i] instanceof PostagemAvancada) {
                    app.redeSocial.decrementarVisualizacoes(<PostagemAvancada>postagensEncontradas[i]);
                }
            }
        }

        return postagensEncontradas
    }

    exibirPostagemPorHashtag (hashtag: string): PostagemAvancada[] {
        let postagensEncontradas = this._repositórioDePostagens.consultarPorHashtag (hashtag);
        
        if (postagensEncontradas) {
            for (let i = 0; i < postagensEncontradas.length; i++) {
                app.redeSocial.decrementarVisualizacoes(postagensEncontradas[i])
            }
        }
        return postagensEncontradas;
    }

    getPostagensPopulares (): Postagem[] {
        let postagensTotal: Postagem[] = app.redeSocial.repositórioDePostagens.postagens;
        let postagensPopulares: Postagem[] = [];

        for (let i = 0; i < postagensTotal.length; i++){
            if (postagensTotal[i].ehPopular()) {
                if (!(postagensTotal[i] instanceof PostagemAvancada)) {
                    postagensPopulares.push (postagensTotal[i]);
                } else if ((<PostagemAvancada>postagensTotal[i]).visualizacoesRestantes > 0) {
                    app.redeSocial.decrementarVisualizacoes(<PostagemAvancada>postagensTotal[i]);
                    postagensPopulares.push (postagensTotal[i]);  
                }
            }
        }
    
        return postagensPopulares;
    }

    getHashtagsPopulares (): [string, number][] {
        let totalHashtags = this._repositórioDePostagens.controleDeHashtags;
        let hashtagsOrdenadas: [string, number] [] = totalHashtags.sort((a,b) => b[1] - a[1])
        
        while (hashtagsOrdenadas.length > 5) {
            hashtagsOrdenadas.pop();
        }

        return hashtagsOrdenadas
    }

}

export {RedeSocial}