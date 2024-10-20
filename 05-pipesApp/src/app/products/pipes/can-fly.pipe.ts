import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "canFlye",
})
export class CanFlyePipe implements PipeTransform {
  transform(value: boolean): "vuela" | "no vuela" {
    return value ? "vuela" : "no vuela";
  }
}
