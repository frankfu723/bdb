'use client';

import Image from "next/image";
import Link from "next/link";
import Banner from "@/components/banner";
import ContactSection from '@/components/ContactSection';

type CompareRow = [string, string, string];

type FeaturedVideo = {
  title: string;
  description: string;
  category: string;
  href: string;
};

const COMPARISON: CompareRow[] = [
  [
    '艙內壓力',
    '通常 ≥ 1.5 ATA',
    '約 1.10 ATA',
  ],
  [
    '供氧方式',
    '依療程與設備規範提供高濃度氧氣',
    '輕度加壓環境搭配氧氣供應',
  ],
  [
    '體感特徵',
    '加壓感較明顯，需適應耳壓變化',
    '壓力溫和，舒適度高',
  ],
  [
    '使用方式',
    '依專業評估及場域流程安排',
    '依設備指引與個人狀況安排',
  ],
  [
    '常見場域',
    '醫療院所或具專業管理的場域',
    '健康管理、運動休息及一般服務空間',
  ],
  [
    '設備管理',
    '需依醫療及安全規範操作',
    '依產品手冊與場域安全規範操作',
  ],
];

const FEATURED_VIDEOS: FeaturedVideo[] = [
  {
    title: '毛孩術後恢復快慢差在哪？',
    description:
      '從氧氣支持、術後修復環境與恢復黃金期的角度，了解毛孩術後照護可以關注哪些重點。',
    category: '寵物術後照護',
    href: '/resources/videos#pet-videos',
  },
  {
    title: '狗狗皮膚病，一直好不了？',
    description:
      '以科普角度說明氧氣、循環與皮膚修復環境之間的關係，協助飼主建立正確照護觀念。',
    category: '寵物皮膚照護',
    href: '/resources/videos#pet-videos',
  },
  {
    title: '運動補蛋白質很正常，但你補過氧氣嗎？',
    description:
      '用健身族熟悉的補充觀念切入，說明氧氣在運動恢復與身體保養中的角色。',
    category: '運動恢復',
    href: '/resources/videos#human-videos',
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ===== Full-bleed Banner ===== */}
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2">
        <Banner
          imageSrc="/images/banner/home.jpg"
          mobileImageSrc="/images/products/human/soft/forest_chamber.jpg"
        />
      </div>

      {/* ===== Main Container ===== */}
      <div className="mx-auto max-w-[1400px] px-6 xl:max-w-[1500px] 2xl:max-w-[1660px]">
        {/* ===== 產品列表 ===== */}
        <section className="mx-auto mt-20">
          <h2 className="text-center font-serif text-4xl font-semibold text-green-900">
            產品列表
          </h2>

          <p className="mt-2 text-center text-gray-600">
            從寵物照護到人體休息，提供符合不同空間需求的氧艙設備
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "寵物用高壓氧艙",
                img: "/images/products/pet/main.jpg",
                link: "/products/oxy-series/pet",
              },
              {
                title: "人用微壓氧艙",
                img: "/images/products/human/soft/cover_with_machine.jpg",
                link: "/products/oxy-series/human/soft",
              },
              {
                title: "豪華高壓氧艙",
                img: "/images/products/human/premium/main.jpg",
                link: "/products/oxy-series/human/premium",
              },
            ].map((item, index) => (
              <Link
                key={item.link}
                href={item.link}
                className="group block overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative aspect-[5/4] w-full md:aspect-[4/3]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(min-width:1660px) 520px, (min-width:1500px) 480px, (min-width:1280px) 450px, (min-width:768px) 44vw, 100vw"
                    priority={index === 0}
                  />
                </div>

                <div className="bg-green-900/80 px-2 py-2.5 text-center font-serif leading-tight text-white md:py-3">
                  <span className="align-middle text-base font-bold md:text-lg">
                    {item.title}
                  </span>

                  <span className="ml-1.5 inline-block align-middle transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== 影片精華區 ===== */}
        <section className="mx-auto max-w-6xl px-0 py-20 md:px-6">
          <div className="rounded-3xl border border-gray-200 bg-white px-5 py-10 shadow-sm md:px-10 md:py-14">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-4xl font-semibold text-green-900">
                氧艙科普影音精選
              </h2>

              <p className="mt-4 leading-relaxed text-gray-700">
                透過短影音快速認識寵物氧艙、人體氧艙與日常氧氣支持觀念。
                我們以簡單易懂的方式，協助飼主、場館與合作夥伴建立正確的氧艙使用認知。
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              {FEATURED_VIDEOS.map((video) => (
                <Link
                  key={video.title}
                  href={video.href}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                      {video.category}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-700 text-green-800 transition group-hover:bg-green-800 group-hover:text-white">
                      ▶
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold leading-snug text-green-900">
                    {video.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                    {video.description}
                  </p>

                  <div className="mt-6 text-sm font-medium text-green-700 transition group-hover:text-green-900">
                    查看相關影片 →
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/resources/videos"
                className="inline-flex items-center justify-center rounded-full bg-green-900 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-green-800"
              >
                前往影音科普專區 →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 什麼是高壓氧 ===== */}
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mb-4 text-center font-serif text-4xl font-semibold text-green-900">
            什麼是高壓氧？
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            高壓氧（HBO）是在高於一般大氣壓的環境中吸入高濃度氧氣。
            隨著環境壓力與氧分壓提高，氧氣在血漿中的溶解量也會增加。
            醫療用途的高壓氧治療須由專業人員評估，並依核准設備、適應症與操作規範執行。
          </p>
        </section>

        {/* ===== 高壓氧艙原理 ===== */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <h3 className="mb-6 text-center font-serif text-4xl font-semibold text-green-900">
            高壓氧艙原理說明
          </h3>

          <p className="mb-4 leading-relaxed text-gray-700">
            高壓氧艙透過提高環境壓力與吸入氧濃度，提升氧分壓；
            依亨利定律，氣體分壓提高時，在液體中的溶解量也會增加。
          </p>

          <ol className="ml-5 list-decimal space-y-3 text-gray-800">
            <li>
              <span className="font-semibold text-green-900">
                壓力提升（P↑）
              </span>
              ：艙內壓力高於 1 ATA，空氣受到壓縮。
            </li>

            <li>
              <span className="font-semibold text-green-900">
                溶解氧增加
              </span>
              ：依亨利定律，氧分壓提高時，氧在血漿中的溶解量會增加。
            </li>

            <li>
              <span className="font-semibold text-green-900">
                組織氧分壓上升
              </span>
              ：血液中的溶解氧增加，有助提高組織氧分壓與氧氣擴散梯度。
            </li>

            <li>
              <span className="font-semibold text-green-900">
                專業評估與操作
              </span>
              ：實際壓力、氧濃度與使用時間，應依設備規範及專業評估設定。
            </li>
          </ol>

          <div className="mt-5 border border-gray-100 bg-gray-50/40 p-4 text-base text-green-900">
            <div className="mb-2 font-serif font-semibold">
              作用流程
            </div>

            <div>
              加壓（P↑） → 血漿溶氧（O₂↑） → 組織氧分壓（PtO₂↑） →
              氧氣擴散梯度提高
            </div>
          </div>
        </section>

        {/* ===== 什麼是微壓氧 ===== */}
        <section className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="mb-4 text-center font-serif text-4xl font-semibold text-green-900">
            什麼是微壓氧？
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
            微壓氧是在略高於一般大氣壓的艙內環境中，搭配氧氣供應，
            提供相對溫和的加壓與休息體驗。本產品工作壓力約為
            1.10 ATA；實際艙內壓力、氧濃度與體感會因設備設定、
            環境及使用條件而異。
          </p>
        </section>

        {/* ===== 微壓氧艙原理 ===== */}
        <section className="mx-auto max-w-3xl px-6 py-12">
          <h3 className="mb-6 text-center font-serif text-4xl font-semibold text-green-900">
            微壓氧艙原理說明
          </h3>

          <p className="mb-4 leading-relaxed text-gray-700">
            微壓氧以「輕度加壓＋氧氣供應」為核心，著重舒適、穩定的艙內休息體驗。
          </p>

          <ol className="ml-5 list-decimal space-y-3 text-gray-800">
            <li>
              <span className="font-semibold text-green-900">
                輕度加壓
              </span>
              ：工作壓力約 1.10 ATA，加壓感相對溫和。
            </li>

            <li>
              <span className="font-semibold text-green-900">
                穩定供氧
              </span>
              ：在輕度加壓環境中搭配氧氣供應；實際氧濃度依設備與使用條件而異。
            </li>

            <li>
              <span className="font-semibold text-green-900">
                舒適體驗
              </span>
              ：平穩微壓環境，較容易被多數使用者接受。
            </li>

            <li>
              <span className="font-semibold text-green-900">
                導入彈性
              </span>
              ：艙體與場域需求相對簡化，適合不同空間配置。
            </li>
          </ol>

          <div className="mt-5 border border-gray-100 bg-gray-50/40 p-4 text-base text-green-900">
            <div className="mb-2 font-serif font-semibold">
              作用流程
            </div>

            <div>
              輕度加壓（P↗）＋氧氣供應 → 艙內氧分壓提高 →
              提供舒適的休息環境
            </div>
          </div>
        </section>

        {/* ===== 高壓氧 vs 微壓氧 ===== */}
        <section className="mx-auto max-w-6xl px-6 py-20 font-serif">
          <h2 className="mb-6 text-center text-4xl font-semibold text-green-900">
            高壓氧 vs 微壓氧
          </h2>

          {/* 手機版比較表 */}
          <div className="text-green-900 md:hidden">
            <ul className="space-y-4">
              {COMPARISON.map(([label, hbo, mhbo]) => (
                <li key={label} className="bg-white p-4">
                  <div className="mb-3 font-serif text-base font-semibold">
                    {label}
                  </div>

                  <div className="overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-1 bg-gray-50 text-center min-[360px]:grid-cols-2">
                      <div className="border-b border-gray-200 py-2 font-medium min-[360px]:border-b-0 min-[360px]:border-r">
                        高壓氧（HBO）
                      </div>

                      <div className="border-b border-gray-200 py-2 font-medium min-[360px]:border-b-0">
                        微壓氧
                      </div>
                    </div>

                    <div className="grid grid-cols-1 text-center min-[360px]:grid-cols-2">
                      <div className="min-w-0 break-words border-gray-200 p-3 text-sm leading-relaxed text-gray-800 min-[360px]:border-r min-[360px]:border-t">
                        {hbo}
                      </div>

                      <div className="min-w-0 break-words border-t border-gray-200 p-3 text-sm leading-relaxed text-gray-800">
                        {mhbo}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 桌機版比較表 */}
          <div className="hidden overflow-x-auto md:block">
            <table className="mx-auto w-full max-w-6xl border-collapse border border-gray-200 text-base text-green-900">
              <thead>
                <tr className="bg-green-900 text-white">
                  <th className="border border-gray-200 p-4 text-center">
                    比較參數
                  </th>

                  <th className="border border-gray-200 p-4 text-center">
                    高壓氧（HBO）
                  </th>

                  <th className="border border-gray-200 p-4 text-center">
                    微壓氧
                  </th>
                </tr>
              </thead>

              <tbody>
                {COMPARISON.map(([label, hbo, mhbo]) => (
                  <tr key={label} className="odd:bg-gray-50">
                    <td className="whitespace-nowrap border border-gray-200 p-4 text-center font-semibold">
                      {label}
                    </td>

                    <td className="whitespace-pre-line border border-gray-200 p-4 text-center">
                      {hbo}
                    </td>

                    <td className="whitespace-pre-line border border-gray-200 p-4 text-center">
                      {mhbo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">
            以上為一般性原理與設備差異說明，不代表醫療效果。實際操作請依設備型號、
            產品手冊及場域安全規範。
          </p>
        </section>

        {/* ===== 共用表單 ===== */}
        <ContactSection />
      </div>
    </div>
  );
}