import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { User, UserResponse } from "@interfaces/req-response";
import { delay } from "rxjs";

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UserResponse>("https://reqres.in/api/users")
      .pipe(delay(1500))
      .subscribe((res) => {
        console.log(res);
        this.#state.set({ loading: false, users: res.data });
      });
  }
}
