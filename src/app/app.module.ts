import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpedicionModule } from './expedicion/expedicion.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { SeguroModule } from './seguro/seguro.module';
import { ItinerarioModule } from './itinerario/itinerario.module';
import { RecomendacionModule } from './recomendacion/recomendacion.module';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ProveedorModule,
    ExpedicionModule,
    ItinerarioModule,
    RecomendacionModule,
    SeguroModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
