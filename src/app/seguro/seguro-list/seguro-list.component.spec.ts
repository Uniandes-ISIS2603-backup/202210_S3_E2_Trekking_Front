/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {SeguroListComponent } from './seguro-list.component';
import {Seguro} from '../../model/trekking.model';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeguroListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should create', () => {
    expect(SeguroListComponent).toBeTruthy();
  });

});
