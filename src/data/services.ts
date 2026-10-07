import {
  TrendingUp,
  Facebook,
  BarChart3,
  Instagram,
  Video,
  Plane,
  Palette,
  Code2,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string[];
  icon: LucideIcon;
  gradient: string;
  softBg: string;
  textColor: string;
  features: string[];
  deliverables: string[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  stats: { value: string; label: string }[];
  idealFor: string[];
  tools: string[];
}

export const services: Service[] = [
  {
    slug: 'dijital-pazarlama',
    title: 'Dijital Pazarlama',
    shortTitle: 'SEO & Analytics',
    tagline: 'Markanızı arama motorlarında zirveye taşıyın',
    description:
      'Markanızın online varlığını güçlendirin. SEO, içerik pazarlama ve stratejik planlama ile hedef kitlenize ulaşın.',
    longDescription: [
      'Dijital pazarlama günümüzde bir işletmenin büyümesinin en kritik itici gücü haline geldi. Ancak doğru yapılmadığında bütçe boşa harcanır; yapıldığında ise satışlar öngörülebilir şekilde büyür. Craftsoft olarak veriye dayalı dijital pazarlama stratejileri geliştiriyor, markanızın hedef kitlesiyle en doğru kanallarda buluşmasını sağlıyoruz.',
      'Çalışmalarımıza her zaman kapsamlı bir dijital denetim (audit) ile başlıyoruz. Mevcut durumunuzu, rakiplerinizi ve sektörünüzün dijital görünürlüğünü analiz ediyoruz. Bu analizin sonucunda kısa vadeli kazanımlar ve uzun vadeli büyüme hedefleri için ayrı ayrı yol haritaları çıkarıyoruz.',
      'SEO, içerik pazarlama, e-posta pazarlaması ve dönüşüm optimizasyonunu tek bir strateji çatısı altında birleştiriyoruz. Amacımız sadece trafik getirmek değil; nitelikli trafik getirip bu trafiği müşteriye dönüştürmek. Aylık şeffaf raporlamalarla her adımın ölçülebilir sonucunu görebilirsiniz.',
    ],
    icon: TrendingUp,
    gradient: 'from-orange-500 to-orange-600',
    softBg: 'bg-orange-50',
    textColor: 'text-orange-600',
    features: [
      'SEO Optimizasyonu',
      'İçerik Stratejisi',
      'Analytics Raporlama',
      'Dönüşüm Optimizasyonu',
      'E-posta Pazarlama',
      'Rakip Analizi',
    ],
    deliverables: [
      'Teknik SEO denetimi ve iyileştirme planı',
      'Anahtar kelime ve içerik takvimi',
      'Google Analytics 4 ve Search Console kurulumu',
      'Aylık performans raporu ve strateji görüşmesi',
    ],
    process: [
      {
        title: 'Dijital Denetim',
        description:
          'Web sitenizi, rakiplerinizi ve sektörünüzü analiz ederek güçlü ve zayıf yönlerinizi haritalandırıyoruz.',
      },
      {
        title: 'Strateji ve Yol Haritası',
        description:
          'Hedeflerinize uygun kanal seçimi, bütçe dağılımı ve 90 günlük aksiyon planı oluşturuyoruz.',
      },
      {
        title: 'Uygulama',
        description:
          'SEO iyileştirmeleri, içerik üretimi ve kampanyaları hayata geçiriyor, her adımı izliyoruz.',
      },
      {
        title: 'Ölçüm ve Ölçekleme',
        description:
          'Verilerle neyin işe yaradığını görüp çalışan taktikleri ölçekliyor, verimsiz olanları eliyoruz.',
      },
    ],
    faqs: [
      {
        question: 'SEO sonuçları ne zaman görünür?',
        answer:
          'Teknik iyileştirmeler ilk 4-6 hafta içinde etkisini gösterir. Anahtar kelime sıralamalarında anlamlı yükseliş genellikle 3-6 ay sürer. SEO sabır isteyen ama en kalıcı dijital yatırımdır.',
      },
      {
        question: 'Aylık raporlama nasıl yapılıyor?',
        answer:
          'Her ay detaylı bir performans raporu alırsınız: trafik kaynakları, sıralama değişimleri, dönüşüm oranları ve bir sonraki ayın planı. İsterseniz haftalık kısa özetler de paylaşıyoruz.',
      },
      {
        question: 'Mevcut ajansımdan geçiş zor mu?',
        answer:
          'Hayır. Tüm hesap erişimlerini sizin adınıza devralıyor, mevcut verileri kaybetmeden süreçleri Craftsoft yönetimine sorunsuzca taşıyoruz.',
      },
    ],
    stats: [
      { value: '%180', label: 'Ortalama organik trafik artışı' },
      { value: '3-6 ay', label: 'İlk sonuç süresi' },
      { value: '%95', label: 'Müşteri memnuniyeti' },
    ],
    idealFor: [
      'Google\u2019da kendi sektöründe ilk sayfada yer almak isteyen yerel işletmeler',
      'Online satışlarını artırmak isteyen ancak hangi kanala yatırım yapacağını bilemeyen e-ticaret markaları',
      'Web sitesi trafiği var ama ziyaretçileri müşteriye dönüştüremeyen hizmet işletmeleri',
      'Rekabetçi bir sektörde organik görünürlükle maliyetsiz büyümek isteyen KOBİ\u2019ler',
    ],
    tools: [
      'Google Analytics 4',
      'Google Search Console',
      'Ahrefs',
      'SEMrush',
      'Looker Studio',
      'Hotjar',
    ],
  },
  {
    slug: 'meta-reklamlari',
    title: 'Meta Reklamları',
    shortTitle: 'Facebook & Instagram',
    tagline: 'Hedef kitlenize doğrudan, ölçülebilir şekilde ulaşın',
    description:
      'Facebook ve Instagram reklamlarıyla hedef kitlenize doğrudan ulaşın. Yüksek ROI ile kampanyalar yönetiyoruz.',
    longDescription: [
      'Meta reklam platformu (Facebook ve Instagram), dünya üzerinde en detaylı hedefleme seçeneklerini sunan reklam ekosistemidir. Doğru kullanıldığında küçük bütçelerle bile dönüşüm oranı yüksek kampanyalar yürütmek mümkündür. Craftsoft olarak Meta Business Partner standartlarında kampanya yönetimi yapıyoruz.',
      'Kampanyalarımızda önce hedef kitleyi derinlemesine analiz ediyoruz: müşterileriniz kimler, hangi içeriklerle etkileşime giriyorlar, satın alma yolculukları nasıl ilerliyor? Bu analizi Meta Pixel ve Conversion API kurulumuyla güçlendiriyor, reklam algoritmasının öğrenmesi için temiz veri akışı sağlıyoruz.',
      'Kreatif tarafında A/B testleriyle en iyi performans gösteren görsel ve metin varyantlarını belirliyoruz. Retargeting (yeniden hedefleme) akışlarıyla sitenizi ziyaret edip henüz müşteri olmamış kişileri geri kazanıyoruz. Sonuç: düşülen her kuruşun nereye gittiğini bildiğiniz, şeffaf bir reklam yönetimi.',
    ],
    icon: Facebook,
    gradient: 'from-blue-500 to-blue-600',
    softBg: 'bg-blue-50',
    textColor: 'text-blue-600',
    features: [
      'Hedef Kitle Analizi',
      'A/B Testleri',
      'Kampanya Optimizasyonu',
      'Performans Raporlama',
      'Retargeting',
      'Pixel & CAPI Kurulumu',
    ],
    deliverables: [
      'Meta Pixel ve Conversions API kurulumu',
      'Hedef kitle ve rakip analizi',
      'Aylık kreatif üretim ve test planı',
      'Haftalık optimizasyon ve aylık raporlama',
    ],
    process: [
      {
        title: 'Kitle ve Pazar Analizi',
        description:
          'İdeal müşteri profilinizi çıkarıyor, rakiplerin reklam stratejilerini inceliyoruz.',
      },
      {
        title: 'Teknik Kurulum',
        description:
          'Pixel, Conversion API ve ölçüm altyapısını kurarak reklam verilerinin doğruluğunu garanti altına alıyoruz.',
      },
      {
        title: 'Kampanya ve Test',
        description:
          'Birden fazla kreatif ve metin varyantıyla kampanyaları başlatıp veriye göre optimize ediyoruz.',
      },
      {
        title: 'Ölçekleme',
        description:
          'Kârlı kampanyaları bütçe artırarak ölçekliyor, haftalık raporlarla süreci şeffaf tutuyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Aylık minimum reklam bütçesi ne kadar olmalı?',
        answer:
          'Sektöre göre değişmekle birlikte anlamlı test sonuçları için aylık 5.000 TL ve üzeri reklam bütçesi öneriyoruz. Daha düşük bütçelerle de başlayabilir, sonuçlara göre kademeli artış yapabiliriz.',
      },
      {
        question: 'Reklam hesapları kimin üzerine açılıyor?',
        answer:
          'Tüm hesaplar sizin işletmenizin üzerine açılır. Craftsoft yönetici erişimi alır; verileriniz ve hesaplarınız her zaman size aittir.',
      },
      {
        question: 'İlk sonuçları ne zaman görürüm?',
        answer:
          'Kampanyalar yayına alındıktan sonra ilk veriler 48-72 saat içinde gelmeye başlar. Algoritmanın öğrenme süreci tamamlandıktan sonra (genelde 1-2 hafta) stabil performans görülür.',
      },
    ],
    stats: [
      { value: '%320', label: 'En yüksek kampanya ROI\u2019si' },
      { value: '72 saat', label: 'İlk veri akışı' },
      { value: '50+', label: 'Yönetilen kampanya' },
    ],
    idealFor: [
      'Sosyal medyada düzenli satış yapmak isteyen butik markalar ve e-ticaret girişimleri',
      'Yerel müşterilere ulaşmak isteyen restoran, kafe ve perakende işletmeleri',
      'Reklam veriyor ama harcadığı bütçenin getirisini ölçemediği işletme sahipleri',
      'Yeni ürün lansmanıyla hızlı bilinirlik kazanmak isteyen markalar',
    ],
    tools: [
      'Meta Ads Manager',
      'Meta Pixel',
      'Conversions API',
      'Facebook Business Suite',
      'Creative Hub',
    ],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    shortTitle: 'Arama & Display',
    tagline: 'Müşterileriniz sizi ararken orada olun',
    description:
      'Google Arama, Display ve YouTube reklamlarıyla potansiyel müşterilerinize ulaşın. Profesyonel kampanya yönetimi.',
    longDescription: [
      'Google Ads, satın alma niyeti en yüksek kullanıcılara ulaşmanın en doğrudan yoludur. "Yakınımdaki restoran", "en iyi yazılım ajansı" gibi aramalar yapan kişiler zaten sizin ürününüzü arıyor; doğru anda karşılarına çıkmak satış hunisinin en kritik adımıdır.',
      'Google Ads sertifikalı uzmanlarımız, anahtar kelime araştırmasından reklam metni optimizasyonuna, teklif stratejilerinden dönüşüm takibine kadar tüm süreci yönetiyor. Negatif anahtar kelime listeleri ve kalite skoru optimizasyonuyla gereksiz harcamaları kesiyoruz.',
      'Sadece Arama Ağı değil; Display Ağı görsel reklamları, YouTube video reklamları ve Remarketing kampanyalarıyla marka bilinirliğini ve geri dönüşleri birlikte büyütüyoruz. Her kampanya SMART hedeflerle kurulur ve düzenli aralıklarla revize edilir.',
    ],
    icon: BarChart3,
    gradient: 'from-emerald-500 to-emerald-600',
    softBg: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    features: [
      'Arama Reklamları',
      'Display Ağı',
      'YouTube Reklamları',
      'Remarketing',
      'Alışveriş Reklamları',
      'Performans Maksimizeri',
    ],
    deliverables: [
      'Kapsamlı anahtar kelime araştırması',
      'Reklam metni ve uzantı optimizasyonu',
      'Negatif kelime listesi yönetimi',
      'Aylık performans ve harcama raporu',
    ],
    process: [
      {
        title: 'Anahtar Kelime Araştırması',
        description:
          'Sektörünüzün arama hacimlerini ve maliyetlerini analiz ederek en kârlı kelimeleri belirliyoruz.',
      },
      {
        title: 'Kampanya Mimarisi',
        description:
          'Hedef ve niyete göre gruplandırılmış, yüksek kalite skorlu kampanya yapısı kuruyoruz.',
      },
      {
        title: 'Optimizasyon',
        description:
          'Teklif ayarlamaları, A/B testleri ve negatif kelime eklemeleriyle maliyetleri düşürüyoruz.',
      },
      {
        title: 'Raporlama',
        description:
          'Dönüşüm başına maliyet, ROAS ve trendleri içeren şeffaf aylık raporlar sunuyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Google Ads mü SEO\u2019nun yerine mi geçer?',
        answer:
          'İkisi birbirini tamamlar. Google Ads anında görünürlük sağlar, SEO uzun vadeli ve kalıcı organik trafik getirir. Büyüyen işletmeler genellikle ikisini birlikte kullanır.',
      },
      {
        question: 'Harcadığım bütçenin hesabını görebilir miyim?',
        answer:
          'Kesinlikle. Reklam hesabı tamamen sizindir; her kuruşun Google\u2019a ödenen maliyetini ve getirisini aylık raporlarda açıkça görürsünüz.',
      },
      {
        question: 'YouTube reklamları işe yarıyor mu?',
        answer:
          'Evet, özellikle marka bilinirliği ve ürün tanıtımı için. Doğru hedefleme ve 15-30 saniyelik etkili videolarla düşük maliyetli geniş erişim sağlanır.',
      },
    ],
    stats: [
      { value: '%45', label: 'Ortalama tıklama maliyeti düşüşü' },
      { value: '8.5/10', label: 'Ortalama kalite skoru' },
      { value: '7/24', label: 'Kampanya izleme' },
    ],
    idealFor: [
      'Acil hizmet arayan müşterilere (tesisatçı, avukat, klinik vb.) ulaşmak isteyen yerel işletmeler',
      'Arama reklamlarından yüksek maliyet alan ve reklam bütçesini verimli kullanmak isteyen KOBİ\u2019ler',
      'Google\u2019da rakiplerinin önünde görünmek isteyen profesyonel hizmet sağlayıcıları',
      'Satın alma niyeti yüksek kullanıcılara doğrudan ulaşarak satış hacmini artırmak isteyen e-ticaret markaları',
    ],
    tools: [
      'Google Ads',
      'Keyword Planner',
      'Google Tag Manager',
      'Looker Studio',
      'Performance Max',
    ],
  },
  {
    slug: 'sosyal-medya',
    title: 'Sosyal Medya Yönetimi',
    shortTitle: 'Yönetim & İçerik',
    tagline: 'Markanıza bir kişilik kazandırın, topluluğunuzla büyüyün',
    description:
      'Sosyal medya hesaplarınızı profesyonel şekilde yönetiyor, etkileşimi ve takipçi sayınızı artırıyoruz.',
    longDescription: [
      'Sosyal medya artık sadece paylaşım yapılan bir vitrin değil; markaların müşterileriyle birebir konuştuğu, sadakat inşa ettiği bir ilişki platformu. Tutarlı, özgün ve marka diline uygun içerik üretimi bu platformlarda görünür olmanın tek yoludur.',
      'Craftsoft olarak Instagram, Facebook, LinkedIn, X (Twitter) ve TikTok platformlarında uçtan uca hesap yönetimi yapıyoruz. İçerik takvimi hazırlıyor, görsel tasarımları üretiyor, hikaye ve reel formatlarında düzenli paylaşımlar planlıyoruz.',
      'Topluluk yönetiminde yorumlara ve mesajlara marka tonunuza uygun şekilde hızlı yanıt veriyoruz. Influencer işbirliklerinde doğru profilleri belirleyip süreci yönetiyoruz. Sosyal medya dinleme ile markanız hakkında konuşulanları takip ediyor, krize dönüşebilecek durumlara erken müdahale ediyoruz.',
    ],
    icon: Instagram,
    gradient: 'from-pink-500 to-rose-600',
    softBg: 'bg-pink-50',
    textColor: 'text-pink-600',
    features: [
      'İçerik Takvimi',
      'Grafik Tasarım',
      'Topluluk Yönetimi',
      'Influencer İşbirlikleri',
      'Reels & TikTok Üretimi',
      'Sosyal Medya Dinleme',
    ],
    deliverables: [
      'Aylık içerik takvimi ve onay akışı',
      'Marka diline uygun görsel ve metin üretimi',
      'Haftalık hikaye/reel paylaşımları',
      'Aylık büyüme ve etkileşim raporu',
    ],
    process: [
      {
        title: 'Marka Analizi',
        description:
          'Marka kimliğinizi, hedef kitlenizi ve rakiplerinizin sosyal medya stratejilerini inceliyoruz.',
      },
      {
        title: 'İçerik Stratejisi',
        description:
          'Platform bazlı içerik sütunları ve aylık takvim oluşturuyor, sizin onayınıza sunuyoruz.',
      },
      {
        title: 'Üretim ve Yayın',
        description:
          'Görselleri, metinleri ve videoları üretip en doğru saatlerde yayınlıyoruz.',
      },
      {
        title: 'Etkileşim ve Rapor',
        description:
          'Toplulukla etkileşime geçiyor, büyüme metriklerini raporlayıp stratejiyi güncelliyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Hangi platformlarda hizmet veriyorsunuz?',
        answer:
          'Instagram, Facebook, LinkedIn, X (Twitter), TikTok ve YouTube Shorts başta olmak üzere tüm ana platformlarda yönetim sağlıyoruz. Hedef kitlenize göre doğru platform karışımını birlikte belirliyoruz.',
      },
      {
        question: 'İçerikleri ben onaylayabilir miyim?',
        answer:
          'Elbette. Aylık içerik takvimi yayına çıkmadan önce onayınıza sunulur. Dilerseniz acil paylaşımlar için hızlı onay akışı da kurarız.',
      },
      {
        question: 'Takipçi sayım ne kadar sürede artar?',
        answer:
          'Düzenli ve kaliteli içerikle ilk 1-2 ayda etkileşim artışı, 3-6 ayda anlamlı takipçi büyümesi görülür. Hedefimiz sayıdan önce nitelikli ve markanızla etkileşen bir topluluk inşa etmektir.',
      },
    ],
    stats: [
      { value: '%210', label: 'Ortalama etkileşim artışı' },
      { value: '30+', label: 'Aylık içerik üretimi' },
      { value: '5', label: 'Aktif platform' },
    ],
    idealFor: [
      'Sosyal medya hesaplarına zaman ayıramayan, büyümeye odaklanmak isteyen işletme sahipleri',
      'Instagram ve TikTok üzerinden marka bilinirliği oluşturmak isteyen yeni girişimler',
      'Düzensiz paylaşımlar nedeniyle etkileşimi düşen kurumsal markalar',
      'Topluluk yönetimini profesyonel ellere bırakmak isteyen restoran, otel ve perakende zincirleri',
    ],
    tools: [
      'Meta Business Suite',
      'Hootsuite',
      'Canva',
      'CapCut',
      'Later',
    ],
  },
  {
    slug: 'video-fotograf',
    title: 'Video & Fotoğraf',
    shortTitle: 'Prodüksiyon & Edit',
    tagline: 'İçeriklerinize sinematik bir dokunuş katın',
    description:
      'Profesyonel video kurgu ve fotoğraf düzenleme hizmetleriyle içeriklerinizi öne çıkarın.',
    longDescription: [
      'İçerik tüketiminde video, tüm diğer formatların toplamını geçmiş durumda. Ancak izleyicinin dikkatini ilk 3 saniyede yakalayamayan bir video, ne kadar iyi çekilmiş olursa olsun kaybolup gider. Bu yüzden prodüksiyon kadar kurgu, renk ve ritim de en az çekim kadar önem taşır.',
      'Craftsoft olarak çekim öncesi senaryo ve storyboard hazırlığından, çekim günü yönetimine, profesyonel kurgu ve color grading\u0027e kadar tüm süreci yönetiyoruz. Kurumsal tanıtım filmleri, ürün videoları, sosyal medya içerikleri ve etkinlik çekimlerinde uçtan uca hizmet sunuyoruz.',
      'Kurgu tarafında; motion graphics, alt yazı, ses tasarımı ve platforma özel format uyarlama (Reels, TikTok, YouTube, LinkedIn) hizmetleri veriyoruz. Fotoğraf tarafında ise ürün çekimi, kurumsal portre ve etkinlik fotoğrafçılığı ile retouch hizmetlerini kapsıyoruz.',
    ],
    icon: Video,
    gradient: 'from-cyan-500 to-cyan-600',
    softBg: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    features: [
      'Video Kurgu',
      'Renk Düzenleme',
      'Motion Graphics',
      'Sosyal Medya Formatları',
      'Ürün Fotoğrafçılığı',
      'Ses Tasarımı',
    ],
    deliverables: [
      'Senaryo ve storyboard hazırlığı',
      '4K çekim ve profesyonel ışık/ses kurulumu',
      'Kurgu, color grading ve ses miksajı',
      'Platform bazlı formatlarda teslim',
    ],
    process: [
      {
        title: 'Keşif ve Senaryo',
        description:
          'Hedefinizi ve mesajınızı dinliyor, bütçenize uygun senaryo ve storyboard hazırlıyoruz.',
      },
      {
        title: 'Prodüksiyon',
        description:
          'Profesyonel ekipman ve ışık kurulumuyla çekim gününü yönetiyoruz.',
      },
      {
        title: 'Post-Produksiyon',
        description:
          'Kurgu, renk düzenleme, motion graphics ve ses tasarımını tamamlıyoruz.',
      },
      {
        title: 'Teslim ve Uyarlama',
        description:
          'Ana videoyu teslim edip her platform için optimize edilmiş formatları hazırlıyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Çekim için stüdyo şart mı?',
        answer:
          'Hayır. Mekân çekimleri, drone çekimleri ve stüdyo çekimlerinin hepsini ihtiyacınıza göre planlıyoruz. Gerekirse stüdyo ve ekipman organizasyonunu da biz üstleniyoruz.',
      },
      {
        question: 'Bir tanıtım filminin teslim süresi ne kadar?',
        answer:
          'Kısa sosyal medya videoları 2-3 iş günü, kurumsal tanıtım filmleri 1-2 hafta içinde teslim edilir. Revizyon haklarınız sözleşmede açıkça belirtilir.',
      },
      {
        question: 'Hazır çektiğim görüntülerin kurgusunu yapar mısınız?',
        answer:
          'Evet. Sadece post-produksiyon hizmeti de alabilirsiniz. Ham görüntülerinizi kurgu, renk ve ses düzenlemesiyle yayına hazır hale getiriyoruz.',
      },
    ],
    stats: [
      { value: '200+', label: 'Tamamlanan video projesi' },
      { value: '4K', label: 'Çekim kalitesi' },
      { value: '2-3 gün', label: 'Sosyal video teslimi' },
    ],
    idealFor: [
      'Ürün ve hizmetlerini profesyonel tanıtım videolarıyla öne çıkarmak isteyen KOBİ\u2019ler',
      'Sosyal medya için düzenli Reels ve kısa video üretmek isteyen markalar',
      'Etkinlik, lansman veya fuar görüntülerini kalıcı içerik haline getirmek isteyen kurumlar',
      'Çektiği ham görüntülerin kurgu ve renk düzenlemesini uzmana yaptırmak isteyen içerik üreticileri',
    ],
    tools: [
      'Adobe Premiere Pro',
      'DaVinci Resolve',
      'After Effects',
      'Lightroom',
      'CapCut',
    ],
  },
  {
    slug: 'drone-cekim',
    title: 'Drone Çekim',
    shortTitle: 'Havadan Görüntüleme',
    tagline: 'Projelerinize kuşbakışı bir perspektif kazandırın',
    description:
      'Havadan çekimlerle projelerinize farklı bir perspektif kazandırın. 4K kalitede profesyonel drone çekimleri.',
    longDescription: [
      'Yerden çekilemeyecek ölçekteki projeler, geniş araziler ve yapılar için havadan görüntüleme artık bir lüks değil, bir standart haline geldi. İnşaat ilerleme takibinden emlak tanıtımına, turizm destinasyonlarından etkinlik özetlerine kadar birçok alanda drone çekimi karar verme süreçlerini hızlandırıyor.',
      'Craftsoft ekibi, SHGM (Sivil Havacılık Genel Müdürlüğü) mevzuatına uygun şekilde lisanslı pilotlarımızla 4K kalitede havadan çekim hizmeti sunuyor. Uçuş öncesi hava sahası ve izin kontrollerini yapıyor, çekim günü güvenlik protokollerini titizlikle uyguluyoruz.',
      'Emlak projelerinde site planını ve çevre bağlantılarını gösteren sinematik geçişler, inşaat projelerinde haftalık/aylık ilerleme fotoğrafları, turizm işletmelerinde 360° panoramik görseller üretiyoruz. Çekim sonrası renk düzenleme ve montaj dahil tüm post-produksiyon süreci tarafımızdan yürütülür.',
    ],
    icon: Plane,
    gradient: 'from-violet-500 to-violet-600',
    softBg: 'bg-violet-50',
    textColor: 'text-violet-600',
    features: [
      '4K Video Çekimi',
      'Fotoğraf Çekimi',
      '360° Panorama',
      'Endüstriyel Çekimler',
      'İlerleme Takip Çekimleri',
      'Sinematik Montaj',
    ],
    deliverables: [
      'Uçuş izin ve güvenlik planlaması',
      '4K ham ve renk düzenlenmiş görüntüler',
      'Sinematik montajlı tanıtım videosu',
      '360° panoramik görseller',
    ],
    process: [
      {
        title: 'Lokasyon Analizi',
        description:
          'Çekim bölgesini, hava sahası kısıtlarını ve en iyi saat/ışık koşullarını belirliyoruz.',
      },
      {
        title: 'İzin ve Planlama',
        description:
          'Gerekli izinleri alıyor, uçuş rotası ve güvenlik planını oluşturuyoruz.',
      },
      {
        title: 'Çekim Günü',
        description:
          'Lisanslı pilotlarımızla planlanan rotada sinematik ve fotografik çekimleri gerçekleştiriyoruz.',
      },
      {
        title: 'Post-Produksiyon',
        description:
          'Görüntüleri renk düzenlemesi, kesme ve müzikle monte edip teslim ediyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Drone çekimi için izin gerekiyor mu?',
        answer:
          'Evet, bazı bölgelerde uçuş izni ve bildirim zorunludur. Bu sürecin tamamını lisanslı ekibimiz yasal mevzuata uygun şekilde yönetir; sizin ek bir işleminiz gerekmez.',
      },
      {
        question: 'Hava koşulları çekimi etkiler mi?',
        answer:
          'Rüzgâr, yağış ve görüş koşulları uçuş güvenliğini etkileyebilir. Çekim günü öncesi hava durumunu takip ediyor, gerekirse ücretsiz olarak yeniden planlıyoruz.',
      },
      {
        question: 'İnşaat projem için düzenli çekim yapabilir misiniz?',
        answer:
          'Kesinlikle. Haftalık veya aylık periyotlarla ilerleme çekimleri yapıyor, zaman atlamalı (timelapse) projeler için tutarlı kareler üretiyoruz.',
      },
    ],
    stats: [
      { value: '40+', label: 'Hava çekim projesi' },
      { value: '4K/60fps', label: 'Çekim kalitesi' },
      { value: '%100', label: 'İzin ve mevzuat uyumu' },
    ],
    idealFor: [
      'Şantiye ilerlemesini yatırımcılara ve müşterilerine belgelemek isteyen inşaat firmaları',
      'Konut ve arsa projelerini havadan tanıtarak satış hızlandırmak isteyen emlak geliştiricileri',
      'Tesis, plaj ve çevresini panoramik olarak göstermek isteyen otel ve tatil köyleri',
      'Büyük ölçekli etkinlik, festival veya organizasyonlarını görsel olarak arşivlemek isteyen kurumlar',
    ],
    tools: [
      'DJI Mavic serisi',
      'SHGM izin sistemi',
      'Adobe Premiere Pro',
      'ND filtreler',
      '360° kamera',
    ],
  },
  {
    slug: 'web-tasarim',
    title: 'Web Tasarım',
    shortTitle: 'UI/UX Design',
    tagline: 'Ziyaretçiyi müşteriye dönüştüren tasarımlar',
    description:
      'Modern, kullanıcı dostu ve dönüşüm odaklı web tasarımları ile markanızı dijitale taşıyın.',
    longDescription: [
      'Bir web sitesi, işletmenizin dijital dünyadaki satış ofisidir. Ziyaretçi ilk 5 saniyede sitenizin güvenilirliği hakkında karar verir; karışık navigasyon, yavaş yüklenme ve amatör tasarım bu kararı olumsuz etkiler. İyi bir tasarım ise kullanıcıyı düşündürmeden istenen aksiyona yönlendirir.',
      'Craftsoft olarak tasarım sürecine kullanıcı araştırması ve bilgi mimarisi çalışmasıyla başlıyoruz. Wireframe\u0027ler üzerinden onayınızı alıyor, ardından marka kimliğinize uygun modern arayüzleri tasarlıyoruz. Her tasarım kararı; okunabilirlik, erişilebilirlik ve dönüşüm hedefleriyle gerekçelendirilir.',
      'Tasarımlarımız mobil öncelikli (mobile-first) yaklaşımla üretilir ve tüm cihazlarda kusursuz görünür. Landing page\u0027lerden kurumsal sitelere, portfolyolardan kampanya sayfalarına kadar her ölçekte proje için özgün tasarımlar geliştiriyoruz. Dilerseniz mevcut sitenizin UX denetimini de yapıp dönüşüm oranlarını artıracak iyileştirmeler öneriyoruz.',
    ],
    icon: Palette,
    gradient: 'from-amber-500 to-amber-600',
    softBg: 'bg-amber-50',
    textColor: 'text-amber-600',
    features: [
      'Responsive Tasarım',
      'UI/UX Optimizasyonu',
      'Landing Page',
      'Marka Kimliği',
      'Tasarım Sistemi',
      'Erişilebilirlik (WCAG)',
    ],
    deliverables: [
      'Kullanıcı akışları ve wireframe\u0027ler',
      'Figma\u0027da tam arayüz tasarımı',
      'Etkileşimli prototip',
      'Tasarım sistemi ve stil kılavuzu',
    ],
    process: [
      {
        title: 'Keşif ve Araştırma',
        description:
          'Hedeflerinizi, kullanıcılarınızı ve rakip siteleri analiz ederek tasarım yönünü belirliyoruz.',
      },
      {
        title: 'Wireframe ve Bilgi Mimarisi',
        description:
          'Sayfa yapılarını ve kullanıcı akışlarını taslak olarak çizip onayınıza sunuyoruz.',
      },
      {
        title: 'Görsel Tasarım',
        description:
          'Marka kimliğinize uygun, modern ve erişilebilir arayüzleri tasarlıyoruz.',
      },
      {
        title: 'Prototip ve Teslim',
        description:
          'Etkileşimli prototipi teslim ediyor, geliştirme için hazır tasarım dosyalarını aktarıyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Bir web sitesi tasarımı ne kadar sürer?',
        answer:
          'Landing page 1-2 hafta, kurumsal site 3-5 hafta içinde tasarım aşamasını tamamlar. Süre, sayfa sayısı ve onay döngülerinize göre netleşir.',
      },
      {
        question: 'Mevcut logom yok, sıfırdan marka kurabilir misiniz?',
        answer:
          'Evet. Logo tasarımı, renk paleti, tipografi ve görsel dil dahil temel marka kimliğinizi birlikte oluşturabiliriz.',
      },
      {
        question: 'Tasarımın kodlanmasını da siz mi yapıyorsunuz?',
        answer:
          'Evet, tasarımı birebir uygulayan kendi geliştirme ekibimiz var. Tasarım ve kodlamayı tek elden alarak tutarlılığı ve hızı garanti ediyoruz.',
      },
    ],
    stats: [
      { value: '60+', label: 'Tasarlanan arayüz' },
      { value: '5 gün', label: 'Ortalama ilk tasarım teslimi' },
      { value: '%100', label: 'Responsive' },
    ],
    idealFor: [
      'İlk kez web sitesi yaptıracak ve dijitalde profesyonel bir imaj kurmak isteyen girişimler',
      'Eski, yavaş ve mobil uyumsuz sitesini yenilemek isteyen köklü işletmeler',
      'Lansman ve kampanyalar için yüksek dönüşümlü landing page ihtiyacı olan pazarlama ekipleri',
      'Sitenin ziyaretçiyi müşteriye dönüştürmediğini düşünen ve UX denetimi isteyen markalar',
    ],
    tools: [
      'Figma',
      'Adobe Illustrator',
      'Miro',
      'Framer',
      'Zeplin',
    ],
  },
  {
    slug: 'yazilim-gelistirme',
    title: 'Yazılım Geliştirme',
    shortTitle: 'Next.js & React',
    tagline: 'İş süreçlerinize özel, ölçeklenebilir yazılımlar',
    description:
      'Modern ve ölçeklenebilir web uygulamaları geliştiriyoruz. Next.js, React ve özel çözümler.',
    longDescription: [
      'Hazır paket yazılımlar bir noktadan sonra işletmenizin büyümesini kısıtlar. İş süreçlerinize tam uyan, ölçeklenebilir ve güvenli özel yazılımlar ise rekabet avantajı yaratır. Craftsoft olarak fikirden yayına kadar tüm yazılım yaşam döngüsünü yönetiyoruz.',
      'Next.js, React ve TypeScript ile modern, hızlı ve SEO uyumlu web uygulamaları geliştiriyoruz. E-ticaret altyapıları, kurumsal yönetim panelleri, rezervasyon sistemleri ve SaaS ürünleri; kendi ürünlerimiz olan AkıllıSofra, İhaleYapı ve Salvo Agent (CrewAI tabanlı yapay zekâ operasyon platformu) üzerinde kanıtlanmış uzmanlığımızın somut örnekleridir.',
      'Yazılım sürecimiz agile prensiplerle ilerler: 2 haftalık sprint\u0027lerde çalışan yazılımlar teslim eder, her sprint sonunda demo yaparız. Test otomasyonu, kod incelemesi ve CI/CD süreçleriyle kaliteyi standart hale getiriyoruz. Yayın sonrası bakım, izleme ve geliştirme desteği ile ürününüzü birlikte büyütüyoruz.',
    ],
    icon: Code2,
    gradient: 'from-indigo-500 to-indigo-600',
    softBg: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    features: [
      'Next.js & React',
      'Özel Web Uygulamaları',
      'E-Ticaret',
      'API Geliştirme',
      'SaaS Ürünleri',
      'Bakım ve Destek',
    ],
    deliverables: [
      'Teknik gereksinim dokümanı ve mimari tasarım',
      '2 haftalık sprintlerde çalışan yazılım teslimleri',
      'Test süreçleri ve yayın (deploy) otomasyonu',
      'Kaynak kod teslimi ve dokümantasyon',
    ],
    process: [
      {
        title: 'Analiz ve Planlama',
        description:
          'İhtiyaçlarınızı teknik gereksinimlere dönüştürüyor, mimariyi ve yol haritasını çıkarıyoruz.',
      },
      {
        title: 'Tasarım ve Geliştirme',
        description:
          'UI tasarımı onayınızın ardından sprint bazlı geliştirmeye başlıyoruz.',
      },
      {
        title: 'Test ve Yayın',
        description:
          'Otomatik ve manuel testlerle kaliteyi doğruluyor, canlı ortama sorunsuz geçiş yapıyoruz.',
      },
      {
        title: 'Bakım ve Büyütme',
        description:
          'İzleme, hata düzeltme ve yeni özellik geliştirmeleriyle ürününüzü birlikte büyütüyoruz.',
      },
    ],
    faqs: [
      {
        question: 'Hangi teknolojileri kullanıyorsunuz?',
        answer:
          'Öncelikli stack\u0027imiz Next.js, React, TypeScript ve Tailwind CSS. Backend tarafında Node.js ve PostgreSQL tercih ediyor; ihtiyaç halinde .NET veya Python tabanlı çözümler de sunuyoruz.',
      },
      {
        question: 'Kodların mülkiyeti bana ait olacak mı?',
        answer:
          'Evet, sözleşme gereği tüm kaynak kodları, dokümantasyon ve hesaplar size teslim edilir. Craftsoft olarak geliştirdiğimiz ürünlerin tamamında bu ilkeyi uyguluyoruz.',
      },
      {
        question: 'Mevcut sistemimle entegrasyon yapabilir misiniz?',
        answer:
          'Evet. ERP, muhasebe, ödeme sistemleri veya üçüncü parti API\u0027lerle entegrasyon konusunda deneyimliyiz. Mevcut sisteminizin dokümantasyonunu inceleyip uygun entegrasyon stratejisini öneriyoruz.',
      },
    ],
    stats: [
      { value: '20+', label: 'Yayına alınan ürün' },
      { value: '%99.9', label: 'Çalışma süresi (uptime)' },
      { value: '3', label: 'Kendi SaaS ürünümüz' },
    ],
    idealFor: [
      'Hazır paket yazılımların yetmediği, süreçlerine özel çözüm arayan büyüyen şirketler',
      'Fikrini hızlıca MVP\u0027ye dönüştürüp pazar testi yapmak isteyen girişimciler',
      'Rezervasyon, yönetim paneli veya e-ticaret altyapısı kurmak isteyen hizmet işletmeleri',
      'Ölçeklenen SaaS ürününü güvenilir bir teknik ekiple büyütmek isteyen ürün sahipleri',
    ],
    tools: [
      'Next.js',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Vercel & AWS',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
