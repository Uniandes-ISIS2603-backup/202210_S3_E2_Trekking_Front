import {TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeguroDetalleComponent } from './seguro-detalle.component';

describe('ProveedorDetalleComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should create', () => {
    expect(SeguroDetalleComponent).toBeTruthy();
  });

});
