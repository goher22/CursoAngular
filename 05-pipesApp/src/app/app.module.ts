import { LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Configuración del locale de la app
import localeEsCO from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";

registerLocaleData(localeEsCO);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "es-CO",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
