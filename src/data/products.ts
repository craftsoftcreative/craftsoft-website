import { UtensilsCrossed, ShoppingCart, Bot, type LucideIcon } from 'lucide-react';

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductStep {
  title: string;
  description: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  status: 'Yayında' | 'Aktif' | 'Geliştirme';
  url: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  description: string;
  heroTag: string;
  heroDescription: string;
  highlights: { value: string; label: string }[];
  problem: string[];
  solution: string[];
  features: ProductFeature[];
  howItWorks: ProductStep[];
  techStack: string[];
  targetAudience: string[];
  faqs: ProductFAQ[];
}

export const products: Product[] = [
  {
    slug: 'akillisofra',
    name: 'AkıllıSofra',
    tagline: 'Akıllı Restoran Yönetimi',
    status: 'Yayında',
    url: 'https://akillisofra.com.tr',
    icon: UtensilsCrossed,
    color: 'text-orange-500',
    gradient: 'from-orange-500 to-red-500',
    description:
      'Restoranlar için kapsamlı dijital çözüm. QR menü, sipariş yönetimi, mutfak ekranları ve raporlama sistemi.',
    heroTag: 'Restoran Teknolojileri',
    heroDescription:
      'Restoranınızın tüm dijital ihtiyacını tek platformda toplayın: misafirler QR kodla menüye ulaşır, sipariş anında mutfağa düşer, yönetim gerçek zamanlı raporlarla işletmesini yönetir.',
    highlights: [
      { value: '4 dk', label: 'Kurulumdan ilk siparişe' },
      { value: '%30+', label: 'Masa dönüş hızı artışı' },
      { value: '7/24', label: 'Kesintisiz sipariş altyapısı' },
    ],
    problem: [
      'Restoranlarda en büyük zaman kaybı, garsonun siparişi kağıda yazıp mutfağa iletmesi ve hesap istendiğinde yeniden hesaplamasıdır. Yoğun saatlerde bu zincirde oluşan her hata; yanlış ürün, geciken masa ve memnuniyetsiz misafir demektir.',
      'Basılı menüler ise güncellenemezdir: mevsimlik ürün değişir, fiyat güncellemesi gerekir, stokta kalmayan ürün yine de sipariş alınır. Sonuç olarak hem maliyet hem de misafir deneyimi açısından sürekli fire oluşur.',
    ],
    solution: [
      'AkıllıSofra, restoranın tüm sipariş akışını dijitalleştirir. Misafir masadaki QR kodu okutur, menüye ulaşır ve siparişini doğrudan sisteme girer. Sipariş anında mutfak ekranında belirir; hazırlandığında garson bilgilendirilir, hesap tek dokunuşla kapanır.',
      'Menü tamamen dijitaldir: fiyat değişikliği saniyeler içinde tüm masalara yansır, stokta olmayan ürün otomatik olarak satıştan kaldırılır. Yönetim paneliyle gün sonu raporları, en çok satan ürünler ve masa performansı gerçek zamanlı izlenir.',
    ],
    features: [
      {
        title: 'QR Dijital Menü',
        description:
          'Temassız, her dilde ve her cihazda çalışan dijital menü. Fotoğraflı ürün kartları, kategori filtreleri ve anlık fiyat güncelleme.',
      },
      {
        title: 'Masa ve Sipariş Yönetimi',
        description:
          'Her masanın durumu canlı olarak takip edilir; siparişler alındı, hazırlanıyor, servis edildi aşamalarıyla izlenir.',
      },
      {
        title: 'Mutfak Ekranı (KDS)',
        description:
          'Siparişler mutfağa sırayla ve yazıcısız düşer. Hazırlık süresi ölçülür, geciken siparişler otomatik olarak vurgulanır.',
      },
      {
        title: 'Hesap ve Ödeme Akışı',
        description:
          'Hesap isteme derdi biter: misafir masadan kalkmadan hesabı görür, bölünmüş ödeme ve adisyona itiraz senaryoları sistemin içindedir.',
      },
      {
        title: 'Raporlama ve Analitik',
        description:
          'Gün sonu ciro, saat bazlı yoğunluk, en çok satan ürünler ve iptal analizleri tek panelde; kararlar tahminle değil veriyle alınır.',
      },
      {
        title: 'Çoklu Şube Desteği',
        description:
          'Zincir restoranlar için tüm şubeler tek yönetim panelinde; şube bazlı karşılaştırmalar ve merkezi menü yönetimi.',
      },
    ],
    howItWorks: [
      {
        title: 'Menünüzü oluşturun',
        description:
          'Yönetim panelinden kategorileri ve ürünleri fotoğraflarıyla birlikte ekleyin; QR kodlarınız anında oluşur.',
      },
      {
        title: 'QR kodları masalara yerleştirin',
        description:
          'Üretilen QR kodları masalara yerleştirip test edin; kurulumdan ilk siparişe ortalama 4 dakika sürer.',
      },
      {
        title: 'Misafirler sipariş versin',
        description:
          'Misafirler menüye göz atar, sepet oluşturur ve siparişi doğrudan mutfağa gönderir; garson sadece servise odaklanır.',
      },
      {
        title: 'İşletmenizi veriyle yönetin',
        description:
          'Panelden gün sonu raporlarını, ürün performansını ve yoğunluk haritasını takip edin; menünüzü veriye göre optimize edin.',
      },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'QR Entegrasyonu', 'Mobil Uyumlu PWA'],
    targetAudience: [
      'Garson maliyetini düşürüp masa dönüş hızını artırmak isteyen restoranlar',
      'Menü ve fiyat güncellemelerini anlık yapmak isteyen kafe ve bistro işletmeleri',
      'Çoklu şubeli yapılarını tek merkezden yönetmek isteyen zincir markalar',
      'Sahilde, havuz kenarında ve geniş oturma alanlarında temassız sipariş isteyen işletmeler',
    ],
    faqs: [
      {
        question: 'Mevvet POS cihazımla çalışır mı?',
        answer:
          'AkıllıSofra mevcut POS entegrasyonlarına açık bir mimariyle geliştirildi. Kullandığınız POS sistemine göre entegrasyon planını kurulum öncesi birlikte netleştiriyoruz.',
      },
      {
        question: 'Kurulum ne kadar sürer?',
        answer:
          'Menünüz hazırsa kurulum birkaç saat içinde tamamlanır: menü girişi, QR üretimi ve personel eğitimi dahil. Ortalama olarak kurulumdan ilk canlı siparişe geçen süre bir iş günü içindedir.',
      },
      {
        question: 'Misafirler uygulama indirmek zorunda mı?',
        answer:
          'Hayır. QR kod kamerayla okutulduğunda menü doğrudan tarayıcıda açılır; uygulama indirme veya üyelik gerektirmez.',
      },
      {
        question: 'Menüde değişiklik yapmak zor mu?',
        answer:
          'Değildir. Yönetim panelinden ürün eklemek, kaldırmak, fiyat güncellemek veya stokta tükeneni otomatik satıştan kaldırmak birkaç dokunuşla yapılır ve anında tüm masalara yansır.',
      },
    ],
  },
  {
    slug: 'ihaleyapi',
    name: 'İhaleYapı',
    tagline: 'İhale & Tedarik Yönetimi',
    status: 'Aktif',
    url: 'https://ihaleyapi.com.tr',
    icon: ShoppingCart,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500 to-teal-500',
    description:
      'Kamu ve özel sektör için ihale ve tedarik süreçleri yönetim platformu. İhale takibi ve teklif yönetimi.',
    heroTag: 'Kurumsal Tedarik Platformu',
    heroDescription:
      'Yüzlerce ihale kaynağını tek panelde toplayın, uygun fırsatları anında yakalayın, teklif süreçlerini ve tedarikçi performansını tek çatıda yönetin.',
    highlights: [
      { value: '100+', label: 'İzlenen ihale kaynağı' },
      { value: 'Günlük', label: 'Fırsat bildirimi' },
      { value: 'Tek panel', label: 'Teklif, sözleşme ve tedarikçi takibi' },
    ],
    problem: [
      'Türkiye’de kamu ve özel sektör ihaleleri onlarca farklı portala dağınık halde yayımlanır. Firmalar bu portalları manuel takip etmek zorunda kalır; kritik son başvuru tarihlerini kaçırır veya uygun oldukları ihaleyi haberleri olmadan görürler.',
      'Teklif hazırlık süreci de büyük bir koordinasyon yüküdür: belgeler e-posta trafiğinde kaybolur, versiyon karmaşası yaşanır, teklif verilen ama kazanılmayan ihalelerin nedeni hiç analiz edilmez. Tedarikçi performansı ise çoğu zaman hiç ölçülmez.',
    ],
    solution: [
      'İhaleYapı, tüm ihale kaynaklarını tek panelde toplar; sektör ve anahtar kelime bazlı filtrelerinize uyan fırsatları günlük olarak önünüze getirir. Son başvuru tarihi yaklaşan ihaleler otomatik olarak hatırlatılır.',
      'Teklif hazırlama süreci platformun içinde yürür: şablonlar, belge kontrol listeleri, onay akışları ve versiyon geçmişi tek yerde. Kazanılan ve kaybedilen ihaleler kayıt altına alınarak kazanma oranı analizleriyle gelecek teklif stratejisi veriye dayalı hale gelir.',
    ],
    features: [
      {
        title: 'Birleşik İhale Takibi',
        description:
          'Kamu ihale portalları ve özel sektör ilan kaynakları tek panelde; sektör, il, bütçe ve anahtar kelime filtreleriyle yalnızca size uygun fırsatlar listelenir.',
      },
      {
        title: 'Akıllı Hatırlatmalar',
        description:
          'Son başvuru tarihi yaklaşan, dokümanı eksik veya onay bekleyen teklifler için otomatik bildirimler; hiçbir fırsat tarih kaçırılarak kaybedilmez.',
      },
      {
        title: 'Teklif Yönetimi',
        description:
          'Teklif şablonları, zorunlu belge kontrol listeleri ve versiyonlama ile hazırlık süreci standartlaşır; onay akışları yönetici görünürlüğü sağlar.',
      },
      {
        title: 'Tedarikçi Portalı',
        description:
          'Tedarikçiler kendi performansını görür; fiyat teklifleri, termin takibi ve değerlendirme süreçleri platform üzerinden yürütülür.',
      },
      {
        title: 'Bütçe ve Maliyet Planlama',
        description:
          'İhale bazlı maliyet kalemleri, birim fiyatlar ve kârlılık senaryoları hesaplanır; teklif vermeden önce kâr marjı net görülür.',
      },
      {
        title: 'Performans Analitiği',
        description:
          'Kazanma oranı, ihale başına maliyet, rakip analizi ve tedarikçi performansı tek raporlaşmada; strateji tahminle değil veriyle kurulur.',
      },
    ],
    howItWorks: [
      {
        title: 'Profilinizi ve filtrelerinizi belirleyin',
        description:
          'Faaliyet alanlarınızı, ilgili olduğunuz sektörleri ve anahtar kelimeleri girin; sistem size uygun ihaleleri seçmeye başlar.',
      },
      {
        title: 'Fırsatları panelden takip edin',
        description:
          'Tüm kaynaklardan gelen ilanlar günlük olarak listelenir; kritik tarihler için otomatik hatırlatmalar alırsınız.',
      },
      {
        title: 'Teklifinizi platformda hazırlayın',
        description:
          'Şablonlar ve kontrol listeleriyle teklif dosyasını oluşturun, versiyonları yönetin ve onay akışına sunun.',
      },
      {
        title: 'Sonuçları analiz ederek büyüyün',
        description:
          'Kazanılan ve kaybedilen ihaleleri kayıt altına alın; kazanma oranı analizleriyle bir sonraki teklifinizi güçlendirin.',
      },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'REST API', 'Rol Bazlı Yetkilendirme', 'İlan Toplayıcı Servisler', 'E-posta/SMS Bildirim'],
    targetAudience: [
      'Kamu ihalelerinden düzenli iş alan inşaat, mühendislik ve hizmet firmaları',
      'Teklif hazırlama sürecini dağınık dosyalardan kurtarmak isteyen satınalma ekipleri',
      'Tedarikçi performansını ölçmek isteyen üretim ve sanayi şirketleri',
      'Yeni pazarlara açılırken ihale fırsatlarını sistemli takip etmek isteyen büyüyen KOBİ\'ler',
    ],
    faqs: [
      {
        question: 'Hangi ihale kaynakları takip ediliyor?',
        answer:
          'Kamu İhale Kanunu kapsamındaki başlıca ilan portalları ile sektörel özel ilan kaynakları platformda birleştirilir. Talep halinde şirketinizin izlemesi gereken özel kaynaklar da eklenebilir.',
      },
      {
        question: 'Kaç kullanıcıyla kullanabiliriz?',
        answer:
          'Rol bazlı yetkilendirme sayesinde satınalma, hukuk ve yönetim ekiplerinden istediğiniz sayıda kullanıcıyı farklı yetki seviyeleriyle tanımlayabilirsiniz.',
      },
      {
        question: 'Mevcut dosyalarımızı taşıyabilir miyiz?',
        answer:
          'Evet. Kurulum aşamasında mevcut teklif şablonlarınızı, tedarikçi listenizi ve geçmiş ihale kayıtlarınızı platforma aktarıyoruz; geçmiş veri kaybı yaşanmaz.',
      },
      {
        question: 'Bulutta mı çalışıyor, kurulum gerekiyor mu?',
        answer:
          'İhaleYapı tamamen bulut tabanlıdır; sunucu kurulumu veya IT altyapısı gerektirmez. Tarayıcıdan erişilir ve mobil cihazlarda da kullanılabilir.',
      },
    ],
  },
  {
    slug: 'salvo-agent',
    name: 'Salvo Agent',
    tagline: 'Yapay Zekâ Operasyon Platformu',
    status: 'Geliştirme',
    url: 'https://salvoagent.ai',
    icon: Bot,
    color: 'text-blue-500',
    gradient: 'from-blue-500 to-indigo-500',
    description:
      'SALVO merkezi süpervizörü liderliğindeki hiyerarşik CrewAI ajan takımlarıyla şirket operasyonlarını otonom yöneten yeni nesil yapay zekâ platformu.',
    heroTag: 'Smart Agent Leadership & Vision Orchestrator',
    heroDescription:
      'SALVO Agent Platform; Finans, Satış, Pazarlama ve Mühendislik operasyonlarını tek bir çatı altında otonom yöneten, SALVO merkezi süpervizörü liderliğinde hiyerarşik CrewAI ajan takımları, gerçek zamanlı veri kazıma, RAG hafızası ve Sinaps Bilgi Ağı sunan yeni nesil yapay zekâ operasyon platformudur.',
    highlights: [
      { value: '4', label: 'Otonom operasyon birimi' },
      { value: '4+', label: 'Gerçek zamanlı finans kaynağı' },
      { value: '7/24', label: 'Kesintisiz ajan görevlendirmesi' },
    ],
    problem: [
      'Modern şirketlerin finans, satış, pazarlama ve mühendislik ekipleri aynı veriyi farklı araçlarda, farklı formatlarda ve farklı zamanlarda görür. Pazarlamacı raporu Pazartesi, satış hunisi Çarşamba, finans verisi ay sonunda gelir; yönetim ise hep eski bilgiyle karar verir.',
      'Operasyonel iş yükü ise her geçen gün artar: fiyat takibi, rakip analizi, rapor hazırlığı, müşteri triyajı, sprint planlaması… Bu işlerin çoğu tekrarlayan niteliktedir ve yüksek maaşlı yeteneklerin zamanını tüketir. Şirketler ya kadro artırır ya da kaliteyi düşürür.',
    ],
    solution: [
      'Salvo Agent bu dört operasyon birimini tek platformda toplar ve her birine özel ajan ekipleri görevlendirir. SALVO merkezi süpervizörü, CrewAI altyapısıyla hiyerarşik çalışan ajan takımlarını koordine eder: görev dağıtır, çıktıları denetler ve birimler arası bilgi akışını yönetir.',
      'Platform, CoinMarketCap, TradingView, Investing.com ve Bloomberg gibi kaynaklardan sıfır gecikmeli veri kazır; RAG hafızasıyla şirketin geçmiş verilerini ve dokümanlarını bağlama ekler, Obsidian tarzı Sinaps Bilgi Ağı ile bilgiyi ilişkilendirilerek saklar. Sonuç: kararlar günler süren raporlama döngüsü yerine gerçek zamanlı içgörüyle alınır.',
    ],
    features: [
      {
        title: 'SALVO Merkezi Süpervizör',
        description:
          'Tüm ajan takımlarını yöneten liderlik katmanı: görev atama, önceliklendirme, çıktı denetimi ve birimler arası orkestrasyon tek çatıda.',
      },
      {
        title: 'Hiyerarşik CrewAI Ajan Takımları',
        description:
          'Finans, Satış, Pazarlama ve Mühendislik için uzmanlaşmış ajan ekipleri; her ekip kendi biriminin iş akışını otonom yürütür, süpervizöre raporlar.',
      },
      {
        title: 'Gerçek Zamanlı Veri Kazıma',
        description:
          'CoinMarketCap, TradingView, Investing.com ve Bloomberg kaynaklarından sıfır gecikmeli, çok kaynaklı veri toplama; fiyat hareketleri ve piyasalardaki gelişmeler anlık izlenir.',
      },
      {
        title: 'RAG Hafızası',
        description:
          'Şirket dokümanları, geçmiş raporlar ve operasyon verileri Retrieval-Augmented Generation ile ajanların bağlamına eklenir; çıktılar şirketin gerçek bilgisiyle üretilir.',
      },
      {
        title: 'Sinaps Bilgi Ağı',
        description:
          'Obsidian tarzı bağlantılı notlarla bilgi haritası: kişi, projeler, kararlar ve veriler arasında ilişkiler kurulur; ajanlar bu ağı kullanarak bağlamsal kararlar verir.',
      },
      {
        title: 'Otonom Operasyon Akışları',
        description:
          'Piyasa özeti, rakip takibi, lead triyajı, içerik planı ve sprint raporu gibi tekrarlayan işler zamanlanmış görevlerle insan müdahalesi olmadan yürür.',
      },
    ],
    howItWorks: [
      {
        title: 'Şirket profilinizi bağlayın',
        description:
          'Veri kaynaklarınızı, dokümanlarınızı ve araçlarınızı platforma bağlayın; SALVO süpervizörü şirket bağlamınızı öğrenmeye başlar.',
      },
      {
        title: 'Ajan takımlarını görevlendirin',
        description:
          'Finans, satış, pazarlama ve mühendislik birimleri için ajan ekiplerini tanımlayın; hangi görevlerin otonom, hangilerinin onaylı yürüyeceğini belirleyin.',
      },
      {
        title: 'Gerçek zamanlı veriyle çalışsınlar',
        description:
          'Ajanlar piyasa kaynaklarından veri kazar, RAG hafızasıyla şirket bilginizi birleştirir ve Sinaps Bilgi Ağına öğrendiklerini işler.',
      },
      {
        title: 'Denetlenen çıktıları alın',
        description:
          'SALVO süpervizörü ajan çıktılarını denetler, birimler arası tutarlılığı sağlar ve nihai raporları tek panelden sunar.',
      },
    ],
    techStack: ['CrewAI', 'Python', 'RAG (Retrieval-Augmented Generation)', 'Web Scraping Motoru', 'LLM Orkestrasyonu', 'Sinaps Bilgi Ağı'],
    targetAudience: [
      'Finansal veri takibi ve raporlamaya yoğun zaman harcayan yatırım ve ticaret ekipleri',
      'Satış ve pazarlama operasyonlarını tek elden otonom yönetmek isteyen büyüyen şirketler',
      'Tekrarlayan operasyonel işleri otomatikleştirip ekibini stratejik işlere ayırmak isteyen yöneticiler',
      'Yapay zekâ ajan altyapısını kendi operasyonlarına entegre etmek isteyen teknoloji ekipleri',
    ],
    faqs: [
      {
        question: 'SALVO süpervizörü ne yapar?',
        answer:
          'SALVO, Smart Agent Leadership & Vision Orchestrator olarak tüm ajan takımlarının liderliğini üstlenir: görevleri dağıtır, önceliklendirir, ajan çıktılarını denetler ve finans, satış, pazarlama ile mühendislik birimleri arasındaki bilgi akışını koordine eder. İnsan yöneticisi gibidir; farkı 7/24 çalışmasıdır.',
      },
      {
        question: 'Ajanlar hangi veri kaynaklarına erişebilir?',
        answer:
          'Platform CoinMarketCap, TradingView, Investing.com ve Bloomberg başta olmak üzere yapılandırılmış veri kaynaklarına sıfır gecikmeli kazıma yapar. Ayrıca şirketinizin kendi dokümanları ve veritabanları RAG hafızası üzerinden ajanlara bağlamsal olarak sunulur.',
      },
      {
        question: 'Otonom kararlar nasıl denetleniyor?',
        answer:
          'Her ajan ekibinin görev kapsamı ve yetki seviyesi tanımlanır. Kritik çıktılar SALVO süpervizörünün denetiminden geçer; dilerseniz belirli işlem türleri için insan onayı zorunlu tutulabilir.',
      },
      {
        question: 'Mevcut araçlarımızla entegre olur mu?',
        answer:
          'Salvo Agent, API tabanlı mimarisiyle CRM, muhasebe, proje yönetimi ve iletişim araçlarıyla entegre edilebilir. Entegrasyon ihtiyaçlarınız pilot aşamada birlikte haritalandırılır.',
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
