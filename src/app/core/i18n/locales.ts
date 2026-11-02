export type LocaleCode = 'en' | 'ar';

export interface Locale {
  readonly code: LocaleCode;
  readonly direction: 'ltr' | 'rtl';
  readonly label: string;
}

export const LOCALES = [
  { code: 'en', direction: 'ltr', label: 'English' },
  { code: 'ar', direction: 'rtl', label: 'العربية' },
] as const satisfies readonly Locale[];
