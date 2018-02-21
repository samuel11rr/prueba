import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
declare var $: any;

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html'
})
export class CuestionarioComponent implements OnInit {
  listado = [];
  constructor( private _preguntasService:PreguntasService ) {
    $(document).ready(function() {
      $('select').material_select();
    });
  }

  ngOnInit() {
    this.getListado();
  }

  getListado(){
    this.listado = this._preguntasService.getListado().listado;
    console.log(this.listado);
  }

  elimina(id){
    this.listado.splice(id,1);
    this._preguntasService.actualizaListado( this.listado );

    this.listado = this._preguntasService.getListado().listado;
  }

}
