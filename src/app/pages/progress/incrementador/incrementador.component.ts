import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-incrementador",
  templateUrl: "./incrementador.component.html",
  styleUrls: ["./incrementador.component.scss"]
})
export class IncrementadorComponent implements OnInit {
  //porcentaje: number = 50;

  @Input() title: string; // viene del padre
  @Input() progreso: number; // viene del padre

  // De hijo a padre
  @Output() cambio: EventEmitter<number> = new EventEmitter();

  // Para la referencia html
  @ViewChild("txtProress", { static: true }) txtProress: ElementRef;

  // Para actualizar el progress cuando se cambie el input text del incrimentador
  onChange(newValue: number) {
    // newValue => lo que viene del input
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProress.nativeElement.value = this.progreso;

    this.cambio.emit(this.progreso);
  }

  constructor() {}

  ngOnInit() {}

  cambiaValor(valor: number) {
    if (this.progreso > 100 && this.progreso < 0) {
      this.progreso = 100;
    }

    this.progreso = this.progreso + valor;

    this.cambio.emit(this.progreso);

    // Para hacer el foco
    this.txtProress.nativeElement.focus();
  }
}
