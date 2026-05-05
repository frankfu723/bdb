// /src/app/resources/videos/page.tsx
'use client';

import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Script from 'next/script';
import { useEffect } from 'react';

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

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

function processInstagramEmbeds() {
  if (typeof window === 'undefined') return;

  window.setTimeout(() => {
    window.instgrm?.Embeds?.process();
  }, 500);
}

function InstagramEmbed({ url, title }: { url: string; title: string }) {
  return (
    <div className="flex justify-center bg-white">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '12px',
          boxShadow: 'none',
          margin: 0,
          maxWidth: '540px',
          minWidth: '326px',
          padding: 0,
          width: '100%',
        }}
      >
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`在 Instagram 查看：${title}`}
        >
          在 Instagram 查看這支影片
        </Link>
      </blockquote>
    </div>
  );
}

function FeaturedVideoCard({ video }: { video: Video }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="border-b border-gray-100 bg-white px-3 pt-3">
        <InstagramEmbed url={video.url} title={video.title} />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
            {video.audience}
          </span>
          <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs text-green-800">
            {video.category}
          </span>
        </div>

        <h4 className="text-lg font-medium text-green-800 md:text-xl">
          {video.title}
        </h4>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {video.description}
        </p>

        <Link
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-green-700 hover:text-green-900"
        >
          在 Instagram 觀看 →
        </Link>
      </div>
    </article>
  );
}

function VideoLinkCard({ video }: { video: Video }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md">
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
          {video.audience}
        </span>
        <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs text-green-800">
          {video.category}
        </span>
      </div>

      <h4 className="text-lg font-medium text-green-800">
        {video.title}
      </h4>

      <p className="mt-3 text-sm leading-relaxed text-gray-600">
        {video.description}
      </p>

      <Link
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center rounded-full border border-green-700 px-4 py-2 text-sm font-medium text-green-700 transition-colors hover:bg-green-700 hover:text-white"
      >
        在 Instagram 觀看影片 →
      </Link>
    </article>
  );
}

function VideoSection({
  id,
  title,
  description,
  items,
}: {
  id: string;
  title: string;
  description: string;
  items: Video[];
}) {
  const featuredVideos = items.slice(0, 2);
  const moreVideos = items.slice(2);

  return (
    <section id={id} className="mb-16 scroll-mt-28">
      <div className="mb-6">
        <h3 className="font-serif text-2xl font-semibold text-green-900 md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredVideos.map((video) => (
          <FeaturedVideoCard key={video.title} video={video} />
        ))}
      </div>

      {moreVideos.length > 0 && (
        <div className="mt-8">
          <h4 className="mb-4 text-base font-medium text-gray-700">
            更多相關影片
          </h4>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {moreVideos.map((video) => (
              <VideoLinkCard key={video.title} video={video} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function VideosPage() {
  useEffect(() => {
    processInstagramEmbeds();
  }, []);

  return (
    <div className="w-full">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={processInstagramEmbeds}
      />

      <div className="mx-auto max-w-6xl px-6">
        <section className="bg-white pt-16 md:pt-24">
          <PageHeader title="氧艙科普影音" subtitle="Videos" />
        </section>

        <section className="mb-10 mt-12 md:mt-16">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 px-6 py-8 text-center">
            <h2 className="mb-6 font-serif text-xl font-bold text-gray-500 md:text-2xl">
              – 本內容為科普性質 –
            </h2>

            <ul className="space-y-4 leading-relaxed text-gray-600">
              {introLines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <p className="mt-8 text-sm leading-relaxed text-gray-500">
              {disclaimerNote}
            </p>
          </div>
        </section>

        <VideoSection
          id="pet-videos"
          title="毛孩氧艙科普"
          description="以飼主容易理解的方式，介紹毛孩術後恢復、皮膚照護、氧氣支持與進艙情境，降低大眾對寵物氧艙的陌生感。"
          items={petVideos}
        />

        <VideoSection
          id="human-videos"
          title="人體氧艙科普"
          description="從運動恢復、睡眠品質、專注力與日常保養切入，讓大眾快速理解氧氣在身體恢復與狀態管理中的角色。"
          items={humanVideos}
        />
      </div>
    </div>
  );
}