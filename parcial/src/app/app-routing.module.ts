import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "diabeticos", component: AppComponent },
  { path: "diabetico/agregar", component: AppComponent },
  { path: "", redirectTo: "diabeticos", pathMatch: "full" },// Cuando es la raíz
  { path: "**", redirectTo: "/diabeticos" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
