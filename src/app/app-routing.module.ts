import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';

// definimos las rutas que se capturan en app.component.html 
const routes: Routes = [
{path:'', component: AboutComponent},
{path:'sobre-mi', component: AboutComponent},
{path:'proyectos', component: ProyectsComponent},
{path:'crear-proyecto',component:CreateComponent},
{path:'contacto',component:ContactComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
