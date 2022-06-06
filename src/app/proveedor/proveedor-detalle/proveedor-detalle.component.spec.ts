import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProveedorDetalleComponent } from './proveedor-detalle.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Expedicion, Foto, Itinerario, Mapa, Recomendacion } from 'src/app/model/trekking.model';
import { faker } from '@faker-js/faker';
import { By } from '@angular/platform-browser';

describe('ProveedorDetalleComponent', () => {
  let component: ProveedorDetalleComponent;
  let fixture: ComponentFixture<ProveedorDetalleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ProveedorDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedorDetalleComponent);
    component = fixture.componentInstance;

    component.proveedor = {
      id : faker.datatype.number(),
      nombre: faker.lorem.sentence(),
      experticia: faker.datatype.number(),
      telefono: faker.datatype.number(),
      tipoDocumento: faker.lorem.sentence(),
      foto: {
        id: faker.datatype.number(),
        url: faker.image.imageUrl()
      },
      expediciones: [{
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
              equipo: faker.lorem.sentence()
            }
          ] as Recomendacion[],
      }] as Expedicion[]
    };

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a nombre', () => {
    expect(debug.nativeElement.querySelector('#nombre').textContent).toContain(component.proveedor.nombre)
  });

  it('should have a foto', () => {
    expect(
      debug.query(By.css('#foto')).attributes['src']
    ).toEqual(component.proveedor.foto.url);
  });

  it('should have a experticia', () => {
    expect(debug.nativeElement.querySelector('#experticia').textContent).toContain(component.proveedor.experticia)
  });

  it('should have a telefono', () => {
    expect(debug.nativeElement.querySelector('#telefono').textContent).toContain(component.proveedor.telefono)
  });

  it('should have a nombre2', () => {
    expect(debug.nativeElement.querySelector('#nombre2').textContent).toContain(component.proveedor.nombre)
  });

  it('should have a tipoDocumento', () => {
    expect(debug.nativeElement.querySelector('#tipoDocumento').textContent).toContain(component.proveedor.tipoDocumento == "Nit"? "Empresa" : "Persona natural")
  });

});
