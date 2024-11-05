import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[customLabel]",
})
export class CustomLabelDirective {
  private htmlElement?: ElementRef<HTMLElement>;
  constructor(private el: ElementRef) {
    this.htmlElement = el;
  }
}
