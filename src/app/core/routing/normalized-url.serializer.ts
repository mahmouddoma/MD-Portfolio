import { DefaultUrlSerializer, UrlTree } from '@angular/router';

/** Treat trailing slashes consistently without changing query strings or fragments. */
export class NormalizedUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    const separator = url.search(/[?#]/);
    const path = separator < 0 ? url : url.slice(0, separator);
    const suffix = separator < 0 ? '' : url.slice(separator);
    return super.parse((path.replace(/\/+$/, '') || '/') + suffix);
  }
}
