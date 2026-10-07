export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalDoc {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
}

export const legalDocs: LegalDoc[] = [
  {
    slug: 'kvkk-aydinlatma-metni',
    title: 'KVKK Aydınlatma Metni',
    shortTitle: 'KVKK',
    description:
      'Craftsoft olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesine ilişkin aydınlatma metnimiz.',
    updatedAt: '2026-10-01',
    sections: [
      {
        heading: '1. Veri Sorumlusu',
        body: [
          'Craftsoft ("Şirket"), 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla hareket etmektedir. Bu aydınlatma metni, kişisel verilerinizin hangi amaçlarla işlendiği, kimlere aktarıldığı ve hangi haklara sahip olduğunuz hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.',
        ],
      },
      {
        heading: '2. İşlenen Kişisel Veriler',
        body: [
          'Web sitemiz üzerinden teklif formunu doldurmanız halinde; ad-soyad, e-posta adresi, telefon numarası, şirket unvanı (varsa), tercih ettiğiniz hizmet ve bütçe aralığı ile bize ilettiğiniz mesaj içeriği kişisel veri olarak işlenir. Ayrıca iletişim kurulması sırasında paylaşmayı tercih ettiğiniz diğer bilgiler de bu kapsamdadır.',
        ],
      },
      {
        heading: '3. İşleme Amaçları ve Hukuki Sebepleri',
        body: [
          'Kişisel verileriniz; teklif taleplerinizin değerlendirilmesi, size dönüş yapılması, hizmetlerimiz hakkında bilgilendirme yapılması ve sözleşme öncesi süreçlerin yürütülmesi amaçlarıyla işlenir. İşleme faaliyetimiz KVKK’nın 5. maddesinde düzenlenen “sözleşmenin kurulması veya ifası için gerekli olma” ve “meşru menfaat” hukuki sebeplerine dayanır. Açık rızanız bulunması halinde, gelişmelerden haberdar olmanız için elektronik ticari ileti gönderimi de yapılabilir.',
        ],
      },
      {
        heading: '4. Aktarım',
        body: [
          'Kişisel verileriniz, teklif taleplerinizin CRM ve destek sistemlerimizde (Salvo Agent platformu dahil) işlenmesi amacıyla hizmet aldığımız iş ortaklarımıza, KVKK’nın 8. ve 9. maddelerine uygun olarak aktarılabilir. Yurt içindeki iş ortaklarımızla yapılan aktarımlarda KVKK hükümleri, yurt dışı aktarımlarında ise Kanun’un 9. maddesinde öngörülen güvenceler uygulanır.',
        ],
      },
      {
        heading: '5. Saklama Süresi',
        body: [
          'Kişisel verileriniz, işleme amaçlarının gerektirdiği süre boyunca ve ilgili mevzuattan doğan asgari saklama süreleri kadar muhafaza edilir. Süre sonunda verileriniz silinir, yok edilir veya anonim hale getirilir.',
        ],
      },
      {
        heading: '6. Haklarınız',
        body: [
          'KVKK’nın 11. maddesi uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, buna ilişkin bilgi talep etme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme, Kanun’a aykırı işlenmesi sebebiyle silinmesini veya yok edilmesini isteme haklarına sahipsiniz.',
          'Haklarınızı kullanmak için info@craftsoft.com.tr adresine yazabilirsiniz. Başvurularınız Kanun’un 13. maddesi uyarınca en geç 30 gün içinde yanıtlanır.',
        ],
      },
    ],
  },
  {
    slug: 'gizlilik-politikasi',
    title: 'Gizlilik Politikası',
    shortTitle: 'Gizlilik',
    description:
      'Craftsoft web sitesini kullanırken hangi verilerin toplandığı, nasıl kullanıldığı ve korunduğu hakkında bilgilendirme.',
    updatedAt: '2026-10-01',
    sections: [
      {
        heading: '1. Genel Bilgilendirme',
        body: [
          'Bu Gizlilik Politikası, craftsoft.com.tr alan adlı web sitemizi ziyaretiniz sırasında hangi bilgilerin toplandığını, bu bilgilerin nasıl kullanıldığını ve korunduğunu açıklar. Sitemizi kullanarak bu politikada belirtilen uygulamaları kabul etmiş sayılırsınız.',
        ],
      },
      {
        heading: '2. Toplanan Bilgiler',
        body: [
          'İletişim ve teklif formları aracılığıyla paylaştığınız bilgiler (ad, e-posta, telefon, mesaj içeriği) doğrudan tarafımızca alınır. Ayrıca sitede gezinme sırasında standart web sunucusu günlükleri (IP adresi, tarayıcı türü, ziyaret edilen sayfalar, erişim saati) teknik gereksinimler ve güvenlik amacıyla otomatik olarak kaydedilebilir.',
        ],
      },
      {
        heading: '3. Bilgilerin Kullanımı',
        body: [
          'Toplanan bilgiler; taleplerinize yanıt vermek, hizmetlerimizi geliştirmek, site performansını analiz etmek ve güvenliği sağlamak amaçlarıyla kullanılır. Bilgileriniz üçüncü kişilere pazarlama amacıyla satılmaz veya kiralanmaz.',
        ],
      },
      {
        heading: '4. Çerezler ve Analitik',
        body: [
          'Sitemiz, temel işlevler için zorunlu çerezler kullanır. Dilerseniz tarayıcı ayarlarınızdan çerezleri sınırlayabilir veya silebilirsiniz; bu durumda sitenin bazı özellikleri sınırlı çalışabilir. Ayrıntılar için Çerez Politikamıza göz atabilirsiniz.',
        ],
      },
      {
        heading: '5. Güvenlik',
        body: [
          'Kişisel verilerinizi korumak için SSL şifrelemesi, erişim kontrolleri ve düzenli güvenlik güncellemeleri uygulanır. Ne var ki internet üzerinden hiçbir iletimin %100 güvenli olmadığını hatırlatırız.',
        ],
      },
      {
        heading: '6. Değişiklikler',
        body: [
          'Bu politika güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır ve sayfanın başındaki “Son güncelleme” tarihinden takip edilebilir. Önemli değişiklikler halinde gerekli duyurular yapılır.',
        ],
      },
    ],
  },
  {
    slug: 'cerez-politikasi',
    title: 'Çerez Politikası',
    shortTitle: 'Çerezler',
    description:
      'Craftsoft web sitesinde kullanılan çerez türleri, amaçları ve yönetim tercihleri hakkında bilgilendirme.',
    updatedAt: '2026-10-01',
    sections: [
      {
        heading: '1. Çerez Nedir?',
        body: [
          'Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Oturum yönetimi, tercihlerin hatırlanması ve site trafiğinin analiz edilmesi gibi işlevler görürler.',
        ],
      },
      {
        heading: '2. Kullandığımız Çerez Türleri',
        body: [
          'Zorunlu çerezler: Sitenin çalışması için gereklidir (ör. form oturum güvenliği). Bu çerezler devre dışı bırakılamaz.',
          'Tercih çerezleri: Dil, bölge gibi seçimlerinizi hatırlar.',
          'Analitik çerezler: Ziyaretçilerin siteyi nasıl kullandığını anonim olarak anlamamıza yardımcı olur. Yalnızca onayınızla kullanılır.',
        ],
      },
      {
        heading: '3. Üçüncü Taraf Çerezleri',
        body: [
          'Google reCAPTCHA hizmeti, kötüye kullanımı önlemek amacıyla kendi çerezlerini kullanabilir. Bu çerezler Google’ın Gizlilik Politikası kapsamındadır ve yalnızca form gönderimlerinde yüklenir.',
        ],
      },
      {
        heading: '4. Çerezleri Yönetme',
        body: [
          'Tarayıcınızın ayarlarından çerezleri silebilir, tümünü veya yalnızca üçüncü taraf çerezlerini engelleyebilirsiniz. Çerezleri kapatmanız halinde sitemizin temel işlevleri çalışmaya devam eder; analitik tercihleriniz anonim kalmayı sürdürür.',
        ],
      },
      {
        heading: '5. Sorularınız',
        body: [
          'Çerez kullanımımız hakkında sorularınız için info@craftsoft.com.tr adresinden bize ulaşabilirsiniz.',
        ],
      },
    ],
  },
  {
    slug: 'kullanim-kosullari',
    title: 'Kullanım Koşulları',
    shortTitle: 'Kullanım Koşulları',
    description:
      'Craftsoft web sitesini kullanımınıza ilişkin şartlar, fikri haklar ve sorumluluk sınırları.',
    updatedAt: '2026-10-01',
    sections: [
      {
        heading: '1. Kabul',
        body: [
          'Bu web sitesine erişerek ve kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız lütfen siteyi kullanmayın.',
        ],
      },
      {
        heading: '2. Fikri Mülkiyet',
        body: [
          'Sitede yer alan tüm içerik (metin, grafik, logo, ikon, video, yazılım kodu) Craftsoft’a aittir veya lisanslı olarak kullanılmaktadır. İçerikler, açık izin olmaksızın kopyalanamaz, çoğaltılamaz, dağıtılamaz veya ticari amaçla kullanılamaz.',
        ],
      },
      {
        heading: '3. Hizmet Bilgileri',
        body: [
          'Sitede yer alan hizmet açıklamaları, fiyat aralıkları ve süre bilgileri bilgilendirme amaçlıdır; bağlayıcı teklif niteliği taşımaz. Nihai kapsam, süre ve ücret, tarafımızca hazırlanan teklif ve imzalanan sözleşme ile belirlenir.',
        ],
      },
      {
        heading: '4. Yasaklı Kullanımlar',
        body: [
          'Sitenin güvenliğini tehdit eden, hizmeti aksatan, kötü amaçlı yazılım yüklemeye çalışan veya yürürlükteki mevzuata aykırı her türlü kullanım yasaktır. Otomatik veri toplama (scraping) yalnızca robots.txt kurallarına uygun şekilde ve yasal sınırlar içinde yapılabilir.',
        ],
      },
      {
        heading: '5. Sorumluluk Sınırı',
        body: [
          'Sitemiz “olduğu gibi” sunulur. İçeriklerin doğruluğu için gerekli özen gösterilmekle birlikte, site üzerinden alınan kararlardan doğacak zararlardan Craftsoft sorumlu tutulamaz. Üçüncü taraf sitelere verilen bağlantılar kullanıcının sorumluluğundadır.',
        ],
      },
      {
        heading: '6. Uygulanacak Hukuk',
        body: [
          'Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul (Merkez) mahkeme ve icra daireleri yetkilidir.',
        ],
      },
    ],
  },
];

export function getLegalDocBySlug(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
