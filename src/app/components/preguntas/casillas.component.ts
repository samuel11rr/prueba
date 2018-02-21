import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PreguntasService } from '../../services/preguntas.service';
declare var $: any;

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html'
})
export class CasillasComponent implements OnInit {
  preguntaCasillas:FormGroup;
  nueva = {
    tipo: 2,
    pregunta: null,
    respuestas: []
  }
  opciones=[];

  constructor( private _preguntasService:PreguntasService ) {
    this.preguntaCasillas = new FormGroup({
      'preguntac': new FormControl( '', [
                                         Validators.minLength(3),
                                         Validators.required
                                       ]),
      // 'respuesta': new FormControl( '', [
      //                                     Validators.minLength(1),
      //                                     Validators.required
      //                                   ])
    });

    $(document).ready(function(){
      $('.modal').modal();
    });
  }

  ngOnInit(){
    this.nuevaOpcion();
  }

  nuevaOpcion(){
    let opcion = {
      id:0,
      texto: '',
      valor: false
    };

    if (this.opciones.length === 0) {
        opcion.id = 1
    }else{
      opcion.id = this.opciones[this.opciones.length-1].id+1;
    }
    // console.log(opcion);
    this.opciones.push(opcion);
    // console.log( this.opciones );
  }

  verificaOpciones(){
    for (let i = 0; i < this.opciones.length; i++) {
      if ( this.opciones[i].texto === '') {
          this.opciones.splice(i,1);
          this.verificaOpciones();
      }
    }
  }

  guardaCasillas(){
    this.verificaOpciones();
    this.nueva.pregunta = this.preguntaCasillas.controls['preguntac'].value;
    this.nueva.respuestas = this.opciones;
    console.log(this._preguntasService.nuevaPregunta( this.nueva ));
    this.preguntaCasillas.reset();
    this.cerrarModal('Casillas');
    this._preguntasService.getListado();
  }

  cerrarModal(tipo){
    $('#modal'+tipo).modal('close');
  }
}
