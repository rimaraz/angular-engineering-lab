import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-http-page',
  imports: [LearningPageTemplate],
  templateUrl: './http-page.html',
  styleUrl: './http-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpPage {
  protected readonly topic = getLearningTopic('http-and-apis');
}
