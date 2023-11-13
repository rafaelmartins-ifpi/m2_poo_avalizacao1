import { Postagem } from '../classes/class_postagem';
import { app } from '../app';
import { inputString } from './funcoes_auxiliares';




function incluirPostagemNormal(): void {
    console.clear();
    console.log("---------------------------------------- INCLUIR POSTAGEM NORMAL ---------------------------------------\n");
    console.log("Insira o nome do perfil que deseja incluir a Postagem Normal:\n");
    let nome: string = inputString("Nome: ");
    let perfilEncontrado = app.redeSocial.consultarPerfil(0, nome);
    console.log();

    if (perfilEncontrado) {
        let texto: string = inputString("Texto da Postagem: ");
        let id: number = app.redeSocial.repositórioDePostagens.criarId();
        let postagem: Postagem = new Postagem (id, texto, perfilEncontrado);
        app.redeSocial.repositórioDePostagens.incluir(postagem);
    } else {
        console.log ("\n🚨 Perfil não localizado !");
    }
}

export {incluirPostagemNormal}