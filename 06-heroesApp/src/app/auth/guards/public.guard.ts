import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  GuardResult,
  MaybeAsync,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class PublicGuard implements CanMatch, CanActivate {
  constructor(
    private authServices: AuthService,
    private router: Router,
  ) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authServices.checkAuthenticationStatus().pipe(
      tap((isAuthenticated) => {
        if (isAuthenticated) this.router.navigate(["./"]);
      }),
      map((isAuthenticated) => !isAuthenticated),
    );
  }

  canMatch(
    route: Route,
    segments: UrlSegment[],
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}