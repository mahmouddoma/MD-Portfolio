import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Locale } from '../../../../core/i18n/locales';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import { ProfileLinksComponent } from '../../components/profile-links/profile-links.component';

@Component({
  selector: 'app-about',
  imports: [ProfileLinksComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
}
