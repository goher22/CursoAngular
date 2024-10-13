import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuModule } from "primeng/menu";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  exports: [MenuModule],
})
export class PrimeNgModule {}
