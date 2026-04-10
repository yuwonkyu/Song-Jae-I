import type { Metadata } from "next";
import { Gaegu, Lobster_Two, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const gaegu = Gaegu({
  variable: "--font-gaegu",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lobsterTwo = Lobster_Two({
  variable: "--font-lobster-two",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "포근이 송재이",
  description: "송재이의 탄생을 축하해!.",
  openGraph: {
    title: "포근이 송재이",
    description: "송재이의 탄생을 축하해!.",
    images: [
      {
        url: "/POop.jpg",
        alt: "송재이 오픈그래프 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "포근이 송재이",
    description: "송재이의 탄생을 축하해!.",
    images: ["/POop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${gaegu.variable} ${lobsterTwo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
