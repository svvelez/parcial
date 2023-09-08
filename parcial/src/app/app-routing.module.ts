import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  { path: "diabeticos", component: AppComponent },
  { path: "diabetico/agregar", component: AppComponent },
  { path: "diabeticos/tabla", component: TablaComponent },
  { path: "", redirectTo: "diabeticos", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/diabeticos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
