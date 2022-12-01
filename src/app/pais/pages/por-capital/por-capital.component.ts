import { Component, OnInit } from '@angular/core';
import { SPAPaises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais-services.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent implements OnInit {
  nuevo: string = "";
  paises: SPAPaises[] = [];
  error: boolean = false;

  constructor(private PaisService : PaisServicesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
  }

  busqueda(query : string){
    this.PaisService.buscarPaisCapital(query)
    .subscribe({
      next: (resp) => {
        this.paises = resp
        this.error = false;
      },
    error: (err) => {
      this.error=true
      this.paises=[]
    }
    

    })
  
    
  }

}
