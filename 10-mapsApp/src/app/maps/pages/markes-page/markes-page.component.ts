import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { LngLat, Map, Marker } from "mapbox-gl";

interface MarkerAndColor {
  marker: Marker;
  color: string;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: "./markes-page.component.html",
  styleUrl: "./markes-page.component.css",
})
export class MarkesPageComponent implements AfterViewInit {
  @ViewChild("map")
  public divMap!: ElementRef;

  private map?: Map;
  public currentCenter: LngLat = new LngLat(-74.5, 40);
  public markers: MarkerAndColor[] = [];

  ngAfterViewInit(): void {
    if (!this.divMap) throw "Elemento HTML no fue encontrado";
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: this.currentCenter,
      zoom: 10,
    });

    this.readFromLocalStorage();

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

    this.markers.push({
      marker,
      color,
    });

    this.saveToLocalStorage();
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map((marker) => ({
      color: marker.color,
      lngLat: marker.marker.getLngLat().toArray(),
    }));

    localStorage.setItem("plainMarkers", JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem("plainMarkers") ?? "[]";
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, lngLat }) => {
      const coords = new LngLat(lngLat[0], lngLat[1]);

      this.addMarker(coords, color);
    });
  }
}
