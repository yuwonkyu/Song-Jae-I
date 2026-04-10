"use client";

import Image from "next/image";
import { useState } from "react";

type PhotoCardProps = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  tone: "rose" | "gold" | "sky" | "lilac";
};

const toneStyles: Record<PhotoCardProps["tone"], string> = {
  rose: "from-rose-200 via-pink-100 to-fuchsia-200",
  gold: "from-amber-100 via-orange-50 to-yellow-200",
  sky: "from-cyan-100 via-sky-50 to-blue-200",
  lilac: "from-violet-200 via-fuchsia-50 to-pink-200",
};

export function PhotoCard({ src, alt, label, caption, tone }: PhotoCardProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="group relative w-full max-w-full min-w-0 -rotate-2 rounded-[1.15rem] bg-white p-[5px] shadow-[0_18px_40px_rgba(98,51,128,0.22)] transition duration-500 odd:rotate-2 sm:rounded-[1.35rem] sm:p-1.5">
      <div className="relative aspect-[6/4.5] overflow-hidden rounded-[0.9rem] bg-white sm:rounded-[1.05rem]">
        {hasError ? (
          <div
            className={`bg-linear-to-br flex h-full w-full flex-col items-center justify-center ${toneStyles[tone]} px-4 text-center text-[#7a4a73]`}
          >
            <span className="mb-2 text-[0.65rem] font-semibold tracking-[0.32em] text-white/80">
              JAI PHOTO
            </span>
            <span className="font-(family-name:--font-display) text-[clamp(1.35rem,7vw,2rem)] leading-none">
              {label}
            </span>
            <span className="mt-2 text-[10px] font-medium text-[#8a5a81] sm:text-xs">
              {caption}
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 44vw, 220px"
            className="object-cover transition duration-700 group-hover:scale-105"
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </figure>
  );
}