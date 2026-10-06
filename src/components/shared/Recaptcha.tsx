import { useEffect, useRef } from 'react';
import { RECAPTCHA_SITE_KEY, isRecaptchaRendered, registerRecaptchaWidget } from '@/lib/recaptcha';

interface RecaptchaProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
}

export function Recaptcha({ onVerify, onExpire }: RecaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbacksRef = useRef({ onVerify, onExpire });

  useEffect(() => {
    callbacksRef.current = { onVerify, onExpire };
  });

  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || isRecaptchaRendered() || !containerRef.current) return;

    const render = () => {
      if (!window.grecaptcha || isRecaptchaRendered() || !containerRef.current) return;
      registerRecaptchaWidget(
        window.grecaptcha.render(containerRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token: string) => callbacksRef.current.onVerify(token),
          'expired-callback': () => callbacksRef.current.onExpire(),
        })
      );
    };

    if (window.grecaptcha) {
      window.grecaptcha.ready(render);
    } else {
      window.__recaptchaOnLoad = render;
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?onload=__recaptchaOnLoad&render=explicit';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  if (!RECAPTCHA_SITE_KEY) return null;
  return <div ref={containerRef} className="min-h-[78px]" />;
}
