import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  cargada = false;

  constructor( private http: HttpClient ) {

    //console.log('info de Servicio de Pagina listo');   
    
    //Leer un archivo JSON
    this.http.get('assets/data/data-pagina.json')
          .subscribe( (resp: InfoPagina) =>{
           

            this.cargada = true;
            this.info = resp;

            console.log(resp); //se puede elegir la respuesta que quiero mostrar ya que es un objeto.

          })



   }


   
}
