import { Component, OnInit } from '@angular/core';
import { Diabetico } from './diabetico';
import { DiabeticosService } from './app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  glucemia!: number;
  diagnostico!: string;
  recomendacion!: string;
  
  constructor(private diabeticosService: DiabeticosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }


  ngOnInit(): void {
   
  }

  diabeticoModel = new Diabetico("", "", "", "", "", "",  undefined);

  onSubmit() {
    this.diabeticoModel.diagnostico = this.diagnostico;
    this.diabeticosService.addDiabetico(this.diabeticoModel).subscribe(() => {
      this.snackBar.open('Diabetico guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/diabeticos']);
    })
    this.diabeticosService.getDiabeticos().subscribe();
   
  }

  

  validar() {

    if (this.glucemia >= 7.0 && this.glucemia <= 13.8) {
      this.diagnostico = 'HIPERGLICEMIA AISLADA';
      this.recomendacion = 'Indicar glucemia en ayunas y TGP en pacientes sin diagnóstico. - Si deshidratación, rehidratación oral o EV según las demandas. - Reevaluar conducta terapéutica en diabéticos y cumplimiento de los pilares. - Reevaluar dosis de hipoglucemiantes. ';
    }

    if (this.glucemia > 13.8 && this.glucemia < 33) {
      this.diagnostico = 'CETOACIDOSIS DIABÉTICA ';
      this.recomendacion = 'Coordinar traslado y comenzar tratamiento. - Hidratación con Solución salina 40 ml/Kg en las primeras 4 horas. 1-2 L la primera hora. - Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U ≤ 1mv, ondas U≤ T). - Evitar insulina hasta desaparecer signos de hipopotasemia. - Administrar insulina simple 0,1 U/kg EV después de hidratar ';
    }

    if (this.glucemia > 33) {
      this.diagnostico = 'HIPEROSMOLAR HIPERGLUCÉMICO NO CETÓSICO';
      this.recomendacion = 'Coordinar traslado y comenzar tratamiento. - Hidratación con Solución Salina 10-15 ml/Kg/h hasta conseguir estabilidad hemodinámica. - Administrar potasio al restituirse la diuresis o signos de hipopotasemia (depresión del ST, Onda U ≤ 1mv, ondas U≤ T). ';
    }

    alert(this.diagnostico);
    alert(this.recomendacion);

  }


}
