import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-routing-page',
  imports: [LearningPageTemplate],
  templateUrl: './routing-page.html',
  styleUrl: './routing-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutingPage {
  protected readonly topic = getLearningTopic('routing');
}
