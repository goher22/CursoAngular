import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { PanelModule } from "primeng/panel";

@NgModule({
  imports: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenuModule,
    MenubarModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}
