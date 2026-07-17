import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';

import { LearningExercise } from '../../models/learning-topic.model';

@Component({
  selector: 'app-exercise-card',
  imports: [MatCardModule, MatChipsModule, MatDividerModule],
  templateUrl: './exercise-card.html',
  styleUrl: './exercise-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExerciseCard {
  readonly exercise = input.required<LearningExercise>();
}
