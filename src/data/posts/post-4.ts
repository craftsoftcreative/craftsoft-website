import type { BlogPost } from '../blog/types';

const post: BlogPost = {
  slug: 'google-ads-maliyet-dusurme',
  title: 'Google Ads’te Tıklama Başına Maliyeti Düşürmenin 9 Yolu',
  excerpt:
    'Reklam tıklama maliyetleri her geçen yıl artıyor ama aynı sektörde bazı hesaplar sizden üçte bir fiyatına tıklama alıyor. Kalite puanı, negatif kelimeler, uzun kuyruk stratejisi ve teklif optimizasyonu dahil 9 kanıtlanmış maliyet düşürme yolunu inceleyin.',
  category: 'Google Ads',
  tags: ['Google Ads', 'tıklama başı maliyet', 'CPC düşürme', 'kalite puanı', 'SEM optimizasyonu'],
  date: '2026-05-19',
  readingTime: 10,
  author: 'Craftsoft Editör Ekibi',
  authorRole: 'İçerik & Pazarlama',
  blocks: [
    {
      type: 'paragraph',
      text: 'Google Ads’te tıklama başına maliyet (CPC) son beş yılda neredeyse tüm sektörlerde çift haneli yüzdelerle arttı; rekabetin yoğun olduğu kategorilerde birinci sayfa teklifleri 2021 seviyelerinin iki-üç katına ulaştı. Bu tablo karamsar görünse de aynı sektörde, aynı anahtar kelimelerde bazı hesaplar rakiplerinden yüzde 40-60 daha ucuza tıklama almaya devam ediyor. Aradaki fark şans değil, mühendisliktir: Google Ads’in açık artırma mantığı, kaliteli ve alakalı reklam vereni sistematik olarak ödüllendirir. Bu yazıda, Craftsoft olarak yönettiğimiz hesaplarda defalarca uygulanmış, her biri gerçek CPC düşüşü üretmiş 9 yolu sıralıyoruz. Amacımız bütçenizi kısmak değil; aynı bütçeyle daha fazla nitelikli trafik satın almanızı sağlamak.',
    },
    {
      type: 'paragraph',
      text: 'Önemli bir çerçeve notu: CPC tek başına hedef değildir. Düşük maliyetli ama niteliksiz tıklama, pahalı ama satın almaya hazır tıklamadan her zaman daha pahalıdır çünkü sonunda sıfır getiri üretir. Bu rehberdeki taktiklerin hepsi tek bir ilkeye dayanır: maliyeti düşürürken niyet kalitesini korumak, hatta artırmak. Bu denge kurulduğunda, düşen CPC doğrudan düşen maliyet başına edinme (CPA) anlamına gelir.',
    },
    {
      type: 'heading',
      text: '1. Kalite Puanını Anlayın ve Yönetin: Ucuz Tıklamanın Anahtarı',
    },
    {
      type: 'paragraph',
      text: 'Google Ads açık artırmasında sıralamayı belirleyen formül, teklifiniz ile kalite puanınızın çarpımıdır; kalite puanı yüksek olan reklam veren, daha düşük teklifle daha üstte yer alır ve daha az öder. Kalite puanı üç bileşenden oluşur: beklenen tıklama oranı, reklam alakalılığı ve açılış sayfası deneyimi. Skorlar 1-10 arasındadır ve 7’nin üzeri “iyi”, 4’ün altı ise hesabınızı sistematik olarak cezalandırır. En hızlı kazanım genellikle reklam gruplarını daraltmaktan gelir: tek bir reklam grubunda 30-40 anahtar kelime bulundurmak yerine, her grup 5-15 yakın anlamlı kelime içermeli ve reklam başlıkları bu kelimeleri birebir yansıtmalıdır. “Anahtar kelime - reklam metni - açılış sayfası” üçlüsü ne kadar tutarlıysa, kalite puanı o kadar hızlı yükselir.',
    },
    {
      type: 'highlight',
      text: 'Pratik kural: Kalite puanı 5 ve altı olan anahtar kelimeleri önce reklam metnini ve açılış sayfasını düzelterek kurtarmaya çalışın; iki hafta içinde skor kendini toparlamıyorsa kelimeyi duraklatın. Düşük kaliteli kelimeler, tüm hesabın ortalama performansını aşağı çeker ve iyi kelimelerinizin maliyetini bile şişirir.',
    },
    {
      type: 'heading',
      text: '2. Negatif Kelime Listesini Sistem Haline Getirin',
    },
    {
      type: 'paragraph',
      text: 'Negatif kelime yönetimi, atıl harcamaların en büyük avcısıdır. “Ücretsiz”, “indirimli ikinci el”, “pdf”, “kurs”, “iş ilanı”, “nedir” gibi satın alma niyeti taşımayan aramaları düzenli olarak arama terimleri raporundan tarayıp listeye ekleyin. Bu işlem bir kez yapılıp bırakılmaz; haftalık 15 dakikalık bir ritüel haline gelmelidir. Tek bir hesapta üç ay boyunca düzenli negatif kelime eklemesi yaptığımız bir e-ticaret müşterimizde, harcanan bütçenin yüzde 22’sinin niteliksiz aramalara gittiğini ve bu temizlikle CPC’nin etkili olarak yüzde 19 düştüğünü gördük. Negatif kelime listelerinizi hesap seviyesinde paylaşın ve marka dışı tüm kampanyalarda ortak kullanın.',
    },
    {
      type: 'list',
      items: [
        'Haftalık: Arama terimleri raporunda son 7 günü inceleyin, satın alma niyeti olmayan terimleri negatif listeye ekleyin.',
        'Aylık: Mevsimsel ve kampanya dönemi terimlerini (örneğin “yılbaşı çekilişi”) temizleyin.',
        'Hazır listeler: Hesabınıza başlangıç için genel negatif kelime listesi (iş ilanları, torrent, ücretsiz vb.) yükleyin.',
        'Dikkat: Negatif kelime eklemeden önce niyeti kontrol edin; “fiyat” gibi bazı terimler B2B tarafında satın alma sinyali olabilir.',
      ],
    },
    {
      type: 'quote',
      text: 'Negatif kelime listesi, reklam bütçenizin süzgecidir. Temizlenmemiş hesapta düşük CPC hedeflemek, delik bir kovaya su doldurmaya benzer.',
      author: 'Craftsoft Performans Ekibi',
    },
    {
      type: 'heading',
      text: '3. Uzun Kuyruk ve Niyet Bazlı Anahtar Kelime Stratejisi',
    },
    {
      type: 'paragraph',
      text: '“Ayakkabı” gibi geniş kelimeler pahalıdır, alakasız tıklamalar üretir ve kalite puanınızı kemirir. Buna karşılık “kadın ortopedik tabanlı koşu ayakkabısı 42 numara” gibi uzun kuyruk kelimeler daha az aranır ama dönüşüm oranı genellikle üç-beş kat daha yüksektir ve teklif rekabeti belirgin biçimde daha düşüktür. Anahtar kelime planlayıcıda arama hacmi düşük (10-100 arası) ama niyet net olan yüzlerce uzun kuyruk varyasyonu bulun; müşterilerinizin gerçekten kullandığı ifadeleri müşteri görüşmelerinden ve Search Console’daki organik sorgulardan toplayın. Geniş eşleme kullanıyorsanız akıllı teklif stratejileriyle birlikte çalıştırın ve akıllı teklif verilerinin öğrenmesi için en az iki hafta sabredin.',
    },
    {
      type: 'subheading',
      text: 'Eşleme Tiplerini Bilinçli Kullanın',
    },
    {
      type: 'paragraph',
      text: 'Tam eşleme (exact match) kontrol sağlar ama hacmi sınırlar; ifade eşleme (phrase match) dengeli bir orta yoldur; geniş eşleme (broad match) yalnızca akıllı tekliflerle birlikte ve düzenli arama terimi denetimiyle kullanılmalıdır. 2026’da Google’ın eşleme davranışı giderek daha anlamsal hale geliyor; bu yüzden anahtar kelime listesi kurarken varyasyon spam’i yerine niyet kümeleri düşünün: bilgilendirme niyeti, karşılaştırma niyeti ve satın alma niyeti için ayrı reklam grupları kurun ve satın alma niyetli kümeye bütçe ağırlığını verin.',
    },
    {
      type: 'heading',
      text: '4. Reklam Uzantılarıyla Tıklama Oranınızı Yükseltin',
    },
    {
      type: 'paragraph',
      text: 'Sitelink, callout, structured snippet, call, location ve price uzantıları eklenmiş reklamlar hem daha fazla ekran alanı kaplar hem de tıklama oranını (CTR) belirgin artırır; yüksek CTR ise kalite puanının en güçlü besinidir. Açık bir hedef koyun: her kampanyada en az 6 sitelink, 8 callout ve 4 structured snippet aktif olsun. Uzantı metinlerini jenerik tutmayın; “Hızlı Teslimat” yerine “İstanbul’a Aynı Gün Teslimat” gibi somut bilgiler hem tıklama oranını hem dönüşüm kalitesini artırır. Rakip analizi yaparken kendi reklamlarınızın arama sonuçlarındaki görünümünü “Reklam Önizleme” aracıyla düzenli kontrol edin; uzantılarınız rakibinizden daha zengin görünmüyorsa, ilk iyileştirme fırsatınız buradadır.',
    },
    {
      type: 'heading',
      text: '5. Teklif Stratejisini Doğru Seçin ve Akıllı Tekliflere Güvenin',
    },
    {
      type: 'paragraph',
      text: 'Elle CPC ile yönetilen hesaplar, akıllı teklif (smart bidding) kullananlara karşı çoğu kategoride sistematik dezavantaj yaşıyor; çünkü manuel teklifler saatlik sinyal dalgalanmalarını takip edemiyor. Hedef CPA ve hedef ROAS stratejileri, cihaz, konum, saat ve kitle sinyallerini gerçek zamanlı işleyerek her açık artırmada optimum teklifi verir. Geçişi kademeli yapın: önce dönüşüm hacmi yüksek kampanyalarda hedef CPA’ya geçin, iki hafta öğrenme süresi tanıyın ve hedefi agresif değil, mevcut CPA’nızın yüzde 10-15 üzerine koyarak başlayın. Veri hacmi düşük kampanyalarda (aylık 30 dönüşüm altı) maksimize dönüşüm stratejisi daha güvenli bir köprüdür; yeterli hacim biriktikçe hedefli stratejilere geçebilirsiniz.',
    },
    {
      type: 'list',
      items: [
        'Aylık 30’un altında dönüşüm: Maksimize dönüşüm, bütçe sınırıyla kontrol altında tutun.',
        'Aylık 30-200 dönüşüm: Hedef CPA, mevcut ortalamanın yüzde 10-15 üzerinde başlayın.',
        'Aylık 200 üzeri dönüşüm: Hedef ROAS veya değer bazlı hedef CPA ile marj odaklı optimizasyona geçin.',
        'Her geçişte: En az iki hafta dokunmayın; akıllı teklifin kendi fiyat keşfini tamamlamasını bekleyin.',
      ],
    },
    {
      type: 'heading',
      text: '6. Açılış Sayfası Hızı ve Dönüşüm Hizalaması',
    },
    {
      type: 'paragraph',
      text: 'Kalite puanının üçüncü ayağı açılış sayfası deneyimidir ve çoğu hesapta en ihmal edileni budur. Mobil sayfa yükleme süreniz 3 saniyenin üzerindeyse, Google hem kalite puanınızı düşürür hem de kullanıcılarınız zaten gitmiş olur; sonuç olarak aynı reklam maliyeti, çok daha az dönüşüm üretir. Sayfayı reklam mesajıyla birebir hizalayın: reklam “ücretsiz keşif” vaat ediyorsa sayfa ilk ekranda o formu sunmalı, form alanları mobilde tek elle doldurulabilir olmalı ve yapay zekâ destekli, kişiselleştirilmiş bir yolculuk (dynamic text replacement ile aranan kelimeyi başlıkta yansıtmak gibi) tıklama sonrası kopukluğu azaltır. Hedefiniz net olsun: her reklam grubunun tek bir birincil dönüşüm eylemi olsun; çok sayıda çelişen eylem (hem ara, hem indir, hem izle) dönüşümü dağıtır ve akıllı teklifin öğrenmesini zayıflatır.',
    },
    {
      type: 'heading',
      text: '7. Kapanış: Düşen CPC, Doğru Ölçülen Bileşik Kazançtır',
    },
    {
      type: 'paragraph',
      text: 'Bu 9 yöntemi tek seferde uygulamaya çalışmayın; öncelik sırası şudur: önce ölçüm temelini (dönüşüm izleme, geliştirilmiş dönüşümler) doğrulayın, sonra negatif kelimelerle atıkları kesin, ardından kalite puanı düşük reklam gruplarını yeniden yapılandırın, son olarak teklif stratejilerini akıllı moda taşıyın. Her aşamada en az iki haftalık veri biriktirin ve değişkenleri tek tek değiştirin; aynı anda beş şeyi değiştiren hesapta neyin işe yaradığını asla öğrenemezsiniz. Düzenli uygulandığında, bu disiplin altı ay içinde hesap ortalama CPC’sinde yüzde 25-40 arası kalıcı bir düşüş üretir; ve bu düşüş, dönüşüm kalitesi korunduğu için doğrudan kârlılığa döner.',
    },
    {
      type: 'quote',
      text: 'Google Ads’te ucuz tıklama bir hedef değil, alakalı reklam, temiz hedefleme ve hızlı sayfanın birleştiğinde kendiliğinden gelen bir sonuçtur. Maliyeti kovalamayın; maliyeti düşüren şeyleri inşa edin.',
      author: 'Craftsoft Editör Ekibi',
    },
    {
      type: 'paragraph',
      text: 'Google Ads hesabınızın maliyet yapısını profesyonel bir denetimden geçirmek ve sektörünüz için gerçekçi bir CPC hedefi belirlemek isterseniz, Craftsoft ekibi ücretsiz ilk analiz seansında hesabınızı birlikte inceliyor. Reklam yönetiminden açılış sayfası optimizasyonuna kadar tüm zinciri tek elden yönetmenin avantajını konuşalım; çünkü düşük maliyetli trafik, ancak dönüşüm zincirinin her halkası sağlam olduğunda kâra dönüşür.',
    },
  ],
};

export default post;
