import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-rxjs-page',
  imports: [LearningPageTemplate],
  templateUrl: './rxjs-page.html',
  styleUrl: './rxjs-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsPage {
  protected readonly topic = getLearningTopic('rxjs');
}
