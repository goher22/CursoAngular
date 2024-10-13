import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MenubarModule } from "primeng/menubar";
import { MenuModule } from "primeng/menu";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [MenuModule, MenubarModule],
})
export class PrimeNgModule {}
