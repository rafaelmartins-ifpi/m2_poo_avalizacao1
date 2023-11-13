import prompt from 'prompt-sync'
import { app } from "../app";
let input = prompt();

function hashtagsPopulares (): void {
    console.clear();
    console.log("---------------------------------------- HASHTAGS POPULARES ---------------------------------------\n");
    console.log("Relaciona as todas as 05 (cinco) HashTags mais utilizadas no Blog.\n");
    input ("[enter]");

    let hashtags = app.redeSocial.getHashtagsPopulares();
    console.log("\nRESULTADO:\n");
    
    if (hashtags.length == 0) {
        console.log("🚨 Ainda não existem Postagens Especiais com Hashtags.");
    } else {
        for (let i = 0; i < hashtags.length; i++) {
            console.log(`${hashtags[0]}  -  ${hashtags[1]} inclusões`);
        }
    }
}

export {hashtagsPopulares}