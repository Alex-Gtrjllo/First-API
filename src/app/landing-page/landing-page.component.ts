import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

//Decoradores
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
///Clase Principal del componente de la logica de negocio

export class LandingPageComponent implements OnInit {

  //Nombre: Tipo = valor
  products = [];
  status : boolean = false;

  info : String = 'No hay datos'
  nameButton : String = 'Mostrar'

  constructor( private serviceService : ServiceService) { }

  ngOnInit(): void {
    
    this.serviceService.getProduct("products/").subscribe((data : any[]) => {
      console.log(data);

      this.products = data;

    })


  }

  sendService(){

    
  }

  cleanService(){
    this.products = [];
  }

  onClickMe(){
    this.info = 'Si hay datos'
  }

  showHide(){
    this.status = !this.status
    console.log(this.status);
    if(this.status){
      this.nameButton = 'Ocultar';
    }else{
      this.nameButton = 'Mostar';
    }
  }

}
