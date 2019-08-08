import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"]
})
export class ProgressComponent implements OnInit {
  titulo1: string = "Incrementador Azul";
  titulo2: string = "Incrementador Verde";

  porcentaje1: number = 20; // barra azul x defecto
  porcentaje2: number = 30; // barra verde x defecto

  constructor() {}

  ngOnInit() {}
}
