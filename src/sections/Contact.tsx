import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { submitLead } from '@/lib/leadApi';
import { Recaptcha } from '@/components/shared/Recaptcha';
import { isRecaptchaConfigured, resetRecaptcha } from '@/lib/recaptcha';

const SERVICE_LABELS: Record<string, string> = {
  digital: 'Dijital Pazarlama',
  meta: 'Meta Reklamları',
  google: 'Google Ads',
  social: 'Sosyal Medya Yönetimi',
  video: 'Video & Fotoğraf',
  drone: 'Drone Çekim',
  web: 'Web Tasarım',
  software: 'Yazılım Geliştirme',
};

// Reklam bütçesi sorusu yalnızca reklam hizmetlerinde sorulur
const ADS_SERVICES = ['meta', 'google'];

const BUDGET_OPTIONS = [
  { value: '10-25k', label: '10.000 - 25.000 TL' },
  { value: '25-50k', label: '25.000 - 50.000 TL' },
  { value: '50-100k', label: '50.000 - 100.000 TL' },
  { value: '100k+', label: '100.000 TL üzeri' },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'E-posta',
    value: 'info@craftsoft.com.tr',
    href: 'mailto:info@craftsoft.com.tr'
  },
  {
    icon: Phone,
    label: 'Telefon',
    value: '+90 555 123 45 67',
    href: 'tel:+905551234567'
  },
  {
    icon: MapPin,
    label: 'Konum',
    value: 'İstanbul, Türkiye',
    href: 'https://www.google.com/maps/search/?api=1&query=%C4%B0stanbul'
  }
];

