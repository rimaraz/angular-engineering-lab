import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { NavigationItem } from '../../shared/models/learning-topic.model';

@Component({
  selector: 'app-sidebar',
  imports: [MatDividerModule, MatIconModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  readonly items = input.required<NavigationItem[]>();
  readonly collapsed = input(false);
  readonly isMobile = input(false);

  readonly navigate = output<void>();
}
