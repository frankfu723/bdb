// src/data/human.ts
export type Human = {
  name: string;
  address?: string;
  hours?: string;
  phone?: string;
  mapUrl?: string;  // 若未填，頁面會用 address 自動組出 Google Maps 連結
  siteUrl?: string; // 官方頁或你們站內頁
  tags?: string[];  // 例：['自由重量', '團課', '預約制']
};

export const humans: Human[] = [
  {
    name: "耕重健身工作室 Cultivate",
    address: "新北市板橋區三民路一段56號B1",
    hours: "",
    phone: "0915-322-788",
    siteUrl: "https://www.instagram.com/cultivate.fit/",
    tags: ["預約制"],
  },
  {
    name: "MYWAY Fitness",
    address: "台北市中山區復興南路一段2號B1",
    hours: "週一至週日 08:00-23:00",
    phone: "02-8772-4271",
    siteUrl: "https://www.facebook.com/MYWAY.Fitness.SC/",
    tags: ["按分鐘計費"],
  },
  {
    name: "新北高中綜合體育館",
    address: "新北市三重區富貴里三信路25號",
    hours: "週一至週日 08:00-22:00",
    phone: "02-2857-7326",
    siteUrl: "https://iplay.sports.gov.tw/gyminfo/index/9805",
    tags: ["預約制"],
  }
];
