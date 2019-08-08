import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../shared/shared.module";
import { pagesModuleRoutes } from "./pages.module.routes";
import { IncrementadorComponent } from "./progress/incrementador/incrementador.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent
  ],
  // Para que otras páginas puedan usar estos componentes
  exports: [DashboardComponent, ProgressComponent, Graficas1Component],
  // Importar el módulo de shared (header, breadcrump, sidebar, pagenotfound)
  imports: [SharedModule, pagesModuleRoutes, FormsModule]
})
export class PagesModule {}
