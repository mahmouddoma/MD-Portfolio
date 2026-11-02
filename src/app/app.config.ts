import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  provideRouter,
  TitleStrategy,
  UrlSerializer,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';
import { NormalizedUrlSerializer } from './core/routing/normalized-url.serializer';
import { LocaleTitleStrategy } from './core/i18n/locale-title.strategy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    ),
    { provide: TitleStrategy, useClass: LocaleTitleStrategy },
    { provide: UrlSerializer, useClass: NormalizedUrlSerializer },
    provideClientHydration(withEventReplay()),
  ],
};
