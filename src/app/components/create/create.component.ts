import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/models/proyect';
import { ProjectService } from 'src/app/services/proyect.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public title_2:string;
  public project: Proyect;


  constructor(
      private _projectService: ProjectService

  ) { 
     this.title = "Crear proyecto ";
     this.title_2 ="(backend en desarrollo)";
     this.project = new Proyect('','','','',2021,'','');
    
  }

  ngOnInit(): void {
  }


   onSubmit(){
     console.log(this.project);

}

}
