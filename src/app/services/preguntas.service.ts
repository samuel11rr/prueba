import { Injectable } from '@angular/core';

@Injectable()
export class PreguntasService {
  listadoPreguntas = {
    listado: JSON.parse(localStorage.getItem('preguntasGuardadas')),
    resumen: {}
  }
  resumen = {
    totales: 0,
    texto: 0,
    casillas: 0,
    desplegable: 0
  }

  constructor() {
    if ( this.listadoPreguntas.listado === null ) {
      this.listadoPreguntas.listado = [];
    }
  }

  resetContadores(){
    this.resumen.texto = 0;
    this.resumen.casillas = 0;
    this.resumen.desplegable = 0;
  }

  getListado(){
    this.resetContadores();

    if ( this.listadoPreguntas.listado.length === 0 ) {
        this.listadoPreguntas.resumen = this.resumen;
        return this.listadoPreguntas;
    } else{
      this.listadoPreguntas.listado = JSON.parse(localStorage.getItem('preguntasGuardadas'));
      this.resumen.totales = this.listadoPreguntas.listado.length;

      for (let i = 0; i < this.listadoPreguntas.listado.length; i++) {
          if ( this.listadoPreguntas.listado[i].tipo === 1 ) {
              this.resumen.texto++;
          }
          if ( this.listadoPreguntas.listado[i].tipo === 2 ) {
              this.resumen.casillas++;
          }
          if ( this.listadoPreguntas.listado[i].tipo === 3 ) {
              this.resumen.desplegable++;
          }
      }

      this.listadoPreguntas.resumen = this.resumen;
      return this.listadoPreguntas;
    }
  }

  nuevaPregunta(datos){
    this.listadoPreguntas.listado.push(datos);
    // console.log(this.listadoPreguntas);
    localStorage.setItem('preguntasGuardadas', JSON.stringify(this.listadoPreguntas.listado));
    return this.getListado();
  }
}
