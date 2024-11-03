import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { LngLat, Map } from "mapbox-gl";

@Component({
  templateUrl: "./zoom-range-page.component.html",
  styleUrl: "./zoom-range-page.component.css",
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild("map")
  public divMap!: ElementRef;

  public curremZoom: number = 10;
  private map?: Map;
  public currentCenter: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.divMap) throw "Elemento HTML no fue encontrado";
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: this.currentCenter,
      zoom: this.curremZoom,
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if (!this.map) throw "El mapa no se a inicializado";

    this.map.on("zoom", (env) => {
      this.curremZoom = this.map!.getZoom();
    });

    this.map.on("zoomend", (env) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on("move", (env) => {
      this.currentCenter = this.map!.getCenter();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChange(value: string) {
    this.curremZoom = Number(value);
    this.map?.zoomTo(this.curremZoom);
  }
}
