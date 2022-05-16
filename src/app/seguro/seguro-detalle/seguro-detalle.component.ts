import { Component, OnInit, Input } from '@angular/core';
import { Seguro } from '../../model/trekking.model';
import { ExpedicionListaModule } from '../../components/expedicion-lista/expedicion-lista.module';
import { ActivatedRoute } from '@angular/router';
import { TrekkingService } from 'src/app/services/trekking.service';

@Component({
  selector: 'app-seguro-detalle',
  templateUrl: './seguro-detalle.component.html',
  styleUrls: ['./seguro-detalle.component.css']
})
export class SeguroDetalleComponent implements OnInit {

  seguroId!: string;
  @Input() public seguro:Seguro = {} as Seguro;

  constructor(
    private route: ActivatedRoute,
    private trekkingService: TrekkingService) { }

  getSeguro(){
    this.trekkingService.getSeguro(this.seguroId).subscribe(seguro=>{
      this.seguro = seguro;
    })
  }

  ngOnInit() {
    if(Object.keys(this.seguro).length === 0){
      this.seguroId = this.route.snapshot.paramMap.get('id')!
      if(this.seguroId){
        this.getSeguro();
      }
    }
  }
}
