'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { humans as baseHumans } from '@/data/humans';

type GymVM = {
  name: string;
  address?: string;
  hours?: string;
  phone?: string;
  mapUrl?: string;
  siteUrl?: string;
  tags?: string[];
};

const toMaps = (addr?: string) =>
  addr ? `https://maps.google.com/?q=${encodeURIComponent(addr)}` : undefined;

export default function GymsPage() {
  // 自動補 mapUrl（若沒填且有 address）
  const gyms: GymVM[] = useMemo(
    () =>
      baseHumans.map((g) => ({
        ...g,
        mapUrl: g.mapUrl || toMaps(g.address),
      })),
    []
  );

  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    if (!kw) return gyms;
    return gyms.filter((g) =>
      [
        g.name,
        g.address,
        g.hours,
        g.phone,
        ...(g.tags || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(kw)
    );
  }, [gyms, q]);

  return (
    <div className="w-full">
      {/* 內容最大寬度與首頁一致 */}
      <section className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14">
        <h1 className="font-serif text-4xl sm:text-4xl text-green-900 text-center font-semibold tracking-wide">
          運動恢復場域
        </h1>
        <p className="text-gray-600 text-center mt-3">
          適用於健身房、學校、訓練中心與多元運動空間，結合高壓氧服務，打造更完整的運動恢復與身心調節體驗。
        </p>

        {/* Search */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center">
          <input
            type="text"
            placeholder="搜尋健身房、地址、關鍵字…"
            className="w-full sm:w-96 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700/10"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        {/* 清單 */}
        <div className="py-10 sm:py-12">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500">查無符合條件的健身房。</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((g) => (
                <article
                  key={g.name}
                  className="border border-gray-200 p-4 hover:shadow-md transition"
                >
                  <h3 className="font-serif text-xl text-green-900 font-semibold break-words">
                    {g.name}
                  </h3>

                  {g.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {g.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <ul className="mt-4 space-y-1 text-gray-700 text-sm leading-relaxed">
                    {g.address && <li className="break-words">📍 {g.address}</li>}
                    {g.hours && <li>🕒 {g.hours}</li>}
                    {g.phone && <li>☎️ {g.phone}</li>}
                  </ul>

                  {/* Mobile 直排滿版；桌機橫排 */}
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    {g.mapUrl && (
                      <a
                        href={g.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-4 py-2 rounded-xl border border-gray-200 text-green-900 hover:bg-green-50 w-full sm:w-auto min-h-[44px]"
                      >
                        Google 導航
                      </a>
                    )}
                    {g.siteUrl ? (
                      <Link
                        href={g.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-4 py-2 rounded-xl bg-green-900 text-white hover:opacity-90 w-full sm:w-auto min-h-[44px]"
                      >
                        詳細資訊
                      </Link>
                    ) : (
                      <span className="text-gray-400 text-sm w-full sm:w-auto inline-flex items-center min-h-[44px]">
                        尚無網站
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
