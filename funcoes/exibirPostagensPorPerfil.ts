import { app } from '../app';
import { imprimirPostagens, inputNumber } from './funcoes_auxiliares';


function exibirPostagensPorPerfil (): void {
    console.clear();
    console.log("---------------------------------------- EXIBIR POSTAGENS POR PERFIL ---------------------------------------\n");
    console.log("Insira o [Id] do Perfil desejado:\n");
    let id: number = inputNumber("Id: ");
    
    console.log("\nRESULTADO: \n");
    let postagens = app.redeSocial.exibirPostagensPorPerfil(id);

    if (postagens) {
        imprimirPostagens(postagens);
    }
}

export {exibirPostagensPorPerfil}