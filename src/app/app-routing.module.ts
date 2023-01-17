import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './web/detalle/detalle.component';
import { HomeComponent } from './web/home/home.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"detalle/:id", component:DetalleComponent}, //ruta-parámetros
  { path: "**", redirectTo: "", pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
