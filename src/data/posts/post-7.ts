import type { BlogPost } from '../blog/types';

const post: BlogPost = {
  slug: 'donusum-odakli-web-tasarimi',
  title: 'Dönüşüm Odaklı Web Tasarımı: Ziyaretçiyi Müşteriye Çeviren 8 İlke',
  excerpt: 'Güzel görünen ama satmayan web sitelerinin çağı bitti. Dönüşüm odaklı tasarımın 8 kanıtlanmış ilkesini, hızdan sosyal kanıta, formlardan CTA mimarisine kadar tüm kritik karar noktalarıyla birlikte inceliyoruz.',
  category: 'Web Tasarım',
  tags: ['dönüşüm odaklı tasarım', 'web tasarım', 'landing page optimizasyonu', 'CRO', 'site hızı'],
  date: '2026-04-22',
  readingTime: 12,
  author: 'Craftsoft Editör Ekibi',
  authorRole: 'İçerik & Pazarlama',
  blocks: [
    {
      type: 'paragraph',
      text: 'Türkiye’deki işletmelerin büyük bölümü için web sitesi hâlâ bir dijital broşür işlevi görüyor: güzel gözüksün, iletişim bilgileri olsun, yeter. Oysa gerçek şu ki, siteniz pazarlama huninizin tam ortasında duran, her gün binlerce liralık reklam trafiğini ya paraya ya da kayboluşa yönlendiren bir dönüşüm makinesidir. Craftsoft olarak Next.js ve React tabanlı web projeleri geliştirirken en sık karşılaştığımız tablo şudur: marka Google Ads’e ve Meta reklamlarına ayda on binlerce lira harcıyor, ancak trafiğin yüzde 97’si siteyi tek sayfa görüntülemeyle terk ediyor. Sorun üründe ya da reklamda değil; ziyaretçinin kararını verdiği saniyelerde ona rehberlik etmeyen tasarımdadır. Bu yazıda dönüşüm odaklı web tasarımının 8 temel ilkesini, her birinin arkasındaki davranış bilimiyle ve uygulama detaylarıyla birlikte ele alıyoruz.',
    },
    {
      type: 'paragraph',
      text: 'Dönüşüm odaklı tasarım, estetiği reddetmek değil, estetiği hedefin hizmetine koşmaktır. En yüksek dönüşüm oranlarına sahip sitelerin ortak özelliği şaşırtıcı biçimde sade ve öngörülebilir olmalarıdır; çünkü ziyaretçinin bilişsel yükü her fazla tasarım kararıyla artar ve her artan yük, satın alma kararını erteleyen bir sürtünme yaratır. Şimdi bu sistemi kuran ilkeleri sırayla inceleyelim.',
    },
    {
      type: 'heading',
      text: '1. İlk Ekranda Netlik: 5 Saniyelik Test',
    },
    {
      type: 'paragraph',
      text: 'Bir ziyaretçi sitenize geldiğinde bilinçli ya da bilinçsiz olarak üç soruya cevap arar: Burası ne sunuyor, benim için mi, bir sonraki adım ne? Bu üç sorunun cevabı ilk ekran yani hero bölümde, kullanıcının hiç scroll yapmadan gördüğü alanda netleşmelidir. Google’ın geçmiş araştırmaları, kullanıcıların bir sayfanın görünen ilk bölümünde kalma kararının 50 milisaniye ile 5 saniye arasında şekillendiğini gösteriyor. Başlığınız jargonsuz ve fayda odaklı olmalı; örneğin “Yenilikçi Çözüm Ortağınız” yerine “Restoranınız için Sipariş ve Rezervasyon Yazılımı” cümlesi, ne iş yaptığınızı ve kimin için çalıştığınızı tek bakışta anlatır. Craftsoft’un kendi ürünü AkıllıSofra’nın açılış sayfasında bu ilke uygulandığında, hero bölümdeki “Ücretsiz Deneyi Başlat” butonuna tıklama oranı önceki jargonsu versiyona göre yüzde 63 arttı.',
    },
    {
      type: 'paragraph',
      text: 'İlk ekran testi basittir: Tasarımı tanımayan birine sitenizi beş saniye gösterin, ekranı kapattırın ve “Bu site ne satıyor, kime satıyor?” diye sorun. Net cevap veremiyorsa, tasarımınız değil mesajınız yeniden yazılmalıdır. Altın kural: başlık faydayı söyler, alt başlık kanıtı ekler, buton eylemi emreder. “15 yıldır İstanbul’da 200’den fazla restorana hizmet veren dijital ajans” gibi bir kanıt cümlesi, aynı iddiayı boş bir “Türkiye’nin lider ajansı” ifadesinden çok daha güvenilir performans gösterir.',
    },
    {
      type: 'heading',
      text: '2. Hız Bir Özellik Değil, Dönüşüm Faktörüdür',
    },
    {
      type: 'paragraph',
      text: 'Sayfa yükleme süresi ile dönüşüm arasındaki ilişki, pazarlama literatüründe en çok tekrarlanan kanıtlardan biridir: yükleme süresindeki her 100 milisaniyelik artış, e-ticaret dönüşüm oranını ortalama yüzde 1 düşürür. Google’ın Core Web Vitals metrikleri ise artık yalnızca teknik bir kıstas değil, sıralama sinyalidir; Largest Contentful Paint 2,5 saniyenin altında, Interaction to Next Paint 200 milisaniyenin altında ve Cumulative Layout Shift 0,1’in altında tutulmalıdır. Hız konusunda en büyük suçlular arasında kontrolsüz eklenti yüklemeleri, sıkıştırılmamış görseller ve ucuz paylaşımlı hosting gelir. WebP formatına geçiş, lazy loading ve kritik CSS teknikleri, çoğu mevcut sitede yükleme süresini yüzde 40 ila 60 kısaltabilir.',
    },
    {
      type: 'paragraph',
      text: 'Teknoloji seçimi de hızın belirleyicisidir. Bu yüzden Craftsoft tüm web projelerinde Next.js ve React altyapısını tercih ediyor: sunucu taraflı render, otomatik görsel optimizasyonu ve kod bölümleme sayesinde Lighthouse performans skorları 90 ve üzeri tutturulabiliyor. Ancak teknoloji tek başına yetmez; hız bir bakım disiplinidir. Google PageSpeed Insights’ı ayda bir kontrol edin, Search Console’daki Core Web Vitals raporunda kırmızıya dönen sayfaları önceliklendirin ve her tasarım değişikliğinden sonra mobil hızı yeniden ölçün. Reklam trafiğinizin büyük bölümü mobil cihazlardan geliyorsa, hız testini mutlaka 4G bağlantı profiliyle yapın.',
    },
    {
      type: 'highlight',
      text: 'Hız bütçesi kuralı: Bir sayfa ne kadar güzel olursa olsun, mobilde 3 saniyenin üzerinde açılıyorsa reklam vermeyi bırakın; önce hızı düzeltin. Aksi hâlde reklam bütçenizin önemli bir kısmını, siteyi yüklenmeden kapatan insanlara harcıyorsunuzdur.',
    },
    {
      type: 'heading',
      text: '3. Tek Bir Birincil Eylem: CTA Mimarisi',
    },
    {
      type: 'paragraph',
      text: 'En yaygın tasarım hatalarından biri, her ekrana birden fazla eşit görsel ağırlıkta buton yerleştirmektir. “Hemen Ara”, “WhatsApp’tan Yaz”, “Katalog İndir”, “Bize Ulaşın” butonlarının aynı sayfada yan yana parlaması, ziyaretçiye seçim özgürlüğü değil karar yükü verir. Hick Yasası gereği seçenek sayısı arttıkça karar süresi üssel olarak uzar ve çoğu ziyaretçi karar vermek yerine sayfayı terk eder. Her sayfada bir tane birincil eylem belirleyin; diğer tüm yollar ikincil, soluklaştırılmış stillerle sunulsun. Birincil butonun metni eylem ve fayda içermeli: “Teklif Al” yeterli ama “Ücretsiz Keşif Görüşmesi Planla” daha yüksek niyet taşır.',
    },
    {
      type: 'paragraph',
      text: 'CTA yerleşimi de mimari ister. Ziyaretçi sayfada aşağı indikçe karar süreci ilerler: önce farkındalık, sonra ilgi, sonra değerlendirme, en son eylem. Bu yüzden CTA’yı yalnızca sayfa sonuna değil, karar anlarına serpiştirin; fiyat bölümünden hemen sonra, referans bloklarının altında ve yapışkan bir mobil alt barda. Craftsoft’un geliştirdiği İhaleYapı ürün sayfasında CTA’ların karar bloklarına göre yeniden konumlandırılması, demo talep oranını yüzde 38 artırdı. Unutmayın: buton, tasarımın dekoru değil, huninin kapanış kapısıdır.',
    },
    {
      type: 'heading',
      text: '4. Sosyal Kanıt ve Güven Mimarisinin Tasarlanması',
    },
    {
      type: 'paragraph',
      text: 'İnternetten alışveriş yapan her insan, bilmediği bir markaya para verirken aynı soruyu sorar: Bu siteye güvenebilir miyim? Bu sorunun cevabı, ziyaretçinin aradığı kanıtların doğru sırada sunulmasına bağlıdır. En güçlü güven sinyalleri gerçek müşteri deneyimleridir: isim, unvan ve fotoğrafıyla sunulmuş müşteri yorumları, video referanslar ve kullanım istatistikleri. Yıldız puanları bir ara yüz standardı haline geldi; Google işletme profili yorumlarını doğrudan sitenize çekmek, hem güveni hem organik arama görünürlüğünü destekler. “200’den fazla projeyi zamanında teslim ettik” gibi sayısal kanıtlar ise görsel hiyerarşide başlıklardan hemen sonra, ilk ekrana yakın konumlandırılmalıdır.',
    },
    {
      type: 'list',
      items: [
        'Gerçek yüzler kullanın: Stok fotoğraflı mutlu müşteri görselleri artık herkes tarafından tanınıyor ve güveni düşürüyor; gerçek çekimler ya da video referanslar dönüşümü 2 kata kadar artırabiliyor.',
        'Sayısal kanıtları sergileyin: Tamamlanan proje sayısı, ortalama memnuniyet puanı, yanıt süresi gibi metrikleri yuvarlak rozetler halinde ilk iki ekranda toplayın.',
        'Güvenlik sinyallerini gösterin: SSL rozeti, ödeme logosu ve kişisel veri aydınlatma metni bağlantısı, özellikle form sayfalarında dönüşümü doğrudan etkiler.',
        'Basın ve iş ortaklığı logolarını abartmadan kullanın: Üç ile beş tanınmış logo, on beş tane anlamsız logo’dan çok daha ikna edicidir.',
      ],
    },
    {
      type: 'quote',
      text: 'Ziyaretçi güveni istemez, kanıt arar. Tasarımcının işi kanıtları dekorasyon değil, karar anlarının tam zamanında sunmaktır.',
    },
    {
      type: 'heading',
      text: '5. Formları Radikal Şekilde Sadeleştirmek',
    },
    {
      type: 'paragraph',
      text: 'Form, ziyaretçi ile para arasındaki son ve en kırılgan arayüzdür. Her eklenen form alanı, dönüşüm hunisinden bir miktar potansiyel müşteriyi süzer. Sektörde kabul gören kural, form alanı sayısındaki her azalmanın dönüşümü yüzde 5 ile 10 arasında artırmasıdır. “Telefon, e-posta, şirket adı, pozisyon, bütçe aralığı, mesaj” altı alanlı bir form yerine; ad, telefon ve tek cümlelik ihtiyaç alanından oluşan üç alanlı bir form kurun. Telefon alanını ülke koduyla otomatik dolduran, hatalı girişte nazik uyaran ve gönderim sonrası anında teşekkür ekranı gösteren formlar, terk oranını belirgin biçimde düşürür.',
    },
    {
      type: 'paragraph',
      text: 'Form stratejisindeki ikinci büyük karar, formun alternatifleriyle birlikte sunulmasıdır. Bazı ziyaretçiler yazmak istemez; onlar için WhatsApp butonu, hızlı arama bağlantısı ya da randevu takvimi entegrasyonu sunun. Üçüncü karar ise formun konumu: uzun sayfalarda formu hem başta hem sonda tekrarlamak, ortadaki karar bloklarından sonra sadece bağlantıyla çağrı yapmak dengeli bir yaklaşımdır. Gönderim sonrası süreç de tasarımın parçasıdır: otomatik teşekkür e-postası, beş dakika içinde dönüş vaadi ve takip planı, form dolduran ziyaretçiyi gerçek müşteriye çeviren köprüdür.',
    },
    {
      type: 'heading',
      text: '6. Görsel Hiyerarşi ve Tek Kollu Tasarım Miti',
    },
    {
      type: 'paragraph',
      text: 'Ziyaretçinin gözü bir web sayfasında rastgele dolaşmaz; F deseni ve Z deseni gibi tarama davranışları sayfayı öngörülebilir bölümlere ayırır. Dönüşüm odaklı tasarım, bu doğal tarama yolunu bozmak yerine onu rehberlik etmek ister: başlık sol üstte, birincil CTA görsel ağırlık merkezinde, kanıt görselleri göz yolculuğunun durak noktalarında. Aşırı animasyon, otomatik oynayan videolar ve parlayan carousel’ler dikkat çeker gibi görünse de aslında ana mesajı gölgeleyerek bilişsel yük üretir. İyi bir kural: her ekranda tek bir görsel kahraman olsun; diğer her şey ona hizmet etsin.',
    },
    {
      type: 'paragraph',
      text: 'Mobil tasarımda ise tüm bu ilkeler katbekat önemlidir. Türkiye’de web trafiğinin yüzde 70’ten fazlası mobilde; yatay scroll barındıran tablolar, fareyle açılan menüler ve küçük dokunma hedefleri mobilde dönüşümü doğrudan öldürür. Butonların en az 44 piksel yüksekliğinde olması, metin okunabilirliğinin 16 piksel taban yazı boyutuna dayanması ve sayfa boyunca baş parmağın rahat ulaşacağı konumda yapışkan bir CTA barı tutturulması, 2026’da artık tercih değil zorunluluktur. Tasarımı her zaman önce mobil çözünürlükte, gerçek bir telefonda test edin; masaüstü simülasyonları yanıltır.',
    },
    {
      type: 'heading',
      text: '7. Veriyle Test Etmek: Tahminin Ölçümün Önüne Geçmemesi',
    },
    {
      type: 'paragraph',
      text: 'Tasarım kararları tartışmayla değil, deneylerle verilir. Google Analytics 4 ile ziyaretçi akış haritanızı çıkarın: kullanıcılar nereden geliyor, hangi sayfada duruyor, hangi butona tıklayıp hangi formu yarıda bırakıyor? Microsoft Clarity veya Hotjar gibi ısı haritası araçlarıyla kayıtlı oturumları izlemek, ankette asla söylemeyecekleri davranışları gözler önüne serer; örneğin ziyaretçilerin fiyat tablosunu bulmak için menüyü üç kez açıp kapattığını görünce sorunun fiyatın kendisinde değil, erişilebilirliğinde olduğunu anlarsınız. A/B testi için sıfır bütçeyle Google Optimize alternatifleri ya da kendi altyapınızda feature flag mantığıyla manuel testler yürütebilirsiniz.',
    },
    {
      type: 'paragraph',
      text: 'Ölçüm kültürünün bir parçası da her sayfaya tek bir birincil hedef atamaktır. Google Analytics 4’te dönüşüm olarak yalnızca satışı değil, teklif formu gönderimini, telefon tıklamasını ve WhatsApp başlatmasını da hedef olarak tanımlayın; Looker Studio’da aylık bir dönüşüm panosu kurun. Craftsoft’un web projelerinde standart kapanış ritüelidir: yayına alma, 30 günlük veri toplama, ısı haritası analizi ve ilk optimizasyon turu. Site yayına alındığı an bitmiş bir eser değil, ölçülmeye başlayan bir deneydir.',
    },
    {
      type: 'heading',
      text: '8. Mikro Metinlerin ve Mikro Etkileşimlerin Gücü',
    },
    {
      type: 'paragraph',
      text: 'Büyük kararların yanında dönüşümü belirleyen küçük detaylar vardır. Buton altına eklenen “Ortalama yanıt süremiz 2 saat” notu, fiyat yanına yazılan “KDV dahil, gizli ücret yok” açıklaması veya form gönder butonunun altındaki “Bilgileriniz üçüncü taraflarla paylaşılmaz” cümlesi, tereddütü saniyeler içinde giderir. Bu mikro metinler, satış ekibinin telefonda bin kez söylediği güvencelerin arayüze dökülmüş hâlidir. Aynı şekilde mikro etkileşimler, buton hover animasyonu, form doğrulama geri bildirimi ve yükleme durumlarındaki ilerleme göstergeleri; sitenin canlı ve güvenilir olduğunu hissettiren ince sinyallerdir. Detayda kaybedilen güven, hiçbir büyük özellikle geri kazanılamaz.',
    },
    {
      type: 'heading',
      text: 'Sonuç: Tasarım Güzel Olanı Değil, Kazandıranı İfade Eder',
    },
    {
      type: 'paragraph',
      text: 'Bu sekiz ilke bir araya geldiğinde ortaya çıkan şey, ödüllük hedefli değil ciro hedefli bir web sitesidir: ilk ekranda netlik, her saniyede hız, her karar anında tek bir rehber CTA, her tereddütte kanıt, her formda sadelik, her cihazda rahatlık ve her yayın sonrası ölçüm disiplini. Web siteniz, pazarlama bütçenizin çarpan katsayısıdır; doğru tasarlandığında aynı reklam harcamasıyla çok daha fazla müşteri üretir, yanlış tasarlandığında ise en iyi reklamları bile boşa akıtır.',
    },
    {
      type: 'paragraph',
      text: 'Craftsoft olarak dönüşüm odaklı web tasarımını felsefe olarak benimsiyoruz: Next.js ve React ile yüksek performanslı, ölçüm altyapısı kurulmuş, hız testinden ısı haritası analizine kadar her aşaması veriyle yönetilen siteler geliştiriyoruz. İster mevcut sitenizin dönüşüm oranlarını artırmak ister sıfırdan kazandıran bir site kurmak isteyin, ücretsiz ön analiz için bugün bizimle iletişime geçin; sitenizi bir vitrinden çıkarıp bir satış makinesine dönüştürelim.',
    },
  ],
};

export default post;
