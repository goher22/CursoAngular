import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Hero, Publisher } from "../../interfaces/hero.interface";
import { HeroService } from "../../services/heroes.service";
import { switchMap } from "rxjs";

@Component({
  selector: "app-new-page",
  templateUrl: "./new-page.component.html",
  styles: ``,
})
export class NewPageComponent implements OnInit {
  public heroForm = new FormGroup({
    id: new FormControl<string>(""),
    superhero: new FormControl<string>("", { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(""),
    first_appearance: new FormControl<string>(""),
    characters: new FormControl<string>(""),
    alt_img: new FormControl<string>(""),
  });
  public publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics",
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics",
    },
  ];

  constructor(
    private heroesService: HeroService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    if (!this.router.url.includes("edit")) return;

    this.activatedRouter.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroeById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl("/");
        this.heroForm.reset(hero);
        return;
      });
  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }
  onSubmit(): void {
    if (this.heroForm.invalid) return;
    if (this.currentHero.id) {
      this.heroesService
        .updateHero(this.currentHero)
        .subscribe((hero) => console.log(hero));
    } else {
      this.heroesService
        .addHero(this.currentHero)
        .subscribe((hero) => console.log(hero));
    }
  }
}
