import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Proveedor, Expedicion } from '../../model/trekking.model';


@Component({
  selector: 'app-expedicion-lista',
  templateUrl: './expedicion-lista.component.html',
  styleUrls: ['./expedicion-lista.component.css']
})
export class ExpedicionListaComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;

  @Output() clickDetalle = new EventEmitter<Proveedor>();

  constructor() { }

  ngOnInit() {
    console.log(this.expedicion);
  }

}
