import { Postagem } from '../classes/class_postagem';
import { app } from '../app';
import { inputString } from './funcoes_auxiliares';




function incluirPostagemNormal(): void {
    console.clear();
    console.log("---- INCLUIR POSTAGEM NORMAL ---- \n");
    console.log("Insira o nome do perfil que deseja incluir a Postagem Normal:");
    let nome: string = inputString("Nome: ");
    let perfilEncontrado = app.redeSocial.consultarPerfil(0, nome);
    console.log();

    if (perfilEncontrado) {
        let texto: string = inputString("Texto da Postagem: ");
        let id: number = app.redeSocial.repositórioDePostagens.criarId();
        let postagem: Postagem = new Postagem (id, texto, perfilEncontrado);
        app.redeSocial.repositórioDePostagens.incluir(postagem);
    } else {
        console.log ("\nVocê pode fazer uma consulta no Menu Principal, Opção [2]");
        console.log("Ou verificar no Relatório de Perfis, Opção [8]");
    }
}

export {incluirPostagemNormal}