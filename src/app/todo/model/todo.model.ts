export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(text: string) {
        this.texto = text ;
        this.completado = false;
        this.id = Math.random();

    }
}