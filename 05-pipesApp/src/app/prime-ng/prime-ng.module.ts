import { NgModule } from "@angular/core";

import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";

@NgModule({
  imports: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenuModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule,
  ],
})
export class PrimeNgModule {}
