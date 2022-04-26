import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpedicionesComponent } from './expediciones/expediciones.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { SegurosComponent } from './seguros/seguros.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [				
    AppComponent,
      ExpedicionesComponent,
      ProveedoresComponent,
      SegurosComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
