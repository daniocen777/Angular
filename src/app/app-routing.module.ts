import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";
import { pagesModuleRoutes } from "./pages/pages.module.routes";

const routes: Routes = [{ path: "login", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
