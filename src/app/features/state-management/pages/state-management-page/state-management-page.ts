import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-state-management-page',
  imports: [LearningPageTemplate],
  templateUrl: './state-management-page.html',
  styleUrl: './state-management-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StateManagementPage {
  protected readonly topic = getLearningTopic('state-management');
}
