import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-signals-page',
  imports: [LearningPageTemplate],
  templateUrl: './signals-page.html',
  styleUrl: './signals-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsPage {
  protected readonly topic = getLearningTopic('signals');
}
