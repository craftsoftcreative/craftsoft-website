import { UtensilsCrossed, HardHat, Bot, type LucideIcon } from 'lucide-react';

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
    tagline: 'İnşaat & Yapı Sektörüne Özel İhale Platformu',
    status: 'Aktif',
    url: 'https://ihaleyapi.com.tr',
    icon: HardHat,
    color: 'text-emerald-500',
    gradient: 'from-emerald-500 to-teal-500',
    description:
      'İnşaat ve yapı firmaları için sektöre özel planlanıp geliştirilen ihale yönetim platformu. Kamu ve özel sektör yapım işi ihalelerini takip edin, metraj ve yaklaşık maliyetinizi hesaplayın, teklif sürecinizi tek panelden yönetin.',
    heroTag: 'İnşaat Sektörüne Özel Geliştirildi',
    heroDescription:
      'İnşaat ve yapı firmaları için baştan sona sektöre özel tasarlanan İhaleYapı; EKAP, ilan.gov.tr ve özel sektör kaynaklarındaki yapım işi ihalelerini tek panelde toplar, metraj ve yaklaşık maliyet hesaplamanızı dijitalleştirir, teklif dosyanızı belge kontrol listeleriyle hatasız hazırlamanızı sağlar.',
    highlights: [
      { value: '100+', label: 'İzlenen ihale kaynağı' },
      { value: 'Günlük', label: 'Sektörel fırsat bildirimi' },
      { value: 'Tek panel', label: 'Metraj, maliyet ve teklif takibi' },
    ],
    problem: [
      'İnşaat firmaları için ihaleler EKAP, ilan.gov.tr, kamu kurumu siteleri ve özel sektör ilan panolarına dağınık halde yayımlanır. Estimator ve teklif ekibi her gün onlarca portalı manuel tarar; iş grubuna, bütçesine ve konumuna uygun yapım işi ihalelerini geç fark eder ya da son başvuru tarihini kaçırır.',
      'Teklif hazırlığı ise ayrı bir yük: metraj ve yaklaşık maliyet hesapları dağınık Excel dosyalarında, iş deneyim belgeleri, kapasite raporları ve güncel borç yoktur yazıları e-posta trafiğinde kaybolur. Yanlış veya eksik bir belge, haftalarca emek harcanan teklifin geçersiz sayılmasıyla sonuçlanabilir.',
    ],
    solution: [
      'İhaleYapı, inşaat sektörüne özel filtrelerle yalnızca yapım işi ihalelerini toplar: iş grubu (altyapı, üstyapı, ağır/küçük çaplı işler), il, bütçe aralığı ve anahtar kelime kriterlerinize uyan fırsatlar günlük olarak panelinize düşer; son başvuru tarihi yaklaşan ihaleler otomatik hatırlatılır.',
      'Platformun içinde metraj ve yaklaşık maliyet hesaplamaları standartlaşır, birim fiyat analizleriyle kâr marjı teklif verilmeden net görülür. Zorunlu belge kontrol listeleri — iş deneyimi, kapasite raporu, SGK ve maliye borç yoktur yazıları — teklif dosyasının eksiksiz hazırlanmasını garanti eder; kazanılan ve kaybedilen ihaleler kayıt altına alınarak kazanma oranı analizleriyle bir sonraki teklif stratejiniz veriye dayanır.',
    ],
    features: [
      {
        title: 'İnşata Özel İhale Takibi',
        description:
          'EKAP, ilan.gov.tr ve özel sektör ilan kaynakları tek panelde; yapım işi filtresi, iş grubu, il ve bütçe kriterleriyle yalnızca firmanıza uygun ihaleler listelenir.',
      },
      {
        title: 'Metraj & Yaklaşık Maliyet',
        description:
          'Poz bazlı metraj girişi ve yaklaşık maliyet hesaplamaları platformun içinde yürür; dağınık Excel dosyaları tarihe karışır.',
      },
      {
        title: 'Birim Fiyat ve Kârlılık Analizi',
        description:
          'İhale birim fiyatları, maliyet kalemleri ve hedef kâr marjı yan yana; teklif verilmeden önce kârlılık senaryoları net görülür.',
      },
      {
        title: 'Teklif Dosyası Hazırlığı',
        description:
          'Şartname bazlı zorunlu belge kontrol listeleri: iş deneyimi, kapasite raporu, SGK ve maliye borç yoktur yazıları eksiksiz takip edilir, teklif geçersiz kalma riski ortadan kalkar.',
      },
      {
        title: 'Kritik Tarih Hatırlatmaları',
        description:
          'Son başvuru tarihi, belge yenileme ve onay bekleyen teklifler için otomatik e-posta/SMS bildirimleri; hiçbir fırsat tarih kaçırılarak kaybedilmez.',
      },
      {
        title: 'Kazanma Oranı Analizi',
        description:
          'Kazanılan ve kaybedilen ihaleler kayıt altında; ihale başına maliyet, rakip yoğunluğu ve kazanma oranı analizleriyle teklif stratejisi güçlenir.',
      },
    ],
    howItWorks: [
      {
        title: 'Firma profilinizi oluşturun',
        description:
          'İş gruplarınızı (altyapı, üstyapı, taahhüt sınırınız), faaliyet gösterdiğiniz illeri ve bütçe aralığınızı tanımlayın; sistem size uygun yapım işi ihalelerini seçmeye başlar.',
      },
      {
        title: 'Fırsatları panelden izleyin',
        description:
          'EKAP, ilan.gov.tr ve diğer kaynaklardan gelen ihaleler günlük listelenir; kritik tarihler için otomatik hatırlatmalar alırsınız.',
      },
      {
        title: 'Metraj ve maliyetle teklif hazırlayın',
        description:
          'Platformda metraj ve yaklaşık maliyetinizi hesaplayın, birim fiyat analiziyle kâr marjınızı netleştirin, belge kontrol listesiyle eksiksiz teklif dosyanızı oluşturun.',
      },
      {
        title: 'Sonuçları analiz ederek büyüyün',
        description:
          'Kazanılan ve kaybedilen ihaleleri kayıt altına alın; kazanma oranı analizleriyle bir sonraki teklifinizi daha güçlü verin.',
      },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'REST API', 'Rol Bazlı Yetkilendirme', 'İhale Kaynağı Toplayıcı Servisler', 'E-posta/SMS Bildirim'],
    targetAudience: [
      'Kamu yapım işi ihalelerinden düzenli iş alan müteahhit ve inşaat firmaları',
      'Metraj ve yaklaşık maliyet hesabını dijitalleştirmek isteyen estimator ekipleri',
      'Teklif hazırlık sürecinde belge karmaşası yaşayan taahhüt departmanları',
      'Altyapı ve üstyapı işlerinde büyümek isteyen taşeron ve yapı malzemesi firmaları',
    ],
    faqs: [
      {
        question: 'Hangi ihale kaynakları takip ediliyor?',
        answer:
          'EKAP, ilan.gov.tr, kamu kurumlarının ilan sayfaları ile sektörel özel ilan kaynakları platformda birleştirilir; yalnızca yapım işi ihaleleri sektörel filtrelerle listelenir. Talep halinde firmanızın izlemesi gereken özel kaynaklar da eklenebilir.',
      },
      {
        question: 'Metraj ve yaklaşık maliyet hesabı nasıl çalışıyor?',
        answer:
          'İhale dokümanındaki pozları platforma girip metraj değerlerinizi işlersiniz; birim fiyatlarla yaklaşık maliyet ve hedef kâr marjınız otomatik hesaplanır. Hesaplamalarınız teklif bazlı saklanır ve bir sonraki benzer ihalede şablon olarak kullanılabilir.',
      },
      {
        question: 'Belge kontrol listesinde neler var?',
        answer:
          'Şartnameye göre değişmekle birlikte tipik olarak iş deneyim belgeleri, kapasite raporu, SGK ve maliye borç yoktur yazıları, mesleki yeterlilik ve imza sirküleri izlenir. Eksik belge, son başvuru tarihinden önce otomatik olarak hatırlatılır.',
      },
      {
        question: 'Bulutta mı çalışıyor, kurulum gerekiyor mu?',
        answer:
          'İhaleYapı tamamen bulut tabanlıdır; sunucu kurulumu veya IT altyapısı gerektirmez. Tarayıcıdan erişilir, şantiyeden mobil cihazla da kullanılabilir.',
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
