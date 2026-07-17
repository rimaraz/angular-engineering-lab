import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-testing-page',
  imports: [LearningPageTemplate],
  templateUrl: './testing-page.html',
  styleUrl: './testing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestingPage {
  protected readonly topic = getLearningTopic('testing');
}
