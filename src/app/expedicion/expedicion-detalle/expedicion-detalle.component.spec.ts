import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExpedicionDetalleComponent } from './expedicion-detalle.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Expedicion, Foto, Itinerario, Mapa, Recomendacion } from 'src/app/model/trekking.model';
import { faker } from '@faker-js/faker';

describe('ExpedicionDetalleComponent', () => {
  let component: ExpedicionDetalleComponent;
  let fixture: ComponentFixture<ExpedicionDetalleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ExpedicionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedicionDetalleComponent);
    component = fixture.componentInstance;

    component.expedicion = {
      id: faker.datatype.number(),
      nombre: faker.lorem.sentence(),
      fechaInicio: faker.lorem.sentence(),
      fechaFinal: faker.lorem.sentence(),
      horaSalida: faker.lorem.sentence(),
      lugarSalida:faker.lorem.sentence(),
      horaLlegada:faker.lorem.sentence(),
      lugarLlegada: faker.lorem.sentence(),
      duracion: faker.datatype.number(),
      descripcion: faker.lorem.sentence(),
      dificultad: faker.datatype.number(),
      costo: faker.datatype.number(),
      mapa: {} as Mapa,
      fotos:
        [
          {
            id: faker.datatype.number(),
            url: faker.image.imageUrl()
          }
        ] as Foto[],
      itinerarios:
        [
          {
            id : faker.datatype.number(),
            dia: faker.lorem.sentence(),
            alimentacion: faker.lorem.sentence(),
            alojamiento: faker.lorem.sentence()
          }
        ] as Itinerario[],
      recomendaciones:
        [
          {
            id: faker.datatype.number(),
            indumentaria: faker.lorem.sentence(),
            equipo: faker.lorem.sentence(),
            expedicion: {} as Expedicion
          }
        ] as Recomendacion[],
    };

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a description element', () => {
    expect(debug.nativeElement.querySelector('#descripcion').textContent).toContain(component.expedicion.descripcion)
  });

  it('should have a duracion', () => {
    expect(debug.nativeElement.querySelector('#duracion').textContent).toContain(component.expedicion.duracion)
  });

  it('should have a costo', () => {
    expect(debug.nativeElement.querySelector('#costo').textContent).toContain(component.expedicion.costo)
  });

  it('should have a dificultad', () => {
    expect(debug.nativeElement.querySelector('#dificultad').textContent).toContain(component.expedicion.dificultad)
  });

  it('should have a nombre', () => {
    expect(debug.nativeElement.querySelector('#nombre').textContent).toContain(component.expedicion.nombre)
  });

  it('should have a hora de llegada', () => {
    expect(debug.nativeElement.querySelector('#horaLlegada').textContent).toContain(component.expedicion.horaLlegada)
  });

  it('should have a hora de salida', () => {
    expect(debug.nativeElement.querySelector('#horaSalida').textContent).toContain(component.expedicion.horaSalida)
  });

  it('should have a fecha final', () => {
    expect(debug.nativeElement.querySelector('#fechaFinal').textContent).toContain(component.expedicion.fechaFinal)
  });

  it('should have a fecha de inicio', () => {
    expect(debug.nativeElement.querySelector('#fechaInicio').textContent).toContain(component.expedicion.fechaInicio)
  });

  it('should have a lugar salida', () => {
    expect(debug.nativeElement.querySelector('#lugarSalida').textContent).toContain(component.expedicion.lugarSalida)
  });

  it('should have a lugar llegada', () => {
    expect(debug.nativeElement.querySelector('#lugarLlegada').textContent).toContain(component.expedicion.lugarLlegada)
  });
});
