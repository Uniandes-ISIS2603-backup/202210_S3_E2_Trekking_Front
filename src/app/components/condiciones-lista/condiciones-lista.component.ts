import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Condicion } from 'src/app/model/trekking.model';
@Component({
  selector: 'app-condiciones-lista',
  templateUrl: './condiciones-lista.component.html',
  styleUrls: ['./condiciones-lista.component.css']
})
export class CondicionesListaComponent implements OnInit {


  @Input() public condicion:Condicion = {} as Condicion;

  @Output() clickDetalle = new EventEmitter<Condicion>();
  constructor() { }

  ngOnInit() {
  }

}
