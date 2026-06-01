import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/components/button/button';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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

  // New state for mobile sliding panels
  activeMobileSubmenu: NavItem | null = null;

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe((event) => {
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
      this.backToMainMenu();
    }
  }

  closeMenu() {
    this.menuOpen = false;
    this.activeMobileSubmenu = null;
  }

  // Methods for drill-down mobile menu
  openMobileSubmenu(item: NavItem) {
    if (item.children) {
      this.activeMobileSubmenu = item;
    }
  }

  backToMainMenu() {
    this.activeMobileSubmenu = null;
  }
}
