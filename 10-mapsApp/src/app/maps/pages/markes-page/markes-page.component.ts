import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { LngLat, Map, Marker } from "mapbox-gl";

@Component({
  templateUrl: "./markes-page.component.html",
  styleUrl: "./markes-page.component.css",
})
export class MarkesPageComponent implements AfterViewInit {
  @ViewChild("map")
  public divMap!: ElementRef;
  private map?: Map;
  public currentCenter: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.divMap) throw "Elemento HTML no fue encontrado";
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: this.currentCenter,
      zoom: 10,
    });

    // const markerHtml = document.createElement("div");
    // markerHtml.innerHTML = "Carlos gomez";

    // const marker = new Marker({
    //   color: "red",
    //   element: markerHtml,
    // });
    // marker.setLngLat(this.currentCenter).addTo(this.map);
  }

  createMarke() {
    if (!this.map) return;

    const color = "#xxxxxx".replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16),
    );

    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lnglat: LngLat, color: string) {
    if (!this.map) return;
    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lnglat)
      .addTo(this.map);
  }
}
