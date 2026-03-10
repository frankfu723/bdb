'use client';

import Image from 'next/image';

type Feature = {
  title: string;
  desc: string;
  bullets?: string[];
};

const FEATURES: Feature[] = [
  {
    title: '穩定硬殼結構',
    desc:
      '採用硬殼艙體設計，整體結構更穩定，外觀更具專業設備感，適合重視空間形象與長期營運規劃的商業場域。',
  },
  {
    title: '更完整的艙內環境控制',
    desc:
      '可搭配艙內溫度、照明與空氣循環等配置，讓整體使用體驗更穩定，也更符合高端服務空間的需求。',
  },
  {
    title: '多重安全設計',
    desc:
      '整合內部緊急按鈕、對講系統與外部操作介面，讓使用者與現場管理人員都能即時掌握設備狀態。',
  },
  {
    title: '舒適座艙體驗',
    desc:
      '艙內配備沙發式座椅與相對寬敞的使用空間，提升長時間使用時的舒適度與放鬆感。',
  },
  {
    title: '專業場域形象',
    desc:
      '硬殼款外型更具設備質感，特別適合健身會館、健康管理中心、恢復空間與高端複合式服務場域。',
  },
  {
    title: '單人／雙人配置選擇',
    desc:
      '可依場域需求評估單人版或雙人版規格，兼顧坪效、服務彈性與實際營運模式。',
  },
];

export default function HardMainContent() {
  return (
    <div className="space-y-16">
      <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-green-900 leading-tight">
            豪華版硬殼微高壓氧艙
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            豪華版硬殼微高壓氧艙以更穩定的結構、更完整的艙內配置與更鮮明的專業形象為核心，
            適合導入重視品牌體驗與空間質感的商業場域。
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            相較於柔性氧艙，硬殼款在外觀完整度、空間感受與設備存在感上更具優勢，
            能作為高端健康管理與恢復服務中的重要亮點設備。
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">艙體類型</p>
              <p className="mt-1 text-lg font-semibold text-green-900">
                硬殼式結構
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">適用場域</p>
              <p className="mt-1 text-lg font-semibold text-green-900">
                高端商業空間
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
              <p className="text-sm text-gray-500">配置模式</p>
              <p className="mt-1 text-lg font-semibold text-green-900">
                單人／雙人
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-gray-100 shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/products/human/premium/main.jpg"
                alt="豪華版硬殼微高壓氧艙"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] bg-[#f8faf8] px-6 py-8 md:px-10 md:py-10">
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-green-900">
            硬殼氧艙的產品定位
          </h3>

          <p className="mt-5 text-gray-700 leading-8">
            硬殼氧艙不只是設備升級，更是整體服務體驗與場域定位的延伸。
            它適合需要更高專業感、更高空間完成度，以及更強品牌展示效果的營運模式。
          </p>

          <div className="mt-6 space-y-3">
            {[
              '外觀完整度高，適合作為空間亮點設備',
              '更適合高端恢復、健康管理與會員制場館',
              '艙內配置較完整，提升整體使用舒適性',
              '可搭配單人或雙人方案，因應不同營運需求',
            ].map((item) => (
              <div key={item} className="flex items-start">
                <span className="mt-[10px] mr-3 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600" />
                <p className="text-gray-700 leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-4 text-center text-3xl md:text-4xl font-serif font-semibold text-green-900">
          結構外觀
        </h2>

        <p className="mx-auto mb-10 max-w-3xl text-center text-gray-500">
          以下視圖供場地規劃、動線設計與設備配置參考。
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square">
              <Image
                src="/images/products/human/premium/left.jpg"
                alt="硬殼氧艙左側圖"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square">
              <Image
                src="/images/products/human/premium/front.jpg"
                alt="硬殼氧艙正面圖"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="relative aspect-square">
              <Image
                src="/images/products/human/premium/right.jpg"
                alt="硬殼氧艙右側圖"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-center text-4xl font-serif font-semibold text-green-900">
          產品優勢
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-500 leading-8">
          更完整的設備感、更穩定的結構表現與更鮮明的高端場域形象。
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, desc, bullets }) => (
            <div
              key={title}
              className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-serif font-semibold text-green-900">
                {title}
              </h3>

              <p className="text-gray-700 leading-8">{desc}</p>

              {bullets?.length ? (
                <ul className="mt-4 space-y-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start text-gray-800">
                      <span
                        aria-hidden
                        className="mt-[10px] mr-3 inline-block h-2.5 w-2.5 rotate-45 rounded-[2px] bg-orange-500"
                      />
                      <span className="leading-7">{b}</span>
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