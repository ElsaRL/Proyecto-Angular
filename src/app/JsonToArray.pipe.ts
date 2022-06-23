import { Pipe, PipeTransform } from "@angular/core";
//import {empresas } from "./app.component";


@Pipe({

    name : "JsonToArray"

})



export class JsonToArray implements PipeTransform{

     transform(object: any = []) {

   //console.log(Object.values(object));
       return "name";
      
    }



  //   transform(Empresas: empresas[], categoria:string):empresas[]{
  //     return categoria == "" ? Empresas 
  //     : Empresas.filter(p=> p.category == categoria);
  // }





}