import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Locale } from '../../../../core/i18n/locales';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import { PROFILE } from '../../profile';

@Component({
  selector: 'app-profile-links',
  styleUrl: './profile-links.component.scss',
  templateUrl: './profile-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileLinksComponent {
  readonly locale = input.required<Locale>();
  protected readonly labels = computed(() => PORTFOLIO_CONTENT[this.locale().code].resources);
  protected readonly resources = PROFILE.resources;
}
