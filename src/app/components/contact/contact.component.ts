import { Component, OnInit } from '@angular/core';
import { ContactUser } from 'src/app/models/contacto.usuario';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
  
  
})
export class ContactComponent implements OnInit {
  public title: string;
  public usuario: ContactUser;

  constructor() { 
    
    this.title = "Contacto";
    this.usuario = new ContactUser('','','','')
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Evento Submit lanzado");
    console.log(this.usuario)
  }

}
