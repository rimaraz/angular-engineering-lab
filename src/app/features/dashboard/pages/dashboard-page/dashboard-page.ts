import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { learningTopics } from '../../../../core/data/learning-topics.data';
import { TopicCard } from '../../../../shared/components/topic-card/topic-card';

@Component({
  selector: 'app-dashboard-page',
  imports: [MatCardModule, MatChipsModule, MatIconModule, TopicCard],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPage {
  protected readonly topics = learningTopics;
  protected readonly totalExercises = this.topics.reduce((sum, topic) => sum + topic.exercises.length, 0);
}
