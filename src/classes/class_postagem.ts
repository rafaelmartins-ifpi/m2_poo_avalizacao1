import {Perfil} from './class_perfil';
import { dataAtual } from "../funcoes/funcoes_auxiliares";

class Postagem {
    private _id: number;
    private _texto: string;
    private _curtidas: number;
    private _descurtidas: number;
    private _data: string;
    private _perfil: Perfil;

    constructor (id: number, texto: string, perfil: Perfil) {
        this._id = id;
        this._texto = texto;
        this._perfil = perfil;
        this._curtidas = 0;
        this._descurtidas = 0;
        this._data = dataAtual(); 
    }

    get id (): number {
        return this._id;
    }

    get texto (): string {
        return this._texto;
    }

    get curtidas (): number {
        return this._curtidas;
    }

    get descurtidas (): number {
        return this._descurtidas;
    }

    get data (): string {
        return this._data;
    }

    get perfil (): Perfil {
        return this._perfil;
    }

    curtir (): void {
        this._curtidas += 1;
    }

    descurtir (): void {
        this._descurtidas += 1;
    }

    ehPopular (): boolean {
        return ((this._curtidas - this._descurtidas) / this._descurtidas) >= 0.5;
    }
}

export {Postagem};