export function Contact({ hideHeader = false }: { hideHeader?: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    phone: '',
    message: ''
  });
  const [kvkkAccepted, setKvkkAccepted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaEnabled = isRecaptchaConfigured();
  const isAdsService = ADS_SERVICES.includes(formData.service);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.service) {
      toast.error('Lütfen ilgilendiğiniz hizmeti seçin.');
      return;
    }

    if (!kvkkAccepted) {
      toast.error('Devam etmek için KVKK aydınlatma metnini onaylayın.');
      return;
    }

    if (recaptchaEnabled && !recaptchaToken) {
      toast.error('Lütfen "Ben robot değilim" doğrulamasını tamamlayın.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { forwarded } = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        company: formData.company || undefined,
        service: formData.service,
        serviceLabel: SERVICE_LABELS[formData.service] || formData.service,
        budget: formData.budget || undefined,
        budgetLabel: BUDGET_OPTIONS.find((b) => b.value === formData.budget)?.label,
        message: formData.message,
        source: 'craftsoft-website',
        page: window.location.href,
        recaptchaToken: recaptchaToken || undefined,
        submittedAt: new Date().toISOString(),
      });

      setIsSubmitted(true);
      if (forwarded) {
        toast.success('Talebiniz alındı ve değerlendirilmek üzere Salvo Agent sistemine iletildi. En kısa sürede dönüş yapacağız.');
      } else {
        toast.success('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      }

      // 3 saniye sonra formu sıfırla
      setTimeout(() => {
        setIsSubmitted(false);
        setKvkkAccepted(false);
        setRecaptchaToken(null);
        resetRecaptcha();
        setFormData({ name: '', email: '', company: '', service: '', budget: '', phone: '', message: '' });
      }, 3000);
    } catch {
      toast.error('Mesajınız gönderilemedi. Lütfen tekrar deneyin veya bize e-posta ile ulaşın.');
      setRecaptchaToken(null);
      resetRecaptcha();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value,
      // Reklam hizmeti değişince bütçe seçimini sıfırla
      budget: ADS_SERVICES.includes(value) ? prev.budget : '',
    }));
  };

  return (
    <section id="iletisim" ref={sectionRef} className="relative py-24 sm:py-32 bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!hideHeader && (
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-4">
            İletişim
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projenizi{' '}
            <span className="gradient-text">Konuşalım</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fikirlerinizi hayata geçirmek için bir adım ötedeyiz. Bize ulaşın, birlikte çalışalım.
          </p>
        </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div 
            className={`
              lg:col-span-2 space-y-6
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
            `}
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    {...(item.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      <Icon className="w-5 h-5 text-craft-orange" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-sm">{item.label}</div>
                      <div className="text-gray-900 font-medium group-hover:text-craft-orange transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Working Hours */}
            <div className="p-6 rounded-xl bg-white border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-craft-orange" />
                <h4 className="text-gray-900 font-semibold">Çalışma Saatleri</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Pazartesi - Cuma</span>
                  <span className="text-gray-900">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Cumartesi</span>
                  <span className="text-gray-900">10:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pazar</span>
                  <span className="text-gray-400">Kapalı</span>
                </div>
              </div>
            </div>

            {/* Quick Response */}
            <div className="p-6 rounded-xl bg-orange-50 border border-orange-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-900 font-medium">Hızlı Yanıt</div>
                  <div className="text-gray-500 text-sm">24 saat içinde dönüş yapıyoruz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`
              lg:col-span-3
              transition-all duration-700 delay-200
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
            `}
          >
            <form 
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Adınız Soyadınız *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınız Soyadınız"
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-craft-orange/50 focus:ring-craft-orange/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">E-posta Adresiniz *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@email.com"
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-craft-orange/50 focus:ring-craft-orange/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Telefon Numaranız</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-craft-orange/50 focus:ring-craft-orange/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">Şirket Adı</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Şirket Adı"
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-craft-orange/50 focus:ring-craft-orange/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-700">İlgilendiğiniz Hizmet *</Label>
                  <Select
                    value={formData.service || undefined}
                    onValueChange={handleServiceChange}
                    required
                  >
                    <SelectTrigger
                      id="service"
                      className="w-full h-11 px-4 bg-gray-50 border-gray-200 text-gray-900 rounded-xl focus:ring-craft-orange/20 focus:border-craft-orange/50 data-[placeholder]:text-gray-400"
                    >
                      <SelectValue placeholder="Hizmet seçin" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      {Object.entries(SERVICE_LABELS).map(([value, label]) => (
                        <SelectItem key={value} value={value} className="rounded-lg focus:bg-orange-50 focus:text-craft-orange">
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {isAdsService ? (
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-700">Aylık Reklam Bütçeniz</Label>
                    <Select
                      value={formData.budget || undefined}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                    >
                      <SelectTrigger
                        id="budget"
                        className="w-full h-11 px-4 bg-gray-50 border-gray-200 text-gray-900 rounded-xl focus:ring-craft-orange/20 focus:border-craft-orange/50 data-[placeholder]:text-gray-400"
                      >
                        <SelectValue placeholder="Bütçe aralığı seçin" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {BUDGET_OPTIONS.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value} className="rounded-lg focus:bg-orange-50 focus:text-craft-orange">
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="project-type" className="text-gray-700">Proje Türü</Label>
                    <Input
                      id="project-type"
                      name="projectTypeNote"
                      placeholder="Örn. kurumsal site, QR menü, ihale paneli..."
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-craft-orange/50 focus:ring-craft-orange/20"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-gray-700">Proje Detayları *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Projeniz hakkında kısa bir bilgi verin..."
                  required
                  rows={5}
                  className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-craft-orange/50 focus:ring-craft-orange/20 resize-none"
                />
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Checkbox
                  id="kvkk"
                  checked={kvkkAccepted}
                  onCheckedChange={(checked) => setKvkkAccepted(checked === true)}
                  className="mt-0.5 data-[state=checked]:bg-craft-orange data-[state=checked]:border-craft-orange"
                />
                <label htmlFor="kvkk" className="text-sm text-gray-500 leading-relaxed cursor-pointer select-none">
                  Kişisel verilerimin,{' '}
                  <Link to="/yasal/kvkk-aydinlatma-metni" className="text-craft-orange hover:underline" target="_blank">
                    KVKK Aydınlatma Metni
                  </Link>{' '}
                  kapsamında teklif verilmesi amacıyla işlenmesini kabul ediyorum. *
                </label>
              </div>

              {recaptchaEnabled && (
                <div className="mb-6">
                  <Recaptcha
                    onVerify={setRecaptchaToken}
                    onExpire={() => setRecaptchaToken(null)}
                  />
                  <p className="text-gray-400 text-xs mt-2">
                    Bu site reCAPTCHA ile korunmaktadır. Google{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-craft-orange">Gizlilik</a> ve{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-craft-orange">Şartlar</a> politikaları geçerlidir.
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted || (recaptchaEnabled && !recaptchaToken)}
                className={`
                  w-full py-6 text-base font-medium transition-all duration-300
                  ${isSubmitted 
                    ? 'bg-emerald-500 hover:bg-emerald-500' 
                    : 'gradient-bg hover:opacity-90 hover:shadow-glow-orange'
                  }
                `}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Gönderiliyor...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Gönderildi!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Ücretsiz Teklif Al
                  </>
                )}
              </Button>

              <p className="text-center text-gray-400 text-xs mt-4">
                Bilgileriniz gizlilik politikamız kapsamında korunmaktadır.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
