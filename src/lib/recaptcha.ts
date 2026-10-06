declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, params: Record<string, unknown>) => number;
      ready: (cb: () => void) => void;
      reset: (id: number) => void;
    };
    __recaptchaOnLoad?: () => void;
  }
}

export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined;

export function isRecaptchaConfigured(): boolean {
  return Boolean(RECAPTCHA_SITE_KEY);
}

let widgetId: number | null = null;

export function registerRecaptchaWidget(id: number) {
  widgetId = id;
}

export function isRecaptchaRendered(): boolean {
  return widgetId !== null;
}

export function resetRecaptcha() {
  if (window.grecaptcha && widgetId !== null) {
    window.grecaptcha.reset(widgetId);
  }
}
