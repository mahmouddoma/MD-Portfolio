import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../core/i18n/locales';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
}
