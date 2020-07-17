import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }



  private cargarProductos() {

    

          return new Promise (  (resolve, reject) =>{
            this.http.get('https://angular-html-9b023.firebaseio.com/productos_idx.json')
        .subscribe( ( resp: Producto[] ) => {

          this.productos = resp;
          this.cargando = false;
          resolve();

          });

          }); 

       // console.log(resp);
       
  }

    getProducto( id: string){

     return this.http.get(`https://angular-html-9b023.firebaseio.com/productos/${id}.json`);

    }

    buscarProducto ( termino: string){

      if(this.productos.length === 0 ){
        //cargar productos
        this.cargarProductos().then ( ()=>{
        this.filtrarProductos(termino);
          //ejecutar después de tener los productos
          //aquí se aplica el filtro
        });

      }else {
        //aplicar filtro
        this.filtrarProductos(termino);
      }


      this.productoFiltrado = this.productos.filter(  producto =>{
         return true;
       } )
       console.log(this.productoFiltrado);
    }
    private filtrarProductos (termino: string) {
      console.log(this.productos);
      this.productoFiltrado = [];

      termino = termino.toLocaleLowerCase();

      this.productos.forEach( prod =>{

        const tituloLower = prod.titulo.toLocaleLowerCase();

        if (prod.categoria.indexOf( termino) >= 0  || tituloLower.indexOf(termino) >=0 ){
          this.productoFiltrado.push( prod );
        }
      });

    }
    
}
