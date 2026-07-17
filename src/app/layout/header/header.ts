import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  readonly title = input.required<string>();
  readonly isMobile = input(false);
  readonly isDesktop = input(false);
  readonly isSidebarCollapsed = input(false);

  readonly menuToggle = output<void>();
  readonly desktopCollapseToggle = output<void>();
}
