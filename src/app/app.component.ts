
import { Component, OnInit } from '@angular/core';


import axios from 'axios';
//import { useSetState } from "use-setstate";




@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  
  public nombreDelComponente: string;

  public resultado : string;

  public MostrarAccount : string; 
  public empresas:Array<any>;



  constructor() {

this.nombreDelComponente = "Empresa"

this.resultado = "";
this.MostrarAccount = "";

this.empresas=[];



    }

//  public ObtencionEmpresa() {

//  const tenant = "629679fcca02f7eaa9e761d1";
    
//  axios.get(`http://localhost:11081/tenants/${tenant}`)
    
//  .then((response) => {
// console.log(typeof (response));
// console.log(response);

//  console.log(response.data.id);
    

// this.resultado = response.data.id;


//  //this.Empresas=(response.data);


//  this.Empresas = Object.values(this.resultado);


    
//  })
    
// .catch((error) => {
    
// console.log(error);
    
//  })
    
//  }
    
// }
















public ObtencionEmpresa() {

  const tenant = "629679fcca02f7eaa9e761d1"; //Aquí se debe cambiar a alguna "tenant" registrada en la base de datos



  axios.get(`http://localhost:11081/tenants/${tenant}`)

      .then((response) => {

          console.log(typeof (response));

          console.log(response);



          console.log(response.data.name);



          this.resultado = response.data.name;

      })

      .catch((error) => {

          console.log(error);

      })

}



public async ObtencionDeTodasLasEmpresas(){

  this.empresas = (await axios.get(`http://localhost:11081/tenants/`)).data;

}








async   EliminarAccount() {

  const account = "62b3a7aed80831d2daeb6948";



 let respuesta = ( await axios.delete(`http://localhost:11081/accounts/${account}`)).data;
      
if(respuesta==null){

  this.MostrarAccount="No se encontró la cuenta para eliminar";
  return

}

      this.MostrarAccount=respuesta.email+" "+respuesta.updatedAt;
 }






}