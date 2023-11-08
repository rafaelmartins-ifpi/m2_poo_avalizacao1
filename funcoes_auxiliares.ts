import prompt from "prompt-sync";
import { Perfil } from "./class_perfil";
import { app } from "./app";
import { Postagem } from "./class_postagem";
import { PostagemAvancada } from "./class_postagemAvancada";

let input = prompt();

function dataAtual (): string {
    let data = new Date;
    const dia = String(data.getDate()).padStart(2,'0');
    const mes = String(data.getMonth()+1).padStart(2,'0');
    const ano = String(data.getFullYear());
    const time = data.toTimeString();
    
    return `${dia}/${mes}/${ano} às ${time}`;
}

//recebe uma função e uma mensagem como parâmetro
//repete a função recebida enquanto o usuário clica "s" 
function loppFunction (funcao: () => void, mensagem: string ): void{
    let repetir: string = ""

    do {
        
        funcao();
        repetir = (input("\n" + mensagem + " [S/n] ")).toLowerCase();

    } while (repetir === "s");
}

function inputNumber (mensagem: string): number {
    let numero = input(mensagem);
    let numeroConvertido: number = Number(numero);

    while ((numero.length == 0) || (!numeroConvertido)){
        console.log("Não é um número válido !!\n");
        numero = input (mensagem);
        numeroConvertido = Number(numero);
    }
    
    return numeroConvertido
}

function inputString (message: string): string {
    let texto = input(message);
    let mensagemConvertida: string = String(texto);
    let mensagemTeste: number = Number(texto);

    while ((texto.length == 0) || (mensagemTeste)){
        console.log("Não é um texto válido !!\n");
        texto = input (message);
        mensagemConvertida = String(texto);
        mensagemTeste = Number(texto);
    }
    
    return mensagemConvertida
}

function incluirPerfil (): void {
    console.clear();
    console.log("---- INCLUIR PERFIL ----\n");
    console.log("Insira os dados solicitados para criar um perfil:");
    console.log("[Nome, E-mail]\n");

    let id: number = app.redeSocial.repositorioDePerfis.criarId();
    let nome: string = inputString("Nome: ");
    let email: string = inputString("E-mail: ");

    let perfil: Perfil = new Perfil(id, nome, email);
    app.redeSocial.incluirPerfil(perfil);
    
    input("\n[enter]");
}

function consultarPerfil (): void {
    console.clear();
    console.log("---- CONSULTAR PERFIL ---\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Nome, E-mail]\n");

    let id: number = Number(input ("Id: "));
    let nome: string = input ("Nome: ");
    let email: string = input ("E-mail: ");

    console.log("\nRESULTADO: \n");
    let perfilEncontrado = app.redeSocial.consultarPerfil(id, nome, email);

    if(perfilEncontrado){
        console.log (`Id: ${perfilEncontrado.id} \n`);
        console.log (`Nome: ${perfilEncontrado.nome} \n`);
        console.log (`E-mail: ${perfilEncontrado.email} \n`);
    }

    input("\n[enter]");
    
}

//Executa a tela de opções para escolha do tipo de postagem (normal ou Especial)
// Chama outra função de acordo com a opção escolhida
function incluirPostagem (): void {
    console.clear();
    console.log("---- INCLUIR POSTAGEM --- \n");
    console.log("Que tipo de Postagem deseja incluir ? \n");
    console.log("[1] Postagem Normal \n[2] Postagem Especial\n");

    let opcao: string = input("Opçao: ");

    switch (opcao) {
        case "1" :
            incluirPostagemNormal();
            break;
        case "2" :
            incluirPostagemEspecial();
            break;
        default :
            input ("\n Opção inválida ! \n [enter]");
            break;
    }
}

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

