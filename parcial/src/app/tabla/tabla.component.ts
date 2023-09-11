import { Component, OnInit } from '@angular/core';
import { DiabeticosService } from '../app.service';
import { Diabetico } from '../diabetico';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public diabeticos: MatTableDataSource<any> = new MatTableDataSource();

  ngOnInit() {
    this.obtenerDiabeticos();
  }

  constructor(private diabeticosService: DiabeticosService) { }


  obtenerDiabeticos() {
    return this.diabeticosService.getDiabeticos().subscribe(
      (data: any) => {

        this.diabeticos = new MatTableDataSource(data);
      },
    );

  }

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'eps', 'sintomas','nivel'];

}
