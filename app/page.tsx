import TimezoneClient from "@/components/TimezoneClient";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "세계 시간대 변환기 (World Clock)",
  url: "https://time.moneystom7.com",
  description: "전 세계 도시의 현재 시간을 확인하는 무료 시계",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  inLanguage: ["ko", "en"],
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 font-sans">
      <Script id="json-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <TimezoneClient />

      <section className="max-w-2xl mx-auto mt-16 space-y-10 text-sm text-gray-400 pb-16">
        <div>
          <h2 className="text-white text-base font-semibold mb-3">세계 시간대 변환기란?</h2>
          <p>
            세계 시간대 변환기(World Timezone Planner)는 전 세계 14개 주요 도시의 현재 시간을
            실시간으로 보여주는 무료 온라인 세계 시계입니다. 서울, 뉴욕, 런던, 도쿄 등의 현재 시간을
            한눈에 확인할 수 있어 해외 미팅 일정을 잡거나 국제 비즈니스 커뮤니케이션에 유용합니다.
          </p>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">지원 도시 및 시간대</h2>
          <ul className="grid grid-cols-2 gap-1.5 list-none">
            <li>🇰🇷 서울 (KST, UTC+9)</li>
            <li>🇯🇵 도쿄 (JST, UTC+9)</li>
            <li>🇨🇳 베이징 (CST, UTC+8)</li>
            <li>🇸🇬 싱가포르 (SGT, UTC+8)</li>
            <li>🇦🇪 두바이 (GST, UTC+4)</li>
            <li>🇩🇪 프랑크푸르트 (CET/CEST)</li>
            <li>🇬🇧 런던 (GMT/BST)</li>
            <li>🇺🇸 뉴욕 (EST/EDT)</li>
            <li>🇺🇸 시카고 (CST/CDT)</li>
            <li>🇺🇸 로스앤젤레스 (PST/PDT)</li>
            <li>🇧🇷 상파울루 (BRT)</li>
            <li>🇦🇺 시드니 (AEST/AEDT)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-base font-semibold mb-3">자주 묻는 질문 (FAQ)</h2>
          <dl className="space-y-4">
            <div>
              <dt className="text-gray-300 font-medium">한국(서울)과 뉴욕의 시차는 얼마인가요?</dt>
              <dd className="mt-1">서울(KST)은 UTC+9, 뉴욕(EST)은 UTC-5로 평상시 14시간 차이가 납니다. 미국 서머타임(EDT, UTC-4) 적용 시 13시간 차이입니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">서머타임(Daylight Saving Time)이 자동으로 반영되나요?</dt>
              <dd className="mt-1">네. 브라우저의 Intl API를 사용하여 각 도시의 서머타임이 자동으로 적용됩니다. 별도 설정 없이 정확한 현지 시간을 확인할 수 있습니다.</dd>
            </div>
            <div>
              <dt className="text-gray-300 font-medium">한국과 런던의 시차는?</dt>
              <dd className="mt-1">서울(KST, UTC+9)과 런던(GMT, UTC+0)의 시차는 9시간입니다. 영국 서머타임(BST, UTC+1) 적용 시 8시간 차이입니다.</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
