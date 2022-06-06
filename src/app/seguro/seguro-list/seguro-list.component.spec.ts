/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {SeguroListComponent } from './seguro-list.component';
import {Seguro} from '../../model/trekking.model';
import { faker } from '@faker-js/faker';

describe('SeguroListComponent', () => {
 let component: SeguroListComponent;
 let fixture: ComponentFixture<SeguroListComponent>;
 let debug: DebugElement;
 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [ SeguroListComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(SeguroListComponent);
   component = fixture.componentInstance;
   const sege:Seguro = {
    id : faker.datatype.number(),
    nombre :faker.lorem.sentence(),
    condiciones :[],
    caracteristicas : [],
    clientes:[]}
   component.seguros = [sege,
    ];

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});
