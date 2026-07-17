import { ChangeDetectionStrategy, Component } from '@angular/core';

import { getLearningTopic } from '../../../../core/data/learning-topics.data';
import { LearningPageTemplate } from '../../../../shared/components/learning-page-template/learning-page-template';

@Component({
  selector: 'app-dependency-injection-page',
  imports: [LearningPageTemplate],
  templateUrl: './dependency-injection-page.html',
  styleUrl: './dependency-injection-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DependencyInjectionPage {
  protected readonly topic = getLearningTopic('dependency-injection');
}
