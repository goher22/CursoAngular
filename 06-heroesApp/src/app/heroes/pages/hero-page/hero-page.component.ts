import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../services/heroes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { delay, switchMap } from "rxjs";
import { Hero } from "../../interfaces/hero.interface";

@Component({
  selector: "app-hero-page",
  templateUrl: "./hero-page.component.html",
  styles: ``,
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;
  constructor(
    private heroesServices: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(3000),
        switchMap(({ id }) => this.heroesServices.getHeroeById(id)),
      )
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(["/heroes/list"]);
        this.hero = hero;
        return;
      });
  }

  public goBack(): void {
    this.router.navigateByUrl("heroes/list");
  }
}
