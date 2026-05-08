import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAVIGATION_DATA, NavItem } from '../../../layout/header/nav-data';

export interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb implements OnInit {
  @Input() currentPath: string = '';

  private router = inject(Router);
  breadcrumbs: BreadcrumbItem[] = [];

  ngOnInit() {
    this.updateBreadcrumbs(this.router.url);
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.updateBreadcrumbs(event.urlAfterRedirects || event.url);
    });
  }

  private updateBreadcrumbs(url: string) {
    const path = url.split('?')[0].split('#')[0];
    const foundPath = this.findBreadcrumbPath(path, NAVIGATION_DATA);

    if (foundPath && foundPath.length > 0) {
      // Filter out intermediate organizational groups that don't have routes
      // Always keep the root category (index 0) and the current page (last index)
      this.breadcrumbs = foundPath.filter((item, index) => 
        index === 0 || index === foundPath.length - 1 || item.route
      );
    } else if (this.currentPath) {
      this.breadcrumbs = [{ label: this.currentPath }];
    } else {
      this.breadcrumbs = [];
    }
  }
  private findBreadcrumbPath(url: string, items: NavItem[], currentPath: BreadcrumbItem[] = []): BreadcrumbItem[] | null {
    for (const item of items) {
      const newPath = [...currentPath, { label: item.label, route: item.route }];

      const itemRoute = item.route ? item.route.replace(/\/$/, '') : undefined;
      const targetUrl = url.replace(/\/$/, '');

      if (itemRoute === targetUrl) {
        return newPath;
      }

      if (item.children) {
        const found = this.findBreadcrumbPath(url, item.children, newPath);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
}