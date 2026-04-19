import Script from "next/script"
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "세계 시간대 변환기 — MoneyStom7",
  description: "전 세계 주요 도시의 현재 시간을 실시간으로 확인. 무료 세계 시계.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ko"><body>{children}        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414331859152952"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body></html>;
}
