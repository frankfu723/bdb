// /src/components/human/soft/SpecsTable.tsx

type Row = {
  label: string;
  v: string[];
};

const HEADERS = [
  '規格參數',
  '躺椅式柔性氧艙',
  '雙人主機',
  '單人主機',
];

const ROWS: Row[] = [
  {
    label: '尺寸',
    v: [
      'L 178 × W 100 × H 140 cm',
      'W 47 × D 52 × H 88 cm',
      'W 44 × D 48 × H 81 cm',
    ],
  },
  {
    label: '電源／功率',
    v: [
      '－',
      '220V AC / 1000W\n或 110V AC / 2000W',
      '220V AC / 800W\n或 110V AC / 1600W',
    ],
  },
  {
    label: '標準艙內工作壓力',
    v: [
      '8–10 kPa\n約 1.08–1.10 ATA，可設定',
      '－',
      '－',
    ],
  },
  {
    label: '製氧分子篩',
    v: [
      '－',
      '10 L 分子篩 × 2 組，可更換',
      '10 L 分子篩 × 1 組，可更換',
    ],
  },
  {
    label: '氧濃度',
    v: [
      '正常運行約 28–30%',
      '製氧濃度約 95% ± 3%',
      '製氧濃度約 95% ± 3%',
    ],
  },
  {
    label: '水冷空調',
    v: [
      '冷凍液循環冷卻\n艙內溫度可較室溫低約 5°C',
      '專利冷凍液冷卻循環',
      '專利冷凍液冷卻循環',
    ],
  },
  {
    label: '護智燈系統',
    v: [
      '選配',
      '－',
      '－',
    ],
  },
  {
    label: '抗菌自潔',
    v: [
      '負離子淨化及 UV 紫外線消毒',
      '－',
      '－',
    ],
  },
  {
    label: '光療系統',
    v: [
      '石墨烯遠紅外線光療，可遙控控制',
      '－',
      '－',
    ],
  },
  {
    label: '應急系統',
    v: [
      '艙內緊急按鈕',
      '觸控螢幕緊急按鈕',
      '觸控螢幕緊急按鈕',
    ],
  },
  {
    label: '配件',
    v: [
      '內置單人沙發（椅套可更換）',
      '－',
      '－',
    ],
  },
];

export default function SpecsTable() {
  const modelIndexes = Array.from(
    { length: HEADERS.length - 1 },
    (_, i) => i + 1
  );

  return (
    <>
      <h2 className="mb-6 text-center font-serif text-3xl font-semibold text-green-900 md:mb-8 md:text-4xl">
        規格說明
      </h2>

      {/* 手機版 */}
      <div className="space-y-5 md:hidden">
        {modelIndexes.map((colIdx) => (
          <section
            key={colIdx}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          >
            <div className="bg-green-900/90 px-4 py-3 text-center font-serif font-semibold leading-relaxed text-white">
              {HEADERS[colIdx]}
            </div>

            <table className="w-full border-collapse">
              <tbody>
                {ROWS.map((row, rowIdx) => (
                  <tr
                    key={row.label}
                    className={rowIdx % 2 ? 'bg-gray-50' : 'bg-white'}
                  >
                    <th className="w-32 align-top border-t border-gray-200 px-3 py-2 text-left font-semibold text-green-900">
                      {row.label}
                    </th>

                    <td className="break-words whitespace-pre-line border-t border-gray-200 px-3 py-2 leading-relaxed text-gray-800">
                      {row.v[colIdx - 1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>

      {/* 桌機版 */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[900px] table-auto border-collapse border border-gray-200 font-serif text-sm text-green-900 md:text-base">
          <thead>
            <tr className="bg-green-900 text-white">
              {HEADERS.map((header) => (
                <th
                  key={header}
                  className="whitespace-nowrap border border-gray-200 px-4 py-3 text-center md:px-5 md:py-4"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ROWS.map(({ label, v }, rowIdx) => (
              <tr
                key={label}
                className={rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="whitespace-nowrap border border-gray-200 px-4 py-3 text-center font-semibold md:px-5 md:py-4">
                  {label}
                </td>

                {v.map((cell, cellIdx) => (
                  <td
                    key={`${label}-${cellIdx}`}
                    className="whitespace-pre-line border border-gray-200 px-4 py-3 text-center align-middle leading-relaxed md:px-5 md:py-4"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}