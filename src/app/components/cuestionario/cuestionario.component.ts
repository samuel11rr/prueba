import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html'
})
export class CuestionarioComponent implements OnInit {
  listado = {};
  constructor( private _preguntasService:PreguntasService ) { }

  ngOnInit() {
    this.listado = this._preguntasService.getListado().listado;
    console.log(this.listado)
  }

}
