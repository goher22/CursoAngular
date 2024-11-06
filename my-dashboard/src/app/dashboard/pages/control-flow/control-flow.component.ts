import { Component, signal } from "@angular/core";

type Grade = "A" | "B" | "C" | "D" | "E" | "F";

@Component({
  standalone: true,
  imports: [],
  templateUrl: "./control-flow.component.html",
  styles: ``,
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>("A");

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
