import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = 'hola';
  hayError: boolean = false;
  paises: Country[]=[];

  constructor(private paisService: PaisService){}

  buscar(termino: string) {
    
    //this.hayError = false;
    this.termino = termino;
    this.hayError = false;
    
    this.paisService.buscarCapital(termino)
    .subscribe( ( paises) => {
    
      this.paises = paises;
    },(error) => {
      this.hayError=true;
      this.paises = [];
    });
  }


}
