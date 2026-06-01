import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { SeoService, SeoConfig } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html'
})
export class App implements OnInit {
  private readonly seoService = inject(SeoService);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.seoService.addStructuredData();

    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    ).subscribe((data) => {
      const seoData: SeoConfig = data['seo'];
      if (seoData) {
        this.seoService.updateSeoConfig(seoData);
      }
    });
  }
}
