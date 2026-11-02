import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Locale } from './locales';

/** Apply metadata after successful navigation, in both browser and prerendering. */
@Injectable()
export class LocaleTitleStrategy extends TitleStrategy {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let route = snapshot.root;
    while (route.firstChild) route = route.firstChild;

    const locale = route.data['locale'] as Locale | undefined;
    if (locale) {
      this.document.documentElement.lang = locale.code;
      this.document.documentElement.dir = locale.direction;
      this.meta.updateTag({
        property: 'og:locale',
        content: locale.code === 'ar' ? 'ar_EG' : 'en_EG',
      });
      this.meta.updateTag({
        property: 'og:locale:alternate',
        content: locale.code === 'ar' ? 'en_EG' : 'ar_EG',
      });
    }

    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(title);
      this.meta.updateTag({ property: 'og:title', content: title });
    }
    const description = route.data['description'] as string | undefined;
    if (description !== undefined) {
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:description', content: description });
    }
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
