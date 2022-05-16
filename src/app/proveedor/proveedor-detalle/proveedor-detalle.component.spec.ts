import {TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProveedorDetalleComponent } from './proveedor-detalle.component';

describe('ProveedorDetalleComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should create', () => {
    expect(ProveedorDetalleComponent).toBeTruthy();
  });

});
