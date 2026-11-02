import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Locale } from '../../../../core/i18n/locales';
import { ScrollRevealDirective } from '../../../../core/animation/scroll-reveal.directive';
import { FeaturedWorkComponent } from '../../components/featured-work/featured-work.component';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import { SUPPORTING_PROJECTS } from '../../projects';
import { ProjectEvidenceComponent } from '../../components/project-evidence/project-evidence.component';

@Component({
  selector: 'app-work',
  imports: [FeaturedWorkComponent, ProjectEvidenceComponent, ScrollRevealDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
  protected readonly independentProjects = SUPPORTING_PROJECTS.filter(
    (project) => project.kind === 'freelance',
  );
  protected readonly enterpriseProjects = SUPPORTING_PROJECTS.filter(
    (project) => project.kind === 'enterprise',
  );
}
