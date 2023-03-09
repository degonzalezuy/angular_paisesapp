import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['EU','EFTA', 'CARICOM', 'PA', 'AU', 'USAN','EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA','NAFTA','SAARC'];
  regionActiva: string = '';
//  termino: string = 'hola';
  hayError: boolean = false;
  paises: Country[]=[];



  constructor(private paisService: PaisService){}

  getClaseCSS( region: string):string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRegion( region: string){
    this.regionActiva = region;

    this.hayError = false;
    
    this.paisService.getPaisPorRegion(region)
    .subscribe( ( paises) => {
      this.paises = paises;
    },(error) => {
      this.hayError=true;
      this.paises = [];
    });
  }

}
