import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle:string;
  public email:string; 
  public image:string ="assets/img/foto_guille_portafolio2.jpg"

  constructor() { 
  this.title = "Visintini Guillermo"
  this.subtitle ="Desarrollo web front-end"
  this.email ="guillermo@.com"

  }

  ngOnInit(): void {
  }

}
