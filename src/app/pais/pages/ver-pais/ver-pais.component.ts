import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SPAPaises } from '../../interfaces/searchResponse.interface';
import { PaisServicesService } from '../../services/pais-services.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {
  code: string= "";
  pais!: SPAPaises;

  constructor(private paisService : PaisServicesService, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.code = this.route.snapshot.params['id'];
    this.paisService.country(this.code)
    .subscribe({
      next: (resp) => {this.pais= resp[0]},
      error: (error) => console.log(error)
    })
  }


}
