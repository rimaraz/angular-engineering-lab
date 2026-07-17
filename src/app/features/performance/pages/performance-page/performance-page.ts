import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-performance-page',
  imports: [LearningPageTemplate],
  templateUrl: './performance-page.html',
  styleUrl: './performance-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformancePage {
  protected readonly topic = getLearningTopic('performance');
}
