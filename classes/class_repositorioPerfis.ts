import { Perfil } from "./class_perfil";

class RepositorioDePerfis {
    private _perfis: Perfil[];
    private _contIdPerfil: number;

    constructor () {
        this._perfis = [];
        this._contIdPerfil = 1;
    }

    get perfis (): Perfil[] {
        return this._perfis;
    }

    get contIdPerfil (): number {
        return this._contIdPerfil++;
    }

    criarId (): number {
        return this._contIdPerfil++;
    }

    consultarPorId (id: number) : Perfil {
        let perfilEncontrado !: Perfil;
        
        for (let i = 0; i < this._perfis.length; i++) {
            if (this._perfis[i].id == id) {
                perfilEncontrado = this._perfis[i];
                break;
            }
        }

        return perfilEncontrado;
    }

    consultarPorNome (nome: string) : Perfil {
        let perfilEncontrado !: Perfil;
        
        for (let i = 0; i < this._perfis.length; i++) {
            if ((this._perfis[i].nome).toLowerCase() == nome.toLowerCase()) {
                perfilEncontrado = this._perfis[i];
                break;
            }
        }

        return perfilEncontrado;
    }

    consultarPorEmail (email: string) : Perfil {
        let perfilEncontrado !: Perfil;
      
        for (let i = 0; i < this._perfis.length; i++) {
            if (this._perfis[i].email == email) {
                perfilEncontrado = this._perfis[i];
                break;
            }
        }

        return perfilEncontrado;
    }

    incluir (perfil: Perfil): void {
        
        if (!this.consultarPorEmail(perfil.email) && !this.consultarPorId(perfil.id) && !this.consultarPorNome(perfil.nome)){
            this._perfis.push (perfil);
            console.log ("\n✅ Perfil incluído com sucesso !!");
        } else {
            if (this.consultarPorEmail(perfil.email)) {
                console.log (`\n🚨 E-mail ${perfil.email} já existe no cadastro !!`);
            }
                
            if (this.consultarPorId(perfil.id)) {
                console.log (`\n🚨 ID ${perfil.id} já existe no cadastro !!`);
            }
    
            if (this.consultarPorNome(perfil.nome)) {
                console.log (`\n🚨 Usuário(a) ${perfil.nome} já está cadastrado(a) !!`);
            }
        }
    }

    consultar (id: number = 0, nome?: string, email?: string): Perfil {
        let perfisEncontrados: Perfil[] = [];
        let perfilEncontrado !: Perfil;

        if (id) {
           
            if (this.consultarPorId(id)) {
                let jaInserido: boolean = false;
                
                for (let i = 0; i < perfisEncontrados.length; i++){
                    if (perfisEncontrados[i].id == id){
                        jaInserido = true;
                        break
                    }
                }
               
                if (jaInserido == false){
                    perfisEncontrados.push (this.consultarPorId(id));
                }
            }
        }

        if (nome) {
           
            if (this.consultarPorNome(nome)) {
                let jaInserido: boolean = false;
                
                for (let i = 0; i < perfisEncontrados.length; i++){
                    if ((perfisEncontrados[i].nome).toLowerCase() == nome.toLowerCase()){
                        jaInserido = true;
                        break
                    }
                }
               
                if (jaInserido == false){
                    perfisEncontrados.push (this.consultarPorNome(nome));
                }
            }
        }

        if (email) {
           
            if (this.consultarPorEmail(email)) {
                let jaInserido: boolean = false;
                
                for (let i = 0; i < perfisEncontrados.length; i++){
                    if (perfisEncontrados[i].email == email){
                        jaInserido = true;
                        break
                    }
                }
               
                if (jaInserido == false){
                    perfisEncontrados.push (this.consultarPorEmail(email));
                }
            }
        }

        if (perfisEncontrados.length == 1) { 
            perfilEncontrado = perfisEncontrados[0];
        }

        return perfilEncontrado;
    }

}

export {RepositorioDePerfis};






