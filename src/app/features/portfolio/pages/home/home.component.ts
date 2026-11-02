import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../core/i18n/locales';
import { FeaturedWorkComponent } from '../../components/featured-work/featured-work.component';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FeaturedWorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
}
