import { NormalizedUrlSerializer } from './normalized-url.serializer';

describe('NormalizedUrlSerializer', () => {
  const serializer = new NormalizedUrlSerializer();

  it('normalizes a trailing path while preserving query values and fragments', () => {
    const tree = serializer.parse('/ar/work/devora///?returnTo=%2Fen%2F#contact');
    expect(serializer.serialize(tree)).toBe('/ar/work/devora?returnTo=%2Fen%2F#contact');
  });

  it('preserves the root route', () => {
    expect(serializer.serialize(serializer.parse('/'))).toBe('/');
  });
});
