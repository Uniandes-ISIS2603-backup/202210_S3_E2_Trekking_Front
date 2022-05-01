import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpedicionesModule } from './expediciones/expediciones.module';
import { ExpedicionDetalleModule } from './expedicion-detalle/expedicion-detalle.module';
import { ProveedoresModule } from './proveedores/proveedores.module';
import { ProveedorDetalleModule } from './proveedor-detalle/proveedor-detalle.module';
import { SegurosModule } from './seguros/seguros.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProveedoresModule,
    ProveedorDetalleModule,
    ExpedicionesModule,
    ExpedicionDetalleModule,
    SegurosModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
