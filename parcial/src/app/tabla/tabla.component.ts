import { Component, OnInit } from '@angular/core';
import { DiabeticosService } from '../app.service';
import { Diabetico } from '../diabetico';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  diabeticos: Diabetico[] = [
    new Diabetico("Juliana", "Lozano", "216464", "sura", "cuadro neurovegetativo", "2")
  ];

  constructor(private diabeticosService: DiabeticosService) { }

 
   ngOnInit() {
    this.obtenerDiabeticos();
  }

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'eps', 'sintomas', 'nivel'];
  obtenerDiabeticos() {
    return this.diabeticosService.getDiabeticos().subscribe((diabeticos:any) => this.diabeticos = diabeticos);
  }

}
