import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../core/i18n/locales';
import { ScrollRevealDirective } from '../../../../core/animation/scroll-reveal.directive';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import { FEATURED_PROJECTS } from '../../projects';
import { ProjectEvidenceComponent } from '../project-evidence/project-evidence.component';

@Component({
  selector: 'app-featured-work',
  imports: [RouterLink, ProjectEvidenceComponent, ScrollRevealDirective],
  templateUrl: './featured-work.component.html',
  styleUrl: './featured-work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturedWorkComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
  protected readonly projects = FEATURED_PROJECTS;
}
