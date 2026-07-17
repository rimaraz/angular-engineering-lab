import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { map } from 'rxjs';

import { navigationItems } from '../../core/data/learning-topics.data';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [Header, MatSidenavModule, RouterOutlet, Sidebar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayout {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly viewport = toSignal(
    this.breakpointObserver
      .observe(['(max-width: 767px)', '(min-width: 768px) and (max-width: 1199px)'])
      .pipe(
        map(({ breakpoints }) => {
          if (breakpoints['(max-width: 767px)']) {
            return 'mobile';
          }

          if (breakpoints['(min-width: 768px) and (max-width: 1199px)']) {
            return 'tablet';
          }

          return 'desktop';
        }),
      ),
    { initialValue: 'desktop' as const },
  );

  protected readonly projectTitle = 'Angular Engineering Lab';
  protected readonly navigationItems = navigationItems;
  protected readonly isMobileNavOpen = signal(false);
  protected readonly isSidebarCollapsed = signal(false);
  protected readonly isMobile = computed(() => this.viewport() === 'mobile');
  protected readonly isTablet = computed(() => this.viewport() === 'tablet');
  protected readonly isDesktop = computed(() => this.viewport() === 'desktop');
  protected readonly sidenavMode = computed(() => (this.isMobile() ? 'over' : 'side'));
  protected readonly sidenavOpened = computed(() => !this.isMobile() || this.isMobileNavOpen());

  constructor() {
    effect(() => {
      if (!this.isMobile()) {
        this.isMobileNavOpen.set(false);
      }

      if (!this.isDesktop()) {
        this.isSidebarCollapsed.set(false);
      }
    });
  }

  protected toggleMobileNavigation(): void {
    this.isMobileNavOpen.update((value) => !value);
  }

  protected closeMobileNavigation(): void {
    if (this.isMobile()) {
      this.isMobileNavOpen.set(false);
    }
  }

  protected toggleDesktopSidebar(): void {
    if (this.isDesktop()) {
      this.isSidebarCollapsed.update((value) => !value);
    }
  }
}
