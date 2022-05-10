import { Component, OnInit, Input} from '@angular/core';
import { Seguro } from '../../model/trekking.model';
@Component({
  selector: 'app-seguro-card',
  templateUrl: './seguro-card.component.html',
  styleUrls: ['./seguro-card.component.css']
})
export class SeguroCardComponent implements OnInit {

  constructor() { }
  @Input() public Seguro:Seguro = {} as Seguro;
  ngOnInit() {
  }

}
