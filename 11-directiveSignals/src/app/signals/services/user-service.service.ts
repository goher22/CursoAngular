import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable, tap } from "rxjs";
import { SingleUserReponse, User } from "../interfaces/user-request.interface";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  private http = inject(HttpClient);
  private baseUrl: string = "https://reqres.in/api/users";

  getUserByIs(id: number): Observable<User> {
    return this.http.get<SingleUserReponse>(`${this.baseUrl}/${id}`).pipe(
      map((response) => response.data),
      // tap(),
    );
  }
}
