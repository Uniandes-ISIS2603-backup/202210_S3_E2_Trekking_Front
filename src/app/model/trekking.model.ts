// interfaces modelo
export interface Itinerario{
  id : number;
  dia: string;
  alimentacion: string;
  alojamiento: string;
}

export interface Foto{
  id: number;
  url: string;
}

export interface Proveedor{
  id : number;
  nombre: string;
  experticia: number;
  telefono: number;
  tipoDocumento: string
  foto: Foto
  expediciones: Expedicion[]
}

export interface Expedicion{
  nombre: string;
  fechaInicio: string;
  fechaFinal: string;
  horaSalida: string;
  lugarSalida:string;
  horaLlegada:string;
  lugarLlegada: string;
  duracion: number;
  descripcion: string;
  dificultad: number;
  costo: number;
  mapa: Mapa
  fotos: Foto[]
  itinerarios: Itinerario[]
  recomendaciones: Recomendacion[]
}

export interface Mapa{
  id: number;
}


export interface Condicion {
  descripcion : String;
  seguro: Seguro;
}


export interface Caracteristica {
  descripcion : String;
  seguro: Seguro;
}

export interface Cliente{
  nombre: String;
  apellido: String;
  seguros: Seguro[];
  expediciones: Expedicion[];
}
export interface Seguro {
  nombre:string;
  condiciones: Condicion[];
  caracteristicas: Caracteristica[];
  clientes:Cliente[];
}
export interface Recomendacion {
  id: number;
  indumentaria: string;
  equipo: string;
  expedicion: Expedicion;
}

export interface Mapa{
  id: number;
  latitud : number;
  longitud : number;

}

