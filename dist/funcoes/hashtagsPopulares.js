"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashtagsPopulares = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const app_1 = require("../app");
let input = (0, prompt_sync_1.default)();
function hashtagsPopulares() {
    console.clear();
    console.log("---------------------------------------- HASHTAGS POPULARES ---------------------------------------\n");
    console.log("Relaciona as todas as 05 (cinco) HashTags mais utilizadas no Blog.\n");
    input("[enter]");
    let hashtags = app_1.app.redeSocial.getHashtagsPopulares();
    console.log("\nRESULTADO:\n");
    if (hashtags.length == 0) {
        console.log("🚨 Ainda não existem Postagens Especiais com Hashtags.");
    }
    else {
        for (let i = 0; i < hashtags.length; i++) {
            console.log(`${hashtags[0]}  -  ${hashtags[1]} inclusões`);
        }
    }
}
exports.hashtagsPopulares = hashtagsPopulares;
