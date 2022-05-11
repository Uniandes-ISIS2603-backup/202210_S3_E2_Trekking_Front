import { Component, OnInit, Input } from '@angular/core';
import { Expedicion } from '../../model/trekking.model';
import { Foto } from '../../model/trekking.model';

@Component({
  selector: 'app-expedicion-galeria',
  templateUrl: './expedicion-galeria.component.html',
  styleUrls: ['./expedicion-galeria.component.css']
})
export class ExpedicionGaleriaComponent implements OnInit {


  @Input() public fotos:Foto[] = {} as Foto[];
  constructor() { }

  ngOnInit() {
    console.log()
  }

}
