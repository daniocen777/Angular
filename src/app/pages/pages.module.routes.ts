import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const pagesRoutes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graficas1", component: Graficas1Component },
      { path: "nopage", component: NopagefoundComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", redirectTo: "nopage", pathMatch: "full" },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class pagesModuleRoutes {}
