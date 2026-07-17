import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { LearningTopic } from '../../models/learning-topic.model';

@Component({
  selector: 'app-topic-card',
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatProgressBarModule, RouterLink],
  templateUrl: './topic-card.html',
  styleUrl: './topic-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicCard {
  readonly topic = input.required<LearningTopic>();
}
