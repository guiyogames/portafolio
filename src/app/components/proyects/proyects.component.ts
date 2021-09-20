import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  public title:string; 
  public subtitle:string; 
  public image:string ="assets/img/logo_angular.jpg"
  public image2:string ="assets/img/html_css_javascript.jpg"

  

  constructor() { 

    this.title ="Página de proyectos";
    this.subtitle="Enlace directo a proyectos"; 
    
    
  }

  ngOnInit(): void {
  }

}
