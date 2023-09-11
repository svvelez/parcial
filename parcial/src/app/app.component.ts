import { Component, OnInit } from '@angular/core';
import { Diabetico } from './diabetico';
import { DiabeticosService } from './app.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {


  constructor(private diabeticosService: DiabeticosService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

  diabeticoModel = new Diabetico("", "", "", "", "", "","", undefined)

  onSubmit() {
    this.diabeticosService.addDiabetico(this.diabeticoModel).subscribe(() => {
      this.snackBar.open('Diabetico guardada', undefined, {
        duration: 1500,
      });
      this.router.navigate(['/diabeticos']);
    })
  }



}
