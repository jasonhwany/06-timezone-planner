"use client";
import AdUnit from "@/components/AdUnit"
import { useState, useEffect } from "react";

const CITIES = [
  { name: "서울",       tz: "Asia/Seoul",             flag: "🇰🇷" },
  { name: "도쿄",       tz: "Asia/Tokyo",             flag: "🇯🇵" },
  { name: "베이징",     tz: "Asia/Shanghai",           flag: "🇨🇳" },
  { name: "싱가포르",   tz: "Asia/Singapore",          flag: "🇸🇬" },
  { name: "두바이",     tz: "Asia/Dubai",              flag: "🇦🇪" },
  { name: "이스탄불",   tz: "Europe/Istanbul",         flag: "🇹🇷" },
  { name: "프랑크푸르트", tz: "Europe/Berlin",         flag: "🇩🇪" },
  { name: "런던",       tz: "Europe/London",           flag: "🇬🇧" },
  { name: "상파울루",   tz: "America/Sao_Paulo",       flag: "🇧🇷" },
  { name: "뉴욕",       tz: "America/New_York",        flag: "🇺🇸" },
  { name: "시카고",     tz: "America/Chicago",         flag: "🇺🇸" },
  { name: "로스앤젤레스", tz: "America/Los_Angeles",  flag: "🇺🇸" },
  { name: "시드니",     tz: "Australia/Sydney",        flag: "🇦🇺" },
  { name: "오클랜드",   tz: "Pacific/Auckland",        flag: "🇳🇿" },
];

const fmt = (tz: string, opts: Intl.DateTimeFormatOptions) =>
  new Date().toLocaleString("ko-KR", { timeZone: tz, ...opts });

export default function TimezonePlanner() {
  const [tick, setTick] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const filtered = CITIES.filter(c => c.name.includes(search) || c.tz.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <div className="max-w-2xl mx-auto pt-10">
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🌏</div>
          <h1 className="text-3xl font-bold tracking-tight">세계 시간대</h1>
          <p className="text-gray-400 mt-1 text-sm">World Timezone Planner · 실시간 업데이트</p>
        </div>

        <input type="text" value={search} onChange={e => setSearch(e.target.value)}
          placeholder="도시 또는 시간대 검색..."
          className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 mb-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {filtered.map(city => {
            void tick; // force re-render
            const time = fmt(city.tz, { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
            const date = fmt(city.tz, { weekday: "short", month: "short", day: "numeric" });
            return (
              <div key={city.tz} className="bg-gray-900 rounded-xl p-4 hover:border hover:border-emerald-500/30 border border-transparent transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{city.flag}</span>
                    <div>
                      <p className="font-medium text-sm">{city.name}</p>
                      <p className="text-xs text-gray-500">{date}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xl text-emerald-400 font-bold tabular-nums">{time}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-600 mt-10">
          <a href="https://moneystom7.com" className="hover:text-gray-400 transition-colors">← MoneyStom7 홈으로</a>
        </p>
      </div>
    </div>
  );
}
