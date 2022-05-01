import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SegurosComponent],
  exports: [SegurosComponent]
})
export class SegurosModule { }
