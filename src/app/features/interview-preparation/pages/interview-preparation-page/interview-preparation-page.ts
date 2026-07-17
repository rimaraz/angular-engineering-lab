import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-interview-preparation-page',
  imports: [LearningPageTemplate],
  templateUrl: './interview-preparation-page.html',
  styleUrl: './interview-preparation-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterviewPreparationPage {
  protected readonly topic = getLearningTopic('interview-preparation');
}
