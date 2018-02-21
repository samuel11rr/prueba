import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PreguntasService } from '../../services/preguntas.service';
declare var $: any;

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html'
})
export class DesplegableComponent implements OnInit {

  preguntaDesplegable:FormGroup;
  nueva = {
    tipo: 3,
    pregunta: null,
    respuestas: []
  }
  opciones=[];

  constructor( private _preguntasService:PreguntasService ) {
    this.preguntaDesplegable = new FormGroup({
      'preguntac': new FormControl( '', [
                                         Validators.minLength(3),
                                         Validators.required
                                       ])
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
    this.nueva.pregunta = this.preguntaDesplegable.controls['preguntac'].value;
    this.nueva.respuestas = this.opciones;
    console.log(this._preguntasService.nuevaPregunta( this.nueva ));
    this.preguntaDesplegable.reset();
    this.cerrarModal('Desplegable');
    this._preguntasService.getListado();
  }

  cerrarModal(tipo){
    $('#modal'+tipo).modal('close');
  }

}
