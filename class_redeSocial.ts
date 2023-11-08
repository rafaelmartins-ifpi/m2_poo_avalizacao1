import { RepositorioDePostagens } from "./class_repositorioPostagens";
import { RepositorioDePerfis } from "./class_repositorioPerfis";
import { Perfil } from "./class_perfil";
import { Postagem } from "./class_postagem";
import { PostagemAvancada } from "./class_postagemAvancada";

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

    consultarPerfil (id: number = 0, nome?: string, email?: string): Perfil[] | null {
        let perfisEncontrados: Perfil[] | null;
        perfisEncontrados = (this._repositorioDePerfis.consultar(id, nome, email));

        return perfisEncontrados;
    }

    incluirPostagem (postagem: Postagem): void {
        this._repositórioDePostagens.incluir(postagem);
    }

    consultarPostagens (id: number = 0, texto?: string, hashtag?: string, perfil?: Perfil): Postagem[] | null {
        let postagensEncontradas: Postagem[] | null;
        postagensEncontradas = this._repositórioDePostagens.consultar(id, texto, hashtag, perfil);
        return postagensEncontradas;
    }

    curtir (idPostagem: number): void {
        let postagem: Postagem = this._repositórioDePostagens.consultarPorId(idPostagem);
        postagem.curtir();
    }

    descurtir (idPostagem: number): void {
        let postagem: Postagem = this._repositórioDePostagens.consultarPorId(idPostagem);
        postagem.descurtir();
    }

    decrementarVisualizacoes (postagem: PostagemAvancada): void {
        postagem.decrementarVisualizacoes();
    }

    exibirPostagensPorPerfil (idPerfil: number): Postagem[] {
        let postagensEncontradas !: Postagem[];
        let perfil: Perfil = this._repositorioDePerfis.consultarPorId(idPerfil);

        for (let i = 0; i < perfil.postagens.length; i++){
            if (perfil.postagens[i] instanceof PostagemAvancada) {
                if ((<PostagemAvancada>perfil.postagens[i]).visualizacoesRestantes > 0) {
                    postagensEncontradas.push(perfil.postagens[i]);
                    this.decrementarVisualizacoes(<PostagemAvancada>perfil.postagens[i]);
                }
            }else {
                postagensEncontradas.push(perfil.postagens[i]);     
            }
        }

        return postagensEncontradas;
    }

    exibirPostagemPorHashtag (hashtag: string): PostagemAvancada[] {
        let postagensEncontradas: PostagemAvancada[] = this._repositórioDePostagens.consultarPorHashtag(hashtag);
        
        for (let i = 0; i < postagensEncontradas.length; i++) {
            this.decrementarVisualizacoes(postagensEncontradas[i]);
        }

        return postagensEncontradas;
    }

}

export {RedeSocial}