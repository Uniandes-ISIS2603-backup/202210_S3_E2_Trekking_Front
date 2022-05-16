import { Component, OnInit, Input } from '@angular/core';
import { Expedicion } from '../../model/trekking.model';
import { Foto } from '../../model/trekking.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-expedicion-galeria',
  templateUrl: './expedicion-galeria.component.html',
  styleUrls: ['./expedicion-galeria.component.css']
})
export class ExpedicionGaleriaComponent implements OnInit {


  @Input() public fotos:Foto[] = {} as Foto[];
  constructor() {}
  // constructor(config: NgbCarouselConfig) {
  //   config.interval = 2000;
  //   config.wrap = true;
  //   config.keyboard = false;
  //   config.pauseOnHover = false;
  // }

  ngOnInit() {
    console.log()
  }

}
