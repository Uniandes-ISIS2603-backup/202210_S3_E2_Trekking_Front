
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MapaCardComponent } from './mapa-card.component';
import { Expedicion } from 'src/app/model/trekking.model';




 describe('ProveedorDetalleComponent', () => {


  let component: MapaCardComponent;
  let fixture: ComponentFixture<MapaCardComponent>;
  let debug: DebugElement;

  let expedicion: Expedicion;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MapaCardComponent]
    })
    .compileComponents;

  });

  beforeEach(() => {


    fixture = TestBed.createComponent(MapaCardComponent);
    component = fixture.componentInstance;
    expedicion = {
      id: 1,
      nombre: "String",
      fechaInicio: "String",
      fechaFinal: "string",
      horaSalida: "string",
      lugarSalida:"string",
      horaLlegada:"string",
      lugarLlegada: "string",
      duracion: 10,
      descripcion: "string",
      dificultad: 10,
      costo: 10,
      mapa:
      {
        id : 1,
        latitud1 : 0.30,
        latitud2 : 0.30,
        longitud1: 0.30,
        longitud2:0.30,
      },
      fotos: [],
      itinerarios: [],
      recomendaciones: []
    }

    component.expedicion = expedicion;
    fixture.detectChanges();



  });

  it('should create', () => {
    expect(MapaCardComponent).toBeTruthy();
  });

  it('Deberia contener un atributo de id ', () => {
    let cadena = expedicion.mapa.id.toString;
    let cadenaComponente = component.expedicion.mapa.id.toString;
    expect(cadena == cadenaComponente
      );
  });

  it('Deberia contener un atributo de latitud ', () => {
    let cadena = expedicion.mapa.latitud1.toString;
    let cadenaComponente = component.expedicion.mapa.latitud1.toString;
    expect(cadena == cadenaComponente
      );
  });

  it('Deberia contener un atributo de latitud ', () => {
    let cadena = expedicion.mapa.latitud2.toString;
    let cadenaComponente = component.expedicion.mapa.latitud2.toString;
    expect(cadena == cadenaComponente
      );
  });

  it('Deberia contener un atributo de longitud ', () => {
    let cadena = expedicion.mapa.longitud1.toString;
    let cadenaComponente = component.expedicion.mapa.longitud1.toString;
    expect(cadena == cadenaComponente
      );
  });

  it('Deberia contener un atributo de longitud ', () => {
    let cadena = expedicion.mapa.longitud2.toString;
    let cadenaComponente = component.expedicion.mapa.longitud2.toString;
    expect(cadena == cadenaComponente);
  });


});



