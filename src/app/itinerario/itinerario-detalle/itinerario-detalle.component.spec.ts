import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ItinerarioDetalleComponent } from './itinerario-detalle.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { faker } from '@faker-js/faker';

describe('ItinerarioDetalleComponent', () => {
  let component: ItinerarioDetalleComponent;
  let fixture: ComponentFixture<ItinerarioDetalleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ ItinerarioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItinerarioDetalleComponent);
    component = fixture.componentInstance;

    component.itinerario = {
      id : faker.datatype.number(),
      dia: faker.lorem.sentence(),
      alimentacion: faker.lorem.sentence(),
      alojamiento: faker.lorem.sentence()
      }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a día', () => {
    expect(debug.nativeElement.querySelector('#dia').textContent).toContain(component.itinerario.dia)
  });

  it('should have a alojamiento', () => {
    expect(debug.nativeElement.querySelector('#alojamiento').textContent).toContain(component.itinerario.alojamiento)
  });

  it('should have a alimentacion', () => {
    expect(debug.nativeElement.querySelector('#alimentacion').textContent).toContain(component.itinerario.alimentacion)
  });

  it('should have a titulo alojamiento', () => {
    expect(debug.nativeElement.querySelector('#titulo-alojamiento').textContent).toContain("Alojamiento")
  });

  it('should have a titulo alimentacion', () => {
    expect(debug.nativeElement.querySelector('#titulo-alimentacion').textContent).toContain("Alimentación")
  });

});

