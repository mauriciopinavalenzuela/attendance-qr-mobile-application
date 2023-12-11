export interface Users {
    id: number;
    username: string;
    password: string;
    role: string;
    isactive: boolean;  // Agrega la propiedad isactive
    asignatura1: string; // Agregada
    asignatura2: string; // Agregada
}
  
export interface RespuestaTopHeadlines{
    status: Source;
    totalResults: number;
    articles: Article[];
}

export interface Article{
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content?: string;
}

export interface Source{
    id?: string;
    name: string;
}

//post
export interface IPalabra{
    palabra: string;
    username: string;
    asignatura: string;
}

//get, put, delete
export interface IPalabras{
    id: number;
    palabra: string;
    username: string;
}    

export interface IAsistencia {
    id: Number,
    asignatura: String,
    fecha: String
}

export interface Iasistencias {
    asignatura: String,
    fecha: String
}

export interface IAsignaturas {
    asignatura1: string;
    asignatura2: string;
  }
