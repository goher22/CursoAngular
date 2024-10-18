import { Component } from "@angular/core";
import { interval, Observable } from "rxjs";

@Component({
  selector: "app-uncommon-page",
  templateUrl: "./uncommon-page.component.html",
  styleUrl: "./uncommon-page.component.css",
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = "Carlos";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  };

  changeClient(): void {
    this.name = "Elizabeth";
    this.gender = "female";
  }

  //i18n Plural
  public clients: string[] = [
    "Carlos",
    "Juan David",
    "Andres",
    "Marian",
    "Elizabeth",
  ];

  public clientsMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esperando.",
    "=2": "tenemos dos clientes esperando.",
    other: "tenemos # clientes esperando.",
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: "Carlos",
    age: 36,
    address: "Ottawa, Canada",
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise((res, rej) => {
    setTimeout(() => {
      res("Tenemos data en la promesa.");
    }, 3500);
  });
}
