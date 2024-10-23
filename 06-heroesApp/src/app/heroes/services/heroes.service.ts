import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../interfaces/hero.interface";
import { environments } from "../../../environments/environments";

@Injectable({ providedIn: "root" })
export class HeroService {
  private baseUrl: string = environments.baseURL;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
}
