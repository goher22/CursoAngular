import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ29oZXIiLCJhIjoiY2t0N3RxNHIxMHZyeTJ1bXUxcXJvNTRzYiJ9.NVt9uGFBq9bxbPfcTqGJPw";

import { MapsRoutingModule } from "./maps-routing.module";
import { MiniMapComponent } from "./components/mini-map/mini-map.component";
import { MapsLayoutComponent } from "./layout/maps-layout/maps-layout.component";
import { FullScreenPageComponent } from "./pages/full-screen-page/full-screen-page.component";
import { MarkesPageComponent } from "./pages/markes-page/markes-page.component";
import { PropertiesPageComponent } from "./pages/properties-page/properties-page.component";
import { ZoomRangePageComponent } from "./pages/zoom-range-page/zoom-range-page.component";
import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";
import { SideMenuComponent } from "../alone/components/side-menu/side-menu.component";

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkesPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent,
  ],
})
export class MapsModule {}
