import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/components/button/button';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NAVIGATION_DATA, NavItem } from './nav-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, Button, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private router = inject(Router);
  isScrolled = false;
  menuOpen = false;
  isOpaque = false;
  isHovered = false; 
  navItems = NAVIGATION_DATA;
  
  openSubmenus: { [key: string]: boolean } = {};

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      this.isOpaque = url !== '/' && url !== '';
      this.closeMenu();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.openSubmenus = {};
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.openSubmenus = {};
  }

  toggleSubmenu(label: string, event: Event) {
    event.stopPropagation();
    this.openSubmenus[label] = !this.openSubmenus[label];
  }

  isSubmenuOpen(label: string): boolean {
    return !!this.openSubmenus[label];
  }
}
