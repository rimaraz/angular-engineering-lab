import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-forms-page',
  imports: [LearningPageTemplate],
  templateUrl: './forms-page.html',
  styleUrl: './forms-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsPage {
  protected readonly topic = getLearningTopic('forms');
}