function incluirPostagemEspecial (): void {
    console.clear();
    console.log("---- INCLUIR POSTAGEM ESPECIAL ---- \n");
    console.log("ATENÇÃO: Nas Postagens Especiais é possível incluir #HashTags,");
    console.log("         Porém, são limitadas a 05 (cinco) visualizações\n");
    console.log("Insira o nome do perfil que deseja incluir a Postagem Especial:");
    let nome: string = inputString("Nome: ");
    let perfilEncontrado = app.redeSocial.consultarPerfil(0, nome);
    console.log();

    if (perfilEncontrado) {
        let texto: string = inputString("Texto da Postagem: ");
        let id: number = app.redeSocial.repositórioDePostagens.criarId();
        let postagem: Postagem = new PostagemAvancada (id, texto, perfilEncontrado);
        
        console.log("Agora você pode incluir quantas #Hashtags quiser:");
        let hashtag: string = "";
        let repetir: string = "";
        
        do {
            hashtag = inputString("\n#Hashtag: ");
            (<PostagemAvancada>postagem).adicionarHashtag(hashtag);
            repetir = (input("Inclir outra? [S/n] ")).toLowerCase();
        } while (repetir === "s");
       
        app.redeSocial.repositórioDePostagens.incluir(postagem);

    } else {
        console.log ("\nVocê pode fazer uma consulta no Menu Principal, Opção [2]");
        console.log("Ou verificar no Relatório de Perfis, Opção [8]");
    }
}

function consultarPostagens (): void {
    console.clear();
    console.log("---- CONSULTAR POSTAGENS ----\n");
    console.log("Para consultar o perfil desejado, insira opcionalmente os dados solicitados abaixo:");
    console.log("[Id, Texto, #HashTag, Perfil]\n");

    let id: number = Number(input ("Id: "));
    let texto: string = input ("Texto da Postagem: ");
    let hashtag: string = input ("#HashTag: ");
    let nome: string = input("Nome do Perfil: ");
    let perfil = app.redeSocial.consultarPerfil(0, nome);

    console.log("\nRESULTADO: ");
    let postagensEncontradas = app.redeSocial.consultarPostagens(id, texto, hashtag, perfil);

    if (postagensEncontradas) {
        for (let i = 0; i < postagensEncontradas.length; i++){
            console.log("\n--------------- xx ---------------\n");
            console.log(`🗨️ id. ${postagensEncontradas[i].id}\n`);
            
            if (postagensEncontradas[i].ehPopular()){
                console.log(`🥇🥈🥉\n`);
            }
            
            if (postagensEncontradas[i] instanceof PostagemAvancada){
                console.log(`${postagensEncontradas[i].texto} \n`);
                console.log(`👍 ${postagensEncontradas[i].curtidas}   `+
                            `👎 ${postagensEncontradas[i].descurtidas}   `+
                            `👀 ${5 - (<PostagemAvancada>postagensEncontradas[i]).visualizacoesRestantes}/5 \n`);
                console.log(`${(<PostagemAvancada>postagensEncontradas[i]).hashtags}\n`);

            }else {
                console.log(`${postagensEncontradas[i].texto} \n`);
                console.log(`👍 ${postagensEncontradas[i].curtidas}   `+
                            `👎 ${postagensEncontradas[i].descurtidas}\n`);
            }
            
            console.log(`Postado por ${postagensEncontradas[i].perfil.nome}, em ${postagensEncontradas[i].data} \n`);
        }
    }

}

function curtir (): void {
    console.clear();
    console.log("---- CURTIR POSTAGEM ---- \n");
    console.log("Insira o ID da postagem que deseja curtir.\n");

    let id: number = inputNumber("Id.: ");

    let postagens: Postagem [] = app.redeSocial.consultarPostagens(id);

    if(postagens) {
        console.log(`\nTexto da Postagem: ${postagens[0].texto}`);
        let confirmacao: string = (input("Deseja curti ? [S/n] ")).toLowerCase();
        
        if (confirmacao == "s") {
            app.redeSocial.curtir(postagens[0].id);
        } 
    }

    input("\n[enter] ");
}


export {dataAtual, inputNumber, inputString, incluirPerfil, consultarPerfil, 
    loppFunction, incluirPostagem, consultarPostagens };

