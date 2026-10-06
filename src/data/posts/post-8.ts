import type { BlogPost } from '../blog/types';

const post: BlogPost = {
  slug: 'saas-urun-gelistirme-yol-haritasi',
  title: 'SaaS Ürün Geliştirme: Fikirden İlk Ödeyen Müşteriye Yol Haritası',
  excerpt:
    'SaaS fikrinizi pazara sürmek için gereken yol haritasını adım adım ele alıyoruz: problem validasyonundan MVP geliştirmeye, fiyatlandırma stratejisinden ilk ödeyen müşteriyi kazanmaya kadar. Next.js ve React tabanlı modern bir SaaS ürününü gerçek bir ajans gözünden anlatıyoruz.',
  category: 'Yazılım',
  tags: ['SaaS geliştirme', 'MVP', 'yazılım girişimi', 'fiyatlandırma stratejisi', 'Next.js'],
  date: '2026-02-12',
  readingTime: 14,
  author: 'Craftsoft Editör Ekibi',
  authorRole: 'İçerik & Pazarlama',
  blocks: [
    {
      type: 'paragraph',
      text: 'Türkiye ve dünyada yazılım girişimciliği her geçen yıl daha cazip bir alan hâline geliyor; ancak her ay binlerce SaaS fikri hayata geçirilmeye çalışılırken çok azı ilk ödeyen müşterisine ulaşabiliyor. Sorun genellikle fikrin kalitesinde değil, izlenen yol haritasının yanlış sıralanmış adımlarında gizli. Birçok ekip aylarca ürün geliştirir, lansman gününü bekler ve karşılaştığı gerçeklik soğuk bir sessizlik olur: kimse ürünü kullanmak istemiyor, çünkü kimse onu istememişti. Craftsoft olarak hem kendi ürünlerimiz AkıllıSofra (restoranlar için QR menü ve sipariş yönetim sistemi), İhaleYapı (ihale ve tedarik süreçleri yönetim platformu) ve Salvo Agent (yapay zekâ destekli satış ve destek ajanı) üzerinde hem de müşterilerimizin girişimlerinde bu yolculuğu defalarca yaşadık. Bu yazıda, fikrin ilk defa bir not defterine düştüğü andan banka hesabınıza ilk abonelik ücretinin yattığı ana kadar geçen süreci, hata yapmamanız için gereken sırayla ve somut araçlarla anlatıyoruz.',
    },
    {
      type: 'heading',
      text: 'Bölüm 1: Problem Validasyonu — İnsanların Gerçekten Acı Çektiği Yerde Durun',
    },
    {
      type: 'paragraph',
      text: 'SaaS ürünlerinin yüzde 90’ı çözmeye çalıştığı problemi bilmeden geliştiriliyor. Ekipler fikri kendi içlerinde konuşarak, arkadaş çevrelerinden alınan yüzeysel olumlu geri bildirimlerle ve rakip ürünlerin varlığını bir pazar kanıtı sayarak ilerliyor. Oysa rakip ürünün olması sadece o alanın rekabetçi olduğunu gösterir; müşterilerin ödeme yapmaya hazır olduğunu göstermez. Gerçek validasyon, hedef kitlenizin şu an bu problemi nasıl çözdüğünü, bu çözümün onlara neye mal olduğunu ve yeni bir çözüme ne kadar para ayırabileceğini rakamlarla ortaya koymaktır.',
    },
    {
      type: 'paragraph',
      text: 'Pratik bir yöntem: hedef kitlenizden en az 20-30 kişiyle yapılandırılmış görüşme yapın, ancak “Bu ürünü kullanır mıydınız?” sorusunu asla sormayın. İnsanlar nazik olur, gerçeği söylemez. Bunun yerine “Bu problemi en son ne zaman yaşadınız? O anda ne yaptınız? Bu size ne kadara mal oldu?” sorularına odaklanın. Problem son 30 gün içinde yaşanmamışsa, acı gerçek değildir. AkıllıSofra’yı geliştirirken İstanbul’daki 40’tan fazla restoran işletmecisiyle konuştuk; sipariş karışıklığı, personel vardiya planlaması ve mutfak-stok koordinasyonunun her gün tekrarlanan, maliyeti ölçülebilir acılar olduğunu gördük. Bu bulgular, MVP’nin hangi özelliklerle başlaması gerektiğine dair yol haritamızı doğrudan belirledi.',
    },
    {
      type: 'list',
      items: [
        'En az 20 hedef kullanıcıyla yüz yüze veya görüntülü görüşme yapın; anket formları yüzeysel kalır.',
        'Problem yaşanma sıklığını ve mevcut çözümün maliyetini (para + zaman) kayıt altına alın.',
        'Rakip analizini yapın ancak rakibin yaptığı hataları kopyalamayın; farklılaşma noktanızı buradan çıkarın.',
        'Problem cümlesini tek bir cümleye indirin: “X tipi işletmeler, Y problemi yüzünden ayda Z lira kaybediyor.”',
        'Validasyon sonucunda ödeme niyeti göstermeyen segmenti elemeyi korkmadan yapın.',
      ],
    },
    {
      type: 'quote',
      text: 'İnsanlar ürününüzü beğenebilir ama asla beğenmek için ödeme yapmazlar. Yalnızca acı çektikleri için ve sizin çözümünüz o acıyı ortadan kaldırdığı için öderler.',
      author: 'Craftsoft Ürün Ekibi',
    },
    {
      type: 'heading',
      text: 'Bölüm 2: MVP Kapsamını Doğru Çizmek — Az Özellik, Çok Değer',
    },
    {
      type: 'paragraph',
      text: 'MVP, yani minimum uygulanabilir ürün, kavramı herkes tarafından bilinir ama uygulamada çoğu ekip için “v1 ürün” anlamına gelir; oysa ikisi aynı şey değildir. MVP, hipotezlerinizi en hızlı ve en ucuz şekilde test etmek için tasarlanmış bir deney düzeneğidir. Eğer MVP’niz beş ana özellik içeriyorsa, muhtemelen hiçbir hipotezi net biçimde test etmiyorsunuz demektir. Kural şu: her bir özellik, “Bu özellik olmazsa müşteri ödeme yapmaz mı?” sorusuna “evet” cevabı veriyorsa kalmalıdır. Bu soruya “hayır” diyen her şey, MVP sonrası biriktirme listesine gider.',
    },
    {
      type: 'paragraph',
      text: 'Teknoloji tarafında MVP için en kritik karar, doğru mimariyi ilk günden kurmaktır. Next.js ve React ekosistemi bu noktada güçlü bir seçim: sunucu taraflı render ile SEO dostu sayfalar, App Router ile kolay rotalama, Vercel ile dakikalar içinde canlıya alma ve TypeScript ile büyüdükçe kontrolden çıkmayan kod tabanı sunar. İhaleYapı’yı geliştirirken karar verdirdiğimiz ilk şey, tedarik talebi oluşturma ve onay akışıydı; raporlama paneli, çoklu depo desteği ve entegrasyonlar ilk sürüme girmedi. İlk sürümdeki tek amaç, tedarik sürecini yöneten bir kullanıcının “bu işi artık Excel yerine buradan yürütürüm” demesini sağlamaktı. Bu odak, geliştirme süresini üç aydan sekiz haftaya indirdi.',
    },
    {
      type: 'subheading',
      text: 'Önerilen MVP Teknoloji Yığını',
    },
    {
      type: 'list',
      items: [
        'Önyüz: Next.js 15 + React 19 + TypeScript; Tailwind CSS ile hızlı arayüz geliştirme.',
        'Veritabanı: MVP aşamasında Supabase veya Neon gibi yönetilen PostgreSQL; sorguların yüzde 80’i için yeterli.',
        'Kimlik doğrulama: Auth.js veya Clerk; oturum yönetimini sıfırdan yazmayın.',
        'Ödeme: Stripe veya yerel pazarda iyzico/PayTR; abonelik mantığını ilk günden ödeme sağlayıcısına devredin.',
        'Analitik: Google Analytics 4 + PostHog; kullanıcıların hangi ekranda takıldığını veriyle görün.',
        'Hata takibi: Sentry; canlıda patlayan bir hatayı müşteriden önce siz öğrenin.',
      ],
    },
    {
      type: 'highlight',
      text: 'Altın kural: MVP’nin başarı ölçütü özellik sayısı değil, aktivasyondur. Kullanıcı kayıt olduktan sonra üründe ilk “aha!” anını yaşaması gereken süreyi kısaltın. Salvo Agent’ta bu süreyi, kurulum kodunu kopyalayıp siteye yapıştırmadan sohbet penceresinin canlı görünmesine kadar geçen 4 dakikaya indirdik ve aktivasyon oranımız yüzde 34’ten yüzde 61’e çıktı.',
    },
    {
      type: 'heading',
      text: 'Bölüm 3: Fiyatlandırma — Değerin Altında Satmak da Kriz, Üstünde Satmak da',
    },
    {
      type: 'paragraph',
      text: 'Fiyatlandırma, SaaS dünyasında en az ürün kadar stratejik bir disiplindir ve ne yazık ki en çok göz ardı edilenidir. Girişimciler genellikle rakip fiyatlarına bakar, biraz altına konumlanır ve bu kararı verirken kendi maliyet yapılarını, hedef segmentin ödeme alışkanlıklarını ve ürünün sağladığı gerçek ekonomik değeri hiç hesaba katmaz. Oysa doğru fiyatlandırma, ürününüzün değer önerisini müşterinin cüzdanına çeviren matematiktir. B2B SaaS’ta müşterinin sorunu çözdüğünüzde kazandığı tasarruf veya yarattığınız gelir, ürününüzün fiyatının on katı bile olabilir; bu farkı müşteriye net biçimde gösterebiliyorsanız fiyatınızı savunmak kolaylaşır.',
    },
    {
      type: 'paragraph',
      text: 'Üç katmanlı bir model çoğu durumda işe yarar: temel plan, küçük ekiplerin tek başına başlayabileceği giriş noktası; profesyonel plan, ürünü günlük iş akışının merkezine koyan ekipler için; kurumsal plan ise özel SLA, entegrasyon ve destek içeren özel fiyatlandırmadır. Türkiye pazarı için kredi kartıyla aylık abonelik alışkanlığı yerleşmiş durumda, ancak B2B segmentte yıllık ödemede yüzde 15-20 indirim sunmak nakit akışını ciddi iyileştirir. AkıllıSofra’da yıllık abonelik oranını yüzde 42’ye çıkardığımızda, pazarlama bütçesini artırma esnekliği kazandık; bu da organik büyümeyi tetikledi.',
    },
    {
      type: 'quote',
      text: 'Fiyatınızı ilk üç müşteriniz belirlemesin. Fiyat, değer önerinizin parasal karşılığıdır ve bu hesabı siz yapmalısınız; müşterinin itirazı değil, sessizliği sizi revize etmeye itmelidir.',
      author: 'Craftsoft Kurucu Ortakları',
    },
    {
      type: 'heading',
      text: 'Bölüm 4: İlk Ödeyen Müşteriyi Kazanmak — Dağıtım, Üründen Daha Sert Bir Problem',
    },
    {
      type: 'paragraph',
      text: 'Ürününüz hazır, fiyatınız belli; şimdi karşınıza pazarlama dünyasının en acımasız gerçeği çıkıyor: dağıtım. İlk 10 müşteri, ilk 100 müşteriden ve ilk 1000 müşteriden tamamen farklı bir strateji ister. İlk 10 müşteri için ürününüz henüz kanıtlanmamıştır; bu yüzden satış süreci el yordamıyla, kurucunun kendisinin yürütmesi gereken, yüksek dokunuşlu bir ilişki sürecidir. Cold e-posta, LinkedIn’den doğrudan ulaşma, sektör WhatsApp gruplarına katılma, fuarlarda stant kiralama ve hatta hedef müşterilerinizi ücretsiz pilot kullanıcı yapma; hepsi bu aşamada meşru ve gereklidir.',
    },
    {
      type: 'paragraph',
      text: 'Pilot kullanıcı stratejisi özellikle güçlüdür: hedef listenizden 5-10 işletmeyi ücretsiz kullanıma davet edin, ancak karşılığında düzenli geri bildirim toplantısı ve referans izni isteyin. Bu kullanıcılar ürününüzün en acımasız eleştirmenleri ve en samimi savunucuları olacaktır. Salvo Agent’ın ilk ticari sürümü öncesi 12 siteyi pilot programına aldık; bu sitelerin geri bildirimleriyle 40’tan fazla iyileştirme yaptık ve lansman haftasında aynı 12 pilot kullanıcının 9’u ödemeye geçti. Referans ve sosyal kanıt biriktirmek, B2B satışta karar süresini haftalar kısaltır; kurumsal alıcının “kimler kullanıyor?” sorusuna hazır bir cevabınız olmalıdır.',
    },
    {
      type: 'subheading',
      text: 'İlk Müşteriye Giden Kanalların Öncelik Sırası',
    },
    {
      type: 'list',
      items: [
        'Kurucu ağı ve doğrudan tanıdıklar: en hızlı ilk 3 müşteri genellikle çevreden gelir, utanılacak bir şey değildir.',
        'LinkedIn organik içerik: ürün geliştirme sürecini şeffaf paylaşmak erken benimseyicileri çeker.',
        'Sektör toplulukları: restoran, lojistik, e-ticaret gibi alanlarda sektörel WhatsApp ve Discord grupları aktif kullanıcı kaynağıdır.',
        'Google Ads ve Meta reklamları: ürün-pazar uyumu kanıtlanmadan önce büyük bütçe ayırmayın; küçük test bütçeleriyle mesaj testi yapın.',
        'SEO içerik: çözdüğünüz problemle ilgili arama hacmi olan anahtar kelimelere içerik üretin; Ahrefs veya Semrush ile hacmi doğrulayın.',
      ],
    },
    {
      type: 'heading',
      text: 'Bölüm 5: Metriklerle Büyümek — Ölçmediğinizi Yönetemezsiniz',
    },
    {
      type: 'paragraph',
      text: 'İlk müşteriler geldiğinde iş bitmiş değildir; asıl maraton burada başlar. SaaS ekonomisinin kalp atışı aylık düzenli gelir (MRR) üzerinden ölçülür, ancak MRR tek başına yanıltıcı olabilir. Birlikte izlenmesi gereken üç kritik metrik vardır: müşteri kaybı oranı (churn), müşteri edinme maliyeti (CAC) ve müşteri yaşam boyu değeri (LTV). Churn oranı yüzde 5’in üzerindeyse ürün-pazar uyumunda bir sorun var demektir; yeni müşteri kazanma çabalarınız bir kovandan delikleri kapatan çocuğa benzer. LTV/CAC oranı 3’ün altındaysa büyümek sizi daha hızlı batırır.',
    },
    {
      type: 'paragraph',
      text: 'Araç tarafında Looker Studio ile Google Analytics 4 ve ödeme sağlayıcınızın verilerini tek panelde birleştirerek haftalık ritüel oluşturun. Stripe’da abonelik durumlarını, PostHog’da özellik kullanımını, Hotjar’da kullanıcı davranışını izlemek size ürün kararlarınız için zengin bir sinyal seti sunar. Retention eğrisi, SaaS ürününün sağlığının en dürüst fotoğrafıdır: kullanıcılar ikinci haftada dönüyor mu, üçüncü ayda aktif mi? İhaleYapı’da ilk sürümde raporlama modülünün kullanılmadığını PostHog verisiyle gördük ve modülü sadeleştirdik; kullanım oranı iki ayda üç kat arttı. Bu, “ölç-öğren-döngüye sok” prensibinin somut bir örneğidir.',
    },
    {
      type: 'highlight',
      text: 'Erken aşama SaaS için haftalık takip listesi: Yeni kayıt sayısı, kayıt-tanıtım oranı (activation), haftalık aktif kullanıcı, churn nedeni listesi ve en çok kullanılan üç özellik. Bu beş sayıyı her pazartesi ekipçe 20 dakika gözden geçirin; kararlarınızı bu verilere göre verin, tahmine değil.',
    },
    {
      type: 'heading',
      text: 'Bölüm 6: Yaygın Hatalar ve Craftsoft Deneyiminden Dersler',
    },
    {
      type: 'paragraph',
      text: 'Yıllar içinde onlarca SaaS projesinde aynı hataların tekrarlandığını gördük. Bunlardan ilki, mükemmeliyetçilik tuzağıdır: lansmanı “birkaç küçük eksik” için ertelemek, pazar geri bildiriminden kaçmanın en zararsız görünen halidir. İkincisi, özellik enflasyonudur: ilk müşterilerin her isteğini yol haritasına eklemek ürünü herkese hitap eden ama kimseye mükemmel olmayan bir bulamaç hâline getirir. Üçüncüsü, tek kanal bağımlılığıdır: tüm büyümenin tek bir reklam kanalına veya tek bir kurucunun ağına dayanması, algoritma değişikliğinde veya temas kopunca büyümeyi anında durdurur.',
    },
    {
      type: 'paragraph',
      text: 'Bir diğer kritik hata, ölçeklenemez satış faaliyetlerini erken bırakmaktır. El yordamıyla yapılan her şey — müşteriye tek tek veri girişi yapan kurucu, manuel kurulum ekranı paylaşan ekip, telefonla destek veren geliştirici — başlangıçta değerli iken, müşteri sayısı 50’yi geçince çöküş nedenidir. Her manuel işlemi, üçüncü kez yapmak zorunda kaldığınızda otomasyona çevirilecek şekilde dokümante edin. Dördüncü kez manuel yapmak, sürecinizin sizi yönettiğinin işaretidir.',
    },
    {
      type: 'list',
      items: [
        'Hata 1: Validasyonsuz geliştirmek. Çözümü: 20 müşteri görüşmesi olmadan tek satır kod yazmayın.',
        'Hata 2: Erken lansmandan korkmak. Çözümü: utanç verici ama çalışan bir sürümü, kusursuz ama hayali bir sürümden önce yayınlayın.',
        'Hata 3: Fiyatı duygusal belirlemek. Çözümü: değer hesabını yapın, üç katman kurun, her çeyrekte fiyat testi yapın.',
        'Hata 4: Churn’ü görmezden gelmek. Çözümü: her ayrılan müşteriye 15 dakikalık çıkış görüşmesi yapın; ayrılma nedeni ürün yol haritanızın en değerli girdisidir.',
        'Hata 5: Metriksiz büyümek. Çözümü: ilk günden GA4, PostHog ve Stripe paneli kurun; pazartesi ritüelini kaçırmayın.',
      ],
    },
    {
      type: 'heading',
      text: 'Sonuç: Yol Haritası Özet ve İlk Adım',
    },
    {
      type: 'paragraph',
      text: 'Özetleyelim: SaaS yolculuğu, önce problemi insanların acı çektiği yerde yakalamakla başlar; MVP ile bu acıyı en kısa sürede dindiren tek değerli çözümü sunmakla devam eder. Fiyatlandırma, değerin matematiksel karşılığı olarak bilinçli kurulur. İlk müşteriler, kurucunun el yordamıyla ama ölçüm yaparak kazanılır; büyüme ise metriklerle yönetilen disiplinli bir döngüyle sürdürülür. Bu döngünün her turunda ürün biraz daha keskin, mesaj biraz daha net ve müşteri biraz daha sadık hâle gelir. Hızlı davranan ama ölçümü ihmal etmeyen ekipler, her zaman daha yavaş ama daha “havalı” ürünler geliştiren ekipleri geçer.',
    },
    {
      type: 'paragraph',
      text: 'Elinizde bir SaaS fikri varsa ve doğru mimariyle, doğru yol haritasıyla hayata geçirmek istiyorsanız, Craftsoft’un ürün geliştirme ekibi sizinle konuşmayı çok ister. AkıllıSofra, İhaleYapı ve Salvo Agent gibi kendi ürünlerimizde öğrendiğimiz her dersi, sizin projenize de taşıyoruz. İlk adım çok basit: fikrinizi 30 dakikalık ücretsiz keşif görüşmesinde bize anlatın, birlikte validasyondan MVP’ye giden yolun ilk taşlarını birlikte koyalım. Bugün başlayan bir ürün, bir yıl sonra rakiplerinizin yetişmeye çalıştığı bir konumda olabilir.',
    },
  ],
};

export default post;
