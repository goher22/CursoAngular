import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from "@angular/core";
import { LngLat, Map, Marker } from "mapbox-gl";

@Component({
  selector: "map-mini-map",
  templateUrl: "./mini-map.component.html",
  styleUrl: "./mini-map.component.css",
})
export class MiniMapComponent implements AfterViewInit {
  @Input()
  public lngLat?: [number, number];
  @ViewChild("map")
  public divMap!: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw "Elemento HTML no fue encontrado";
    if (!this.lngLat) throw "La latitud y longitud no esta definidad";
    const map = new Map({
      container: this.divMap.nativeElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });
    new Marker().setLngLat(this.lngLat).addTo(map);
  }
}
