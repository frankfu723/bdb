'use client';

import Image from 'next/image';

type Feature = {
  title: string;
  desc?: string;
  bullets?: string[];
};

type Highlight = {
  title: string;
  desc: string;
  image: string;
  alt: string;
};

const HIGHLIGHTS: Highlight[] = [
  {
    title: '智慧控制系統',
    desc: '搭載人性化操作面板與清晰控制邏輯，整合壓力、氧濃度／流量與溫度管理，讓設備運行更穩定、操作更直覺。',
    image: '/images/products/human/soft/control.jpg',
    alt: '智慧控制系統',
  },
  {
    title: '獨立冷氣',
    desc: '結合獨立冷氣、空氣循環與舒適環境控制概念，搭配負離子淨化、UV 消毒與專利水冷空調系統，提升長時間使用的舒適度。',
    image: '/images/products/human/soft/ac.jpg',
    alt: '獨立冷氣與空氣品質系統',
  },
  {
    title: '頂級牛皮訂製椅',
    desc: '採用高質感牛皮訂製座椅，搭配可調式人體工學躺椅設計，支援 90°–180° 多段角度調整，提升整體乘坐舒適性。',
    image: '/images/products/human/soft/seat.jpg',
    alt: '頂級牛皮訂製椅',
  },
  {
    title: '高強度 TPU 艙體',
    desc: '艙體採用 1mm 高品質 TPU 柔性材料，兼具耐壓、耐用、柔韌與輕量特性，適合長期穩定使用與商業空間導入。',
    image: '/images/products/human/soft/side.jpg',
    alt: '高強度 TPU 艙體',
  },
];

const FEATURES: Feature[] = [
  {
    title: '高安全性雙重監控',
    bullets: [
      '壓力與電控雙重監測系統',
      '艙內緊急按鈕設計',
      '外部控制介面即時掌握艙體狀態',
    ],
  },
  {
    title: '專業微壓氧設計',
    bullets: [
      '建議操作壓力約 10 kPa',
      '兼顧安全性與舒適體驗',
      '平穩舒適的微高壓環境',
    ],
  },
  {
    title: '模組化配置彈性',
    bullets: [
      '可搭配單人或雙人主機',
      '適用個人工作室與健康管理空間',
      '支援商業場館導入與規模擴展',
    ],
  },
];

export default function MainContent() {
  return (
    <div className="space-y-16">
      {/* 上方：圖片 + 產品介紹 */}
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-green-900 leading-tight">
            躺椅式微高壓氧艙
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            躺椅式微高壓氧艙專為重視舒適體驗、操作穩定與專業形象的場域打造，
            結合微壓氧環境、人體工學躺椅、智慧控制系統與多重安全設計，
            讓使用者在放鬆狀態下享受更完整的氧艙體驗。
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            艙體尺寸為長 178 × 寬 100 × 高 140 cm，建議操作壓力約為 10 kPa
            （約 1.20 ATA 以下），兼顧安全性、舒適性與商業空間導入的實用性。
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">艙體尺寸</p>
              <p className="mt-1 text-lg font-semibold text-green-900">
                178 × 100 × 140 cm
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">建議操作壓力</p>
              <p className="mt-1 text-lg font-semibold text-green-900">
                10 kPa
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">躺椅角度</p>
              <p className="mt-1 text-lg font-semibold text-green-900">
                90°–180°
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gray-100 shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/products/human/soft/cover_with_machine.jpg"
                alt="躺椅式微高壓氧艙"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 中段：補充說明 */}
      <section className="rounded-[28px] bg-[#f8faf8] px-6 py-8 md:px-10 md:py-10">
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-green-900">
            氧艙產品價值與使用體驗
          </h3>

          <p className="mt-5 text-gray-700 leading-8">
            這不只是單純的氧艙設備，而是一套兼顧舒適感、安全性與場域形象的完整解決方案。
            從艙體材質、壓力設計、空氣品質管理，到乘坐體驗與操作便利性，
            都是為了讓使用者更願意持續使用，也讓場館更容易導入與管理。
          </p>

          <div className="mt-6 space-y-3">
            {[
              '外觀簡潔專業，適合健身、保養、健康管理與高端服務空間',
              '人體工學躺椅降低長時間乘坐與密閉空間帶來的不適感',
              '控制邏輯清楚，便於現場人員操作與日常管理',
              '可依單艙或多艙模式配置，提升商業應用彈性',
            ].map((item) => (
              <div key={item} className="flex items-start">
                <span className="mt-[10px] mr-3 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 下方：產品優勢 */}
      <section>
        <h2 className="mb-6 text-center font-serif text-4xl font-semibold text-green-900">
          產品優勢
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-500 leading-8">
          兼顧舒適體驗與穩定運行的整體設計
        </p>

        {/* 4張重點照片 */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {HIGHLIGHTS.map(({ title, desc, image, alt }) => (
            <div
              key={title}
              className="overflow-hidden rounded-[24px] border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6">
                <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-emerald-700">
                  HIGHLIGHT
                </div>

                <h3 className="mt-4 text-2xl font-serif font-semibold text-green-900">
                  {title}
                </h3>

                <p className="mt-3 text-gray-700 leading-8">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 其餘強調優勢 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURES.map(({ title, desc, bullets }) => (
            <div
              key={title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-4 text-2xl font-serif font-semibold text-green-900">
                {title}
              </h3>

              {desc ? <p className="text-gray-700 leading-8">{desc}</p> : null}

              {bullets?.length ? (
                <ul className="space-y-3 text-gray-700">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start leading-7">
                      <span
                        aria-hidden
                        className="mt-[10px] mr-3 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}