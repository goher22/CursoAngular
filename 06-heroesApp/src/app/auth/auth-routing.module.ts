import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { RegisterPageComponent } from "./pages/register-page/register-page.component";

//localhost:4200/auth/
const routes: Routes = [
  {
    path: "login",
    component: LayoutPageComponent,
  },
  {
    path: "new-account",
    component: RegisterPageComponent,
  },
  {
    path: "**",
    redirectTo: "login",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
