import { Injectable } from '@angular/core';

@Injectable()
export class PreguntasService {
  listadoPreguntas = JSON.parse(localStorage.getItem('preguntasGuardadas'));
  resumen = {
    totales: 0,
    texto: 0,
    casillas: 0,
    desplegable: 0
  }

  constructor() {
    if ( this.listadoPreguntas === null ) {
      this.listadoPreguntas = [];
    }
  }

  resetContadores(){
    this.resumen.texto = 0;
    this.resumen.casillas = 0;
    this.resumen.desplegable = 0;
  }

  getListado(){
    this.resetContadores();

    if ( this.listadoPreguntas.length === 0 ) {
        return this.resumen;
    } else{
      this.listadoPreguntas = JSON.parse(localStorage.getItem('preguntasGuardadas'));
      this.resumen.totales = this.listadoPreguntas.length;

      for (let i = 0; i < this.listadoPreguntas.length; i++) {
          if ( this.listadoPreguntas[i].tipo === 1 ) {
              this.resumen.texto++;
          }
          if ( this.listadoPreguntas[i].tipo === 2 ) {
              this.resumen.casillas++;
          }
          if ( this.listadoPreguntas[i].tipo === 3 ) {
              this.resumen.desplegable++;
          }
      }
      return this.resumen;
    }
  }

  nuevaPregunta(datos){
    this.listadoPreguntas.push(datos);
    // console.log(this.listadoPreguntas);
    localStorage.setItem('preguntasGuardadas', JSON.stringify(this.listadoPreguntas));
    return this.getListado();
  }
}
