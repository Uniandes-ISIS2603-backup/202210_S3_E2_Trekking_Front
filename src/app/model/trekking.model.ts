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
  //falta añadir expediciones que tiene un proveedor, sería: expediciones: Expedicion[]
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
}

export interface Mapa{
  id: number;
}
