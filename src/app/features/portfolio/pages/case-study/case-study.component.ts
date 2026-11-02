import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../core/i18n/locales';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import { FEATURED_PROJECTS, Project } from '../../projects';
import { ProjectEvidenceComponent } from '../../components/project-evidence/project-evidence.component';

@Component({
  selector: 'app-case-study',
  imports: [RouterLink, ProjectEvidenceComponent],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyComponent {
  readonly locale = input.required<Locale>();
  readonly project = input.required<Project>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
  protected readonly copy = computed(() => this.project().copy[this.locale().code]);
  protected readonly nextProject = computed(() =>
    FEATURED_PROJECTS.find((project) => project.id !== this.project().id)!,
  );
}
