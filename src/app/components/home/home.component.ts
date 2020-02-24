import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <p>
      Párrafo desde app.component no aplica estilo del css.component
    </p>

    <app-ng-class></app-ng-class>

    <h2>Directiva personalizada</h2>
    <p [appResaltado]="'orange'">
      Con hover, cambiar el <strong> color</strong> según una directiva
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
