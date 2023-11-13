import prompt from 'prompt-sync';
import { Postagem } from '../classes/class_postagem';
import { PostagemAvancada } from '../classes/class_postagemAvancada';
import { app } from '../app';
import { inputString } from './funcoes_auxiliares';
let input = prompt();



function incluirPostagemEspecial (): void {
    console.clear();
    console.log("---------------------------------------- INCLUIR POSTAGEM ESPECIAL ---------------------------------------\n");
    console.log("ATENÇÃO: Nas Postagens Especiais é possível incluir #HashTags,");
    console.log("         Porém, são limitadas a 05 (cinco) visualizações\n");
    console.log("Insira o nome do perfil que deseja incluir a Postagem Especial:\n");
    let nome: string = inputString("Nome: ");
    console.log();
    let perfilEncontrado = app.redeSocial.consultarPerfil(0, nome);

    if (perfilEncontrado) {
        let texto: string = inputString("Texto da Postagem: ");
        let id: number = app.redeSocial.repositórioDePostagens.criarId();
        let postagem: Postagem = new PostagemAvancada (id, texto, perfilEncontrado);
        
        console.log("\nAgora você pode incluir quantas #Hashtags quiser:");
        let hashtag: string = "";
        let repetir: string = "";
        
        do {
            console.log();
            hashtag = inputString("#Hashtag: ");
            (<PostagemAvancada>postagem).adicionarHashtag(hashtag);
            console.log();
            repetir = input("outra # ? [S/n] ");
        } while (repetir.toLowerCase() === "s");
       
        app.redeSocial.repositórioDePostagens.incluir(postagem);

    } else {
        console.log("🚨 Perfil não localizado !");
    }
}

export {incluirPostagemEspecial}