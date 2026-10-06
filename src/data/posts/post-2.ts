import type { BlogPost } from '../blog/types';

const post: BlogPost = {
  slug: 'teknik-seo-rehberi',
  title: 'Teknik SEO Rehberi: Sitenizi Google’ın Zirvesine Taşıyan 12 Kritik Adım',
  excerpt:
    'İçeriğiniz ne kadar iyi olursa olsun, teknik altyapınız zayıfsa Google’da üst sıralara çıkamazsınız. Core Web Vitals, taranabilirlik, şema işaretlemesi ve JavaScript SEO dahil 12 kritik teknik adımın uygulama detaylarını inceleyin.',
  category: 'SEO',
  tags: ['teknik SEO', 'Core Web Vitals', 'site hızı optimizasyonu', 'şema işaretlemesi', 'Google sıralama faktörleri'],
  date: '2026-01-13',
  readingTime: 14,
  author: 'Craftsoft Editör Ekibi',
  authorRole: 'İçerik & Pazarlama',
  blocks: [
    {
      type: 'paragraph',
      text: 'Teknik SEO, bir binanın taşıyıcı kolonları gibidir: görünmez, ancak yıkılmaması için olmazsa olmazdır. İçerik ekibiniz dünyanın en iyi rehberini yazsa bile siteniz Googlebot tarafından düzgün taranamıyorsa, sayfalarınız saniyeler içinde yüklenmiyorsa veya mobil deneyiminiz kullanıcıyı ilk beş saniyede kaçırıyorsa o içerik arama sonuçlarının ikinci sayfasında hak ettiği ilgiyi göremeyecektir. Google’ın 2024-2025 dönemindeki güncellemeleriyle teknik sağlığın sıralama sinyalleri içindeki ağırlığı daha da arttı; özellikle Core Web Vitals metrikleri artık yalnızca bir “kullanıcı deneyimi önerisi” değil, gerçek sıralama faktörüdür. Bu rehberde, Craftsoft olarak yönettiğimiz onlarca kurumsal web projesinde uyguladığımız 12 kritik teknik SEO adımını, her birinin nasıl denetleneceğini ve öncelik sırasını paylaşacağız.',
    },
    {
      type: 'paragraph',
      text: 'Rehberi uygulamadan önce iki aracı mutlaka tanıyın: Google Search Console sitenizin Google gözündeki sağlık raporudur ve ücretsizdir; PageSpeed Insights ise tek bir sayfanın Core Web Vitals skorlarını, hem laboratuvar hem saha verisiyle gösterir. Bu rehberdeki her adımı önce bu iki araçla tespit edip sonra düzelteceksiniz. Teknik SEO’da “hissetmek” yerine “ölçmek” kuralı, hatalı optimizasyonların yüzde doksanını önler.',
    },
    {
      type: 'heading',
      text: '1. Taranabilirlik ve İndekslenme: Google’ın Sitenizi Gördüğünden Emin Olun',
    },
    {
      type: 'paragraph',
      text: 'Teknik SEO’nun sıfırıncı adımı, Google’ın sitenizdeki önemli sayfaları gerçekten indeksleyip indekslemediğini kontrol etmektir. Search Console’un “Sayfa Dizinleme” raporunu açın: burada “tarandı, şu anda dizine eklenmedi” etiketli sayfa sayısı binlerde ise sitenizde ciddi bir tarama bütçesi veya kalite sorunu var demektir. En yaygın nedenler şunlardır: noindex etiketi yanlışlıkla canlıya alınmış robots.txt dosyası, sayfaları birbirine zincirleyen yönlendirme döngüleri, canonical etiketlerinin yanlış işaret etmesi ve site haritasında (sitemap) olmayan önemli sayfalar. Site haritanızı Search Console’a gönderin ve indekslenmesi gereken her sayfanın “site:alanadiniz.com/sayfa” aramasıyla Google’da göründüğünü doğrulayın.',
    },
    {
      type: 'list',
      items: [
        'Robots.txt dosyanızı kontrol edin: Disallow satırları içerik sayfalarınızı yanlışlıkla engelliyor mu?',
        'Canonical etiketleri: Her sayfa kendisini ya da tercih edilen versiyonunu gösteriyor mu? Parametreli URL’ler tek bir canonical’a mı toplanıyor?',
        'Yönlendirme zincirleri: Eski URL’ler tek adımda yeni hedefe yönleniyor mu? Üç ve üzeri zincir hem tarama bütçesini hem sayfa hızını yiyor.',
        'Site haritası: XML sitemap’iniz yalnızca 200 durum kodlu, indekslenmeye değer kanonik sayfaları içermeli; 404 ve yönlendirilen URL’ler çıkarılmalı.',
      ],
    },
    {
      type: 'subheading',
      text: 'Tarama Bütçesi ve Büyük Siteler',
    },
    {
      type: 'paragraph',
      text: '10 bin sayfanın üzerindeki e-ticaret ve katalog sitelerinde tarama bütçesi yönetimi ayrı bir uzmanlık ister. Googlebot sitenize günde sınırlı sayıda istek gönderir; bu bütçeyi filtre sayfaları, arama sonuç sayfaları ve yinelenen parametreli URL’ler tüketirse gerçek ürün ve içerik sayfalarınız taranamaz hale gelir. Parametreli URL’leri robots.txt ile engellemek, gereksiz filtre kombinasyonlarına noindex vermek ve faceted navigation’ı sabit kategorilere indirgemek ilk üç hamledir. Ahrefs veya Screaming Frog gibi bir tarayıcıyla sitenizi tarayıp “derinlik” raporuna bakın: önemli sayfalarınız ana sayfaya kaç tık uzaklıkta?',
    },
    {
      type: 'heading',
      text: '2. Core Web Vitals: Hız Artık İyileştirme Değil, Zorunluluk',
    },
    {
      type: 'paragraph',
      text: 'Core Web Vitals üç metrikten oluşur: Largest Contentful Paint (LCP, ideal olarak 2,5 saniyenin altı), Interaction to Next Paint (INP, 200 milisaniyenin altı) ve Cumulative Layout Shift (CLS, 0,1’in altı). 2024 itibarıyla INP, eski First Input Delay metriğinin yerini aldı ve gerçek kullanıcı etkileşimlerini ölçüyor; yani laboratuvarda hızlı görünen ama tıklamaya geç cevap veren siteler artık yakalanıyor. PageSpeed Insights’ta saha verisi (CrUX) kısmında “İyi” yüzdesi 75’in altındaysa sıralama potansiyeliniz kısıtlı demektir. Unutmayın: bu metrikler yalnızca mobil değil, masaüstü verisiyle ayrı ayrı değerlendirilir ve mobil genellikle daha kötüdür.',
    },
    {
      type: 'subheading',
      text: 'LCP’yi Düşürmenin Somut Yolları',
    },
    {
      type: 'list',
      items: [
        'Hero görselinizi WebP veya AVIF formatında, gerçek ekran boyutunda sunun; mobilde 1600 piksellik görseli 400 piksellik alana koymayın.',
        'Kritik görsel ve fontları preload ile önceliklendirin; üst alandaki (above the fold) içeriği engelleyen JavaScript ve CSS’i kaldırın.',
        'Sunucu yanıt süresini (TTFB) 600 milisaniyenin altına indirin; Türkiye’deki kullanıcılarınız için sunucu konumu veya CDN kritik önemdedir.',
        'Üçüncü parti scriptleri (canlı destek, piksel, etiket yöneticisi) erteleyin; her bir script LCP’yi 100-300 milisaniye yiyebilir.',
      ],
    },
    {
      type: 'subheading',
      text: 'INP ve CLS: Etkileşim ve Görsel Stabilite',
    },
    {
      type: 'paragraph',
      text: 'INP’yi iyileştirmek için uzun JavaScript görevlerini parçalayın, tıklama anında çalışan ağır işlemleri ertelemenin (defer, idle callback) yollarını araştırın ve üçüncü parti widget’ların ana thread’i ne kadar meşgul ettiğini WebPageTest ile ölçün. CLS tarafında ise görsellere ve video alanlarına mutlaka width-height attribute ekleyin, fontlar yüklenirken metin kaymasını önlemek için font-display: swap yerine size-adjust özellikli font yükleme stratejisi kullanın ve reklam veya bildirim banner’ları için sayfa yüklendikten sonra içerik iten değil, rezerve edilmiş alan kullanın. Görünürde küçük görünen 0,2’lik bir CLS, kullanıcı yanlış yere tıkladığında iade ve güven kaybı olarak size döner.',
    },
    {
      type: 'highlight',
      text: 'Pratik hedef: Mobilde LCP 2,5 sn, INP 200 ms, CLS 0,1 altı. Search Console’un Core Web Vitals raporunda “İyi” URL oranınız yüzde 90’ın üzerindeyse hız başlığını kapatabilir, içerik ve otorite çalışmalarına ağırlık verebilirsiniz.',
    },
    {
      type: 'heading',
      text: '3. JavaScript SEO: React ve Next.js Siteniz Google Tarafından Okunuyor mu?',
    },
    {
      type: 'paragraph',
      text: 'Modern web siteleri artık büyük ölçüde React, Next.js, Vue veya benzeri çatılarla geliştiriliyor ve bu framework’ler SEO için hem büyük fırsat hem gizli risk taşıyor. Googlebot sayfayı taradığında HTML’de içerik görünmüyorsa, içeriği oluşturmak için sayfayı render etmesi gerekir; bu iki aşamalı süreç indeksleme gecikmesine yol açar. Next.js kullanıyorsanız sayfalarınızı sunucu tarafında render edin (SSR veya SSG); tamamen istemci tarafında (client-side) oluşturulan kritik içerik sayfaları, özellikle ürün ve hizmet sayfaları, arama görünürlüğünü riske atar. Google’ın URL Denetleme aracıyla canlı URL’yi test edin ve “HTML işlendi” bölümünde içeriğinizin göründüğünü doğrulayın.',
    },
    {
      type: 'paragraph',
      text: 'Sık yapılan ikinci hata, bağlantıların JavaScript olay dinleyicileriyle açılmasıdır. Googlebot anchor (a) etiketiyle verilen HTML bağlantılarını takip eder; div veya button üzerine tıklama olayı ekleyerek yapılan “gezinme” Google için bağlantı değildir ve site içi bağlantı mimariniz çöker. Üçüncü risk ise sonsuz kaydırma (infinite scroll) ve sayfalama: ürün listeniz tek bir “daha fazla yükle” düğmesiyle açılıyorsa, her ürün sayfasına HTML bağlantısıyla ulaşılabildiğinden emin olun. Craftsoft olarak geliştirdiğimiz Next.js projelerinde sayfalama her zaman crawlable HTML bağlantılarıyla, sonsuz kaydırma ise ek bir konfor özelliği olarak tasarlanır; bu ayrım teknik SEO’nun bel kemiğidir.',
    },
    {
      type: 'heading',
      text: '4. Yapısal Veri ve Zengin Sonuçlar: Arama Sonuçlarında Daha Büyük Görünün',
    },
    {
      type: 'paragraph',
      text: 'Schema.org işaretlemesi, içeriğinizi arama motorlarına yapılandırılmış bir dilde anlatmanızı sağlar ve doğru uygulandığında yıldız puanları, fiyat, stok bilgisi, SSS akordeonları ve breadcrumb gibi zengin sonuçları tetikler. Zengin sonuçlar tıklama oranınızı yüzde 20-35 artırabilir; aynı sıralamada bile daha büyük görünen sonuç her zaman kazanır. E-ticaret siteleri için Product ve Offer şeması, bloglar için Article, işletmeler için LocalBusiness, hizmet sayfaları için FAQ ve HowTo şemaları önceliklidir. Google’ın Zengin Sonuç Testi aracıyla işaretlemenizi doğrulayın ve Search Console’un “Yapılandırılmış Veri” raporundaki hataları sıfırlayın.',
    },
    {
      type: 'list',
      items: [
        'LocalBusiness şeması: İşletme adı, adres, telefon, çalışma saatleri ve coğrafi koordinatları işaretleyin; Google İşletme Profili ile tutarlılık şart.',
        'BreadcrumbList: Sayfa hiyerarşisini işaretleyin; arama sonuçlarında kategori yolunun görünmesi site yapısını da kullanıcıya anlatır.',
        'FAQPage: Gerçekten sorulan soruları ekleyin; ancak 2023 sonrası Google her sayfada FAQ zengin sonucunu göstermiyor, niyetle uyumlu sayfalarda kullanın.',
        'Review ve AggregateRating: Yalnızca gerçek, sitede görünür kullanıcı yorumlarına işaret edin; kendinize atfedilen sahte puanlar manuel ceza sebebidir.',
      ],
    },
    {
      type: 'quote',
      text: 'Şema işaretlemesi sitenizin kimlik kartıdır. Google içeriğinizi okumak zorunda kalmaz, ona okur gibi anlatırsınız; bu fark aylar içinde sıralama farkına dönüşür.',
      author: 'Craftsoft Editör Ekibi',
    },
    {
      type: 'heading',
      text: '5. Mobil Uyumluluk, HTTPS ve Site Mimarisi',
    },
    {
      type: 'paragraph',
      text: 'Mobil öncelikli indeksleme artık standart: Google sitenizin mobil versiyonunu esas alır, masaüstü versiyonu ikincildir. Bu yüzden mobilde farklı içerik, farklı başlık yapısı veya gizlenen bloklar göstermeyin; ayrı mobil alt alan adı (m.site.com) yerine responsive tasarım tercih edin. HTTPS ise tartışması bitmiş bir konudur: TLS sertifikanız geçerli değilse veya içerikler HTTP üzerinden karışık (mixed content) yükleniyorsa tarayıcı uyarısı kullanıcıyı kaçırır, Google da güven sinyalini düşürür. HSTS başlığı eklemek ve tüm HTTP trafiği tek adımda HTTPS’e yönlendirmek temel hijyendir.',
    },
    {
      type: 'paragraph',
      text: 'Site mimarisi konusunda altın kural şudur: kullanıcı ve Googlebot önemli herhangi bir sayfaya ana sayfadan en fazla üç tıkla ulaşabilmeli. Derin, mantıksız kategori ağaçları hem tarama bütçesini harcar hem de PageRank’in ürün sayfalarına akmasını zorlaştırır. Anahtar kelime araştırmanızı (Ahrefs, Semrush veya Search Console sorgu verisi) site mimarinizle eşleştirin: her önemli arama niyeti için karşılık gelen tek bir güçlü sayfanız olsun. Aynı niyete hizmet eden beş zayıf sayfa yerine tek güçlü sayfa, hem sıralama hem dönüşüm açısından her zaman kazanır.',
    },
    {
      type: 'heading',
      text: '6. Önceliklendirme ve Teknik SEO Denetim Takvimi',
    },
    {
      type: 'paragraph',
      text: '12 adımı aynı anda uygulamaya çalışmak yerine etki-gider matrisiyle ilerleyin. İlk ayda indeksleme ve tarama hatalarını, ikinci ayda Core Web Vitals’ı, üçüncü ayda yapısal veri ve site mimarisini ele alın. Teknik SEO bir proje değil, süreçtir: yazılım ekibiniz her sprintte kod gönderiyorsa her sprintte Search Console’da regresyon kontrolü yapın; özellikle JavaScript tabanlı sitelerde tek bir yanlış bileşen güncellemesi indekslenmeyi sessizce bozabilir. Çeyreklik Screaming Frog tam tarama, aylık PageSpeed takibi ve sürekli açık duran Search Console uyarıları bu ritmin üç ayağıdır.',
    },
    {
      type: 'list',
      items: [
        'Haftalık: Search Console kapsam ve deneyim raporlarına göz atın; ani düşüşleri 24 saat içinde araştırın.',
        'Aylık: PageSpeed Insights ile şablon bazlı hız kontrolü; yeni yayınlanan sayfaların indekslendiğini doğrulayın.',
        'Çeyreklik: Tam site taramasıyla kırık bağlantı, yönlendirme zinciri ve noindex sızıntılarını tarayın.',
        'Yayın öncesi: Her yeni sayfa şablonu için canonical, şema, hreflang ve mobil render kontrol listesi uygulayın.',
      ],
    },
    {
      type: 'quote',
      text: 'Teknik SEO’da mükemmellik aranmaz, kontrollü süreklilik aranır. Her ay küçük bir iyileştirme, yılda rakiplerinizi geride bırakan bileşik bir avantaj demektir.',
      author: 'Craftsoft Editör Ekibi',
    },
    {
      type: 'paragraph',
      text: 'Teknik SEO denetiminden nereden başlayacağınızı bilmiyorsanız veya siteniz React/Next.js tabanlıysa ve JavaScript render sorunlarından şüpheleniyorsanız, Craftsoft ekibi kapsamlı bir teknik SEO denetimi sunuyor. İndeksleme sağlığınızdan Core Web Vitals skorlarınıza kadar tüm yığını ölçüyor, öncelikli düzeltme planını teknik ekibinize teslim ediyoruz. Unutmayın: içerik kraldır ama teknik SEO, kralın sarayının kapısını açan anahtardır; kapı kapalıysa kimse kralı göremez.',
    },
  ],
};

export default post;
