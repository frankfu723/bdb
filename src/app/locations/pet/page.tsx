'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { hospitals as baseHospitals } from '@/data/hospitals';
import { hospitalDetails } from '@/data/hospitalDetails';

type HospitalVM = {
  name: string;
  region: string;
  url?: string;
  address?: string;
  hours?: string;
  phone?: string;
  mapUrl?: string;
  siteUrl?: string;
  tags?: string[];
};

export default function PetHospitalsPage() {
  // 合併 partnerRegions 與 hospitalDetails
  const hospitals: HospitalVM[] = useMemo(
    () =>
      baseHospitals.map((h) => ({
        ...h,
        ...(hospitalDetails[h.name] || {}),
        siteUrl: hospitalDetails[h.name]?.siteUrl || h.url,
      })),
    []
  );

  const [q, setQ] = useState('');
  const [region, setRegion] = useState<string>('');

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return hospitals.filter((h) => {
      const hitRegion = region ? h.region === region : true;
      if (!hitRegion) return false;
      if (!kw) return true;

      const haystack = [
        h.name,
        h.region,
        h.address,
        h.hours,
        h.phone,
        ...(h.tags || []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return haystack.includes(kw);
    });
  }, [hospitals, q, region]);

  const regions = useMemo(
    () => Array.from(new Set(hospitals.map((h) => h.region))).filter(Boolean),
    [hospitals]
  );

  return (
    <div className="w-full">
      {/* 內容最大寬度與首頁一致 */}
      <section className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14">
        <h1 className="font-serif text-4xl sm:text-4xl text-green-900 text-center font-semibold tracking-wide">
          寵物照護場域
        </h1>
        <p className="text-gray-600 text-center mt-3">
          合作動物醫院已導入高壓氧艙設備，提供安全、專業的氧療照護。
        </p>

        {/* Search / Filter */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center">
        <input
            type="text"
            placeholder="搜尋醫院、地區、關鍵字…"
            className="w-full sm:w-96 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-700/10"
            value={q}
            onChange={(e) => setQ(e.target.value)}
        />
        <select
            className="w-full sm:w-48 border border-gray-200 rounded-xl px-3 py-3 text-gray-700"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
        >
            <option value="">全部區域</option>
            {regions.map((r) => (
            <option key={r} value={r}>
                {r}
            </option>
            ))}
        </select>
        </div>


        {/* 清單 */}
        <div className="py-10 sm:py-12">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500">查無符合條件的醫院。</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((h) => (
                <article
                key={h.name}
                className="border border-gray-200 p-4 hover:shadow-md transition"
                >

                  <h3 className="font-serif text-xl text-green-900 font-semibold break-words">
                    {h.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{h.region}</p>

                  {h.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {h.tags.map((t) => (
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
                    {h.address && <li className="break-words">📍 {h.address}</li>}
                    {h.hours && <li>🕒 {h.hours}</li>}
                    {h.phone && <li>☎️ {h.phone}</li>}
                  </ul>

                  {/* Mobile 直排滿版；桌機橫排 */}
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    {h.mapUrl && (
                      <a
                        href={h.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center px-4 py-2 rounded-xl border border-gray-200 text-green-900 hover:bg-green-50 w-full sm:w-auto min-h-[44px]"
                      >
                        Google 導航
                      </a>
                    )}
                    {h.siteUrl ? (
                      <Link
                        href={h.siteUrl}
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
