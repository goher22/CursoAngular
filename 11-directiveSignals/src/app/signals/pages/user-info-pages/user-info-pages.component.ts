import { Component, inject, OnInit, signal } from "@angular/core";
import { UserServiceService } from "../../services/user-service.service";
import { User } from "../../interfaces/user-request.interface";

@Component({
  templateUrl: "./user-info-pages.component.html",
  styleUrl: "./user-info-pages.component.css",
})
export class UserInfoPagesComponent implements OnInit {
  private userService: UserServiceService = inject(UserServiceService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if (id <= 0) return;
    this.userId.set(id);
    this.currentUser.set(undefined);
    this.userService
      .getUserByIs(id)
      .subscribe((user) => this.currentUser.set(user));
  }
}
