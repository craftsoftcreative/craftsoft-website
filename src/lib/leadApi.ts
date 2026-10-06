export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  serviceLabel: string;
  budget?: string;
  budgetLabel?: string;
  message: string;
  source: 'craftsoft-website';
  page: string;
  recaptchaToken?: string;
  submittedAt: string;
}

const SALVO_ENDPOINT = import.meta.env.VITE_SALVO_ENDPOINT as string | undefined;

export function isSalvoConfigured(): boolean {
  return Boolean(SALVO_ENDPOINT && SALVO_ENDPOINT.startsWith('http'));
}

/**
 * Teklif talebini Salvo Agent sistemine iletir.
 * Endpoint yapılandırılmamışsa (dev ortamı) veriyi yerel olarak başarılı sayar
 * ve forwarded: false döner.
 */
export async function submitLead(payload: LeadPayload): Promise<{ forwarded: boolean }> {
  if (!isSalvoConfigured()) {
    console.info('[Salvo Agent] Endpoint yapılandırılmadı, talep iletilmedi:', payload);
    return { forwarded: false };
  }

  const res = await fetch(SALVO_ENDPOINT as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: 'website_lead', ...payload }),
  });

  if (!res.ok) {
    throw new Error(`Salvo Agent isteği başarısız (${res.status})`);
  }
  return { forwarded: true };
}
