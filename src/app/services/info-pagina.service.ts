import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  cargada = false;

  equipo: any [] = [];

  constructor( private http: HttpClient ) {

    //console.log('info de Servicio de Pagina listo');   

    this.cargarInfo();
    this.cargarEquipo();


   }

    private cargarInfo (){
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) =>{
       
        this.cargada = true;
        this.info = resp;
        //se puede elegir la respuesta que quiero mostrar ya que es un objeto.

      })
    }

   
    private cargarEquipo (){
      this.http.get('https://angular-html-9b023.firebaseio.com/equipo.json')
      .subscribe( (resp: any []) =>{
       
        this.equipo = resp;
        console.log(resp); //se puede elegir la respuesta que quiero mostrar ya que es un objeto.

      })
    }

}
