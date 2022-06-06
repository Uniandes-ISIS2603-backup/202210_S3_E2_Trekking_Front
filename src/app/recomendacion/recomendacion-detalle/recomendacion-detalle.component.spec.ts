import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecomendacionDetalleComponent } from './recomendacion-detalle.component';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { faker } from '@faker-js/faker';

describe('RecomendacionDetalleComponent', () => {
  let component: RecomendacionDetalleComponent;
  let fixture: ComponentFixture<RecomendacionDetalleComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ RecomendacionDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendacionDetalleComponent);
    component = fixture.componentInstance;

    component.recomendacion = {
      id: faker.datatype.number(),
      indumentaria: faker.lorem.sentence(),
      equipo: faker.lorem.sentence(),
      }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a indumentaria', () => {
    expect(debug.nativeElement.querySelector('#indumentaria').textContent).toContain(component.recomendacion.indumentaria)
  });

  it('should have a equipo', () => {
    expect(debug.nativeElement.querySelector('#equipo').textContent).toContain(component.recomendacion.equipo)
  });

  it('should have a titulo indumentaria', () => {
    expect(debug.nativeElement.querySelector('#titulo-indumentaria').textContent).toContain("Indumentaria")
  });

  it('should have a titulo equipo', () => {
    expect(debug.nativeElement.querySelector('#titulo-equipo').textContent).toContain("Equipo")
  });

});
