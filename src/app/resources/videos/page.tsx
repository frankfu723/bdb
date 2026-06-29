// /src/app/resources/videos/page.tsx

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

type Video = {
  title: string;
  description: string;
  category: string;
  audience: '寵物氧艙' | '人體氧艙';
  url: string;
};

const introLines: string[] = [
  '透過短影片快速認識氧艙原理、毛孩照護、人體氧氣支持、運動恢復與日常保養觀念。',
  '本專區以科普方式說明氧氣、壓力與身體恢復之間的關係，協助大眾建立正確的氧艙使用認知。',
  '影片內容涵蓋寵物術後照護、皮膚照護、氧氣支持、運動恢復、睡眠與專注力等主題。',
];

const disclaimerNote =
  '註：本專區內容為一般科普與產品知識介紹，非醫療診斷、治療建議或療效保證。如涉及個人健康、睡眠問題、運動傷害、寵物疾病、術後照護或特殊身體狀況，請諮詢專業醫師、獸醫師或相關專業人員。';

const videos: Video[] = [
  {
    title: '毛孩術後恢復快慢差在哪？',
    description:
      '從氧氣支持、術後修復環境與恢復黃金期的角度，帶飼主了解毛孩術後照護可以關注哪些重點。',
    category: '寵物術後照護',
    audience: '寵物氧艙',
    url: 'https://www.instagram.com/reel/DX5irJDO2Qs/',
  },
  {
    title: '狗狗皮膚病，一直好不了？',
    description:
      '以科普角度說明氧氣、循環與皮膚修復環境之間的關係，幫助飼主建立正確照護觀念。',
    category: '寵物皮膚照護',
    audience: '寵物氧艙',
    url: 'https://www.instagram.com/reel/DX5kLrYJ8BD/',
  },
  {
    title: '毛孩也需要深呼吸！',
    description:
      '用簡單方式說明毛孩在恢復、疲勞或壓力狀態下，為什麼氧氣支持是值得理解的照護概念。',
    category: '寵物氧氣科普',
    audience: '寵物氧艙',
    url: 'https://www.instagram.com/reel/DX5logpNJZd/',
  },
  {
    title: '毛孩術後康復，錯過黃金72小時會怎樣？',
    description:
      '以術後黃金72小時為主題，說明早期照護、氧氣支持與恢復環境的重要性。',
    category: '寵物術後照護',
    audience: '寵物氧艙',
    url: 'https://www.instagram.com/reel/DX6l45Uys6f/',
  },
  {
    title: '寵物也會有高原反應？',
    description:
      '用「高原反應」作為比喻，讓飼主更容易理解缺氧感、呼吸負擔與氧氣環境的概念。',
    category: '寵物氧氣科普',
    audience: '寵物氧艙',
    url: 'https://www.instagram.com/reel/DX6mNawN6e0/',
  },
  {
    title: '貓咪看診 vs. 進艙療癒，有什麼差別？',
    description:
      '說明一般看診與氧艙體驗在目的、情境與照護感受上的差異，降低飼主對氧艙的陌生感。',
    category: '寵物使用情境',
    audience: '寵物氧艙',
    url: 'https://www.instagram.com/reel/DX6mpiasKy2/',
  },
  {
    title: '同樣練腿，別人隔天照跑，你卻走不動？',
    description:
      '從運動後疲勞、肌肉修復與氧氣供應的角度，認識氧艙在恢復保養上的應用。',
    category: '運動恢復',
    audience: '人體氧艙',
    url: 'https://www.instagram.com/reel/DX6nTUnNmb6/',
  },
  {
    title: '失眠，可能和缺氧有關？',
    description:
      '以日常保養角度說明睡眠品質、身體壓力與氧氣狀態之間可能存在的關聯。',
    category: '日常保養',
    audience: '人體氧艙',
    url: 'https://www.instagram.com/reel/DX6ni3MsX42/',
  },
  {
    title: '專注力與運動表現的秘密',
    description:
      '介紹氧氣與大腦專注、體能輸出、恢復效率之間的基本概念，適合運動族群快速理解。',
    category: '人體氧氣科普',
    audience: '人體氧艙',
    url: 'https://www.instagram.com/reel/DX6oE6sPRKy/',
  },
  {
    title: '運動補蛋白質很正常，但你補過氧氣嗎？',
    description:
      '用健身族熟悉的補充觀念切入，說明氧氣在運動恢復與身體保養中的角色。',
    category: '運動恢復',
    audience: '人體氧艙',
    url: 'https://www.instagram.com/reel/DX6oQqEPPxb/',
  },
];

