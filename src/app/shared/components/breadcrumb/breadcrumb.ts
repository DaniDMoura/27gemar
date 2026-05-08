import { Component, Input, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Breadcrumb implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  @Input() customTrail?: BreadcrumbItem[];
  
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit() {
    if (this.customTrail) {
      this.breadcrumbs = this.customTrail;
    } else {
      this.generateBreadcrumbs();
      
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.generateBreadcrumbs();
      });
    }
  }

  private generateBreadcrumbs() {
    const root = this.activatedRoute.root;
    this.breadcrumbs = this.createBreadcrumbs(root);
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadcrumbItem[] = []): BreadcrumbItem[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['seo']?.title || child.snapshot.data['breadcrumb'];
      
      if (label && label !== 'Página Inicial') {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
