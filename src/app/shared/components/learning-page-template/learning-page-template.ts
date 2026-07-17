import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { LearningTopic } from '../../models/learning-topic.model';
import { ExerciseCard } from '../exercise-card/exercise-card';

@Component({
  selector: 'app-learning-page-template',
  imports: [
    ExerciseCard,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
  ],
  templateUrl: './learning-page-template.html',
  styleUrl: './learning-page-template.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearningPageTemplate {
  readonly topic = input.required<LearningTopic>();
}