const petVideos = videos.filter((video) => video.audience === '寵物氧艙');
const humanVideos = videos.filter((video) => video.audience === '人體氧艙');

function VideoTags({ video }: { video: Video }) {
  return (
    <div className="mb-5 flex flex-wrap gap-2">
      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
        {video.audience}
      </span>

      <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-800">
        {video.category}
      </span>
    </div>
  );
}

function VideoCard({ video, index }: { video: Video; index: number }) {
  return (
    <article className="group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg">
      <div className="absolute right-5 top-5 text-5xl font-serif text-green-50 transition-colors group-hover:text-green-100">
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <VideoTags video={video} />

        <h4 className="text-xl font-medium leading-snug text-green-800">
          {video.title}
        </h4>

        <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {video.description}
        </p>

        <div className="mt-auto pt-8">
          <Link
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-green-700 px-5 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white"
          >
            在 Instagram 觀看影片 →
          </Link>
        </div>
      </div>
    </article>
  );
}

function VideoSection({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Video[];
}) {
  return (
    <section id={id} className="mb-20 scroll-mt-28">
      <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-2 text-xs font-medium tracking-[0.24em] text-green-700">
            {eyebrow}
          </p>

          <h3 className="font-serif text-2xl font-semibold text-green-950 md:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            {description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {items.map((video, index) => (
          <VideoCard key={video.title} video={video} index={index} />
        ))}
      </div>
    </section>
  );
}

export default function VideosPage() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <section className="pt-16 md:pt-24">
          <PageHeader title="氧艙科普影音" subtitle="Videos" />
        </section>

        <section className="mb-14 mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 via-white to-green-50 px-6 py-10 text-center md:px-12">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-100/60 blur-2xl" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-stone-100 blur-2xl" />

            <div className="relative z-10">
              <p className="mb-3 text-xs font-medium tracking-[0.24em] text-green-700">
                OXYGEN CHAMBER KNOWLEDGE
              </p>

              <h2 className="mb-6 font-serif text-xl font-bold text-gray-600 md:text-2xl">
                – 本內容為科普性質 –
              </h2>

              <ul className="mx-auto max-w-4xl space-y-4 leading-relaxed text-gray-600">
                {introLines.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>

              <p className="mx-auto mt-8 max-w-4xl text-sm leading-relaxed text-gray-500">
                {disclaimerNote}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="#pet-videos"
                  className="rounded-full bg-green-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-900"
                >
                  寵物氧艙科普
                </Link>

                <Link
                  href="#human-videos"
                  className="rounded-full border border-green-800 px-5 py-2 text-sm font-medium text-green-800 transition-colors hover:bg-green-800 hover:text-white"
                >
                  人體氧艙科普
                </Link>
              </div>
            </div>
          </div>
        </section>

        <VideoSection
          id="pet-videos"
          eyebrow="PET OXYGEN CHAMBER"
          title="寵物氧艙科普"
          description="以飼主容易理解的方式，介紹毛孩術後恢復、皮膚照護、氧氣支持與進艙情境，降低大眾對寵物氧艙的陌生感。"
          items={petVideos}
        />

        <VideoSection
          id="human-videos"
          eyebrow="HUMAN OXYGEN CHAMBER"
          title="人體氧艙科普"
          description="從運動恢復、睡眠品質、專注力與日常保養切入，讓大眾快速理解氧氣在身體恢復與狀態管理中的角色。"
          items={humanVideos}
        />
      </div>
    </main>
  );
}