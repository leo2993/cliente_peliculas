export class Pelicula {
    identificador:number;
    titulo:string;
    sinopsis:string;
    anoestreno:number;
    duracion:number;
    imagen:string;
    actores:string;
    video:string;
    constructor(identificador:number,titulo:string,sinopsis:string,anoestreno:number,duracion:number,imagen:string,actores:string,video:string){
        this.identificador=identificador;
        this.titulo=titulo;
        this.sinopsis=sinopsis;
        this.anoestreno=anoestreno;
        this.duracion=duracion;
        this.imagen=imagen;
        this.actores=actores;
        this.video=video;
    }
}