import { Sparkles } from 'lucide-react';

interface MarqueeItem {
  text: string;
  icon?: boolean;
}

const items: MarqueeItem[] = [
  { text: 'Dijital Pazarlama', icon: true },
  { text: 'Meta Reklamları', icon: true },
  { text: 'Google Ads', icon: true },
  { text: 'Sosyal Medya', icon: true },
  { text: 'Video Prodüksiyon', icon: true },
  { text: 'Drone Çekim', icon: true },
  { text: 'Web Tasarım', icon: true },
  { text: 'Yazılım Geliştirme', icon: true },
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden gradient-bg py-4 -rotate-1 scale-[1.02] my-4">
      <div className="flex w-max animate-marquee gap-8 pr-8">
        {[0, 1].map((half) => (
          <div key={half} className="flex gap-8" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-3 text-white font-semibold text-sm sm:text-base whitespace-nowrap tracking-wide"
              >
                <Sparkles className="w-4 h-4 text-white/80" />
                {item.text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
