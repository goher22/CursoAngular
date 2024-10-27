import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  GuardResult,
  MaybeAsync,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanMatch, CanActivate {
  constructor() {}

  canMatch(
    route: Route,
    segments: UrlSegment[],
  ): boolean | Observable<boolean> {
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | Observable<boolean> {
    return true;
  }
}
