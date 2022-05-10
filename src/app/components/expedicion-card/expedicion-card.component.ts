import { Component, OnInit, Input } from '@angular/core';
import { Expedicion } from '../../model/trekking.model';

@Component({
  selector: 'app-expedicion-card',
  templateUrl: './expedicion-card.component.html',
  styleUrls: ['./expedicion-card.component.css']
})
export class ExpedicionCardComponent implements OnInit {

  @Input() public expedicion:Expedicion = {} as Expedicion;

  constructor() { }

  ngOnInit() {
  }

}
