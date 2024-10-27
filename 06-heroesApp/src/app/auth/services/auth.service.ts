import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environments } from "../../../environments/environments";
import { User } from "../interfaces/user.interface";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = environments.baseURL;
  private user?: User;

  constructor(private http: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      tap((user) => localStorage.setItem("token", "asdnkajskd")),
    );
  }

  checkAuthenticationStatus(): Observable<boolean> | boolean {
    if (!localStorage.getItem("token")) return false;
    const token = localStorage.getItem("token");

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false)),
    );
    return of(true);
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }
}