import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "[customLabel]",
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  private _color = "red";

  @Input()
  public set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  constructor(private el: ElementRef) {
    this.htmlElement = el;
  }

  setStyle() {
    if (!this.htmlElement) throw "El elemento html no existe";
    this.htmlElement.nativeElement.style.color = this._color;
  }
}
