import { PhotoCard } from "./components/photo-card";

const timelineItems = [
  {
    id: "arrival-photo",
    side: "left",
    type: "photo",
    src: "/ji1.png",
    alt: "송재이 첫 번째 사진",
    label: "01",
    caption: "첫 만남의 순간",
    tone: "rose" as const,
  },
  {
    id: "wedding",
    side: "right",
    type: "note",
    title: "2025.06.15",
    subtitle: "Wedding Day",
  },
  {
    id: "birth-note-left",
    side: "left",
    type: "note",
    title: "2026.04.03",
    subtitle: "포근이, 세상에 오다",
  },
  {
    id: "smile-photo",
    side: "right",
    type: "photo",
    src: "/ji2.jpg",
    alt: "송재이 두 번째 사진",
    label: "02",
    caption: "웃음이 반짝이는 재이",
    tone: "lilac" as const,
  },
  {
    id: "family-photo",
    side: "left",
    type: "photo",
    src: "/ji3.jpg",
    alt: "송재이 세 번째 사진",
    label: "03",
    caption: "포근한 하루의 표정",
    tone: "gold" as const,
  },
  {
    id: "birthday-note-right",
    side: "right",
    type: "note",
    title: "2026.04.03",
    subtitle: "Happy Birthday,\nJae I",
  },
  {
    id: "angel-photo",
    side: "right",
    type: "photo",
    src: "/po6.png",
    alt: "송재이 네 번째 사진",
    label: "04",
    caption: "우리 집에 온 작은 천사",
    tone: "sky" as const,
  },
] as const;

const blessingLines = [
  {
    lead: "포근아,",
    follow: "우리 가족에게 와 줘서 진심으로 고마워.",
  },
  {
    lead: "2026년 4월 3일,",
    follow: "가장 사랑스러운 계절이 시작됐어.",
  },
  {
    lead: "건강하고 행복하게,",
    follow: "너만의 속도로 반짝이며 자라나길 바라.",
  },
];

const familyFacts = [
  "태명 포근이",
  "이름 송재이",
  "우리 딸",
  "아빠 송영덕",
  "엄마 김서정",
];

const sparkles = [
  { position: "left-7 top-10", size: "text-base" },
  { position: "left-14 top-28", size: "text-xs" },
  { position: "right-10 top-16", size: "text-base" },
  { position: "right-16 top-40", size: "text-xs" },
  { position: "left-10 bottom-52", size: "text-base" },
  { position: "right-8 bottom-36", size: "text-xs" },
  { position: "left-1/2 top-[31%]", size: "text-base" },
  { position: "left-1/3 bottom-24", size: "text-xs" },
];

function TimelineContent({ item }: { item: (typeof timelineItems)[number] }) {
  if (item.type === "photo") {
    return (
      <div className="w-full max-w-[9rem] sm:max-w-[11rem]">
        <PhotoCard
          src={item.src}
          alt={item.alt}
          label={item.label}
          caption={item.caption}
          tone={item.tone}
        />
      </div>
    );
  }

  const isMultilineSubtitle = item.subtitle.includes("\n");

  return (
    <div className="w-full max-w-[9.6rem] rounded-[1.35rem] border border-white/50 bg-[linear-gradient(180deg,rgba(255,250,252,0.96),rgba(250,236,245,0.9))] px-3 py-2.5 text-center text-[#8b5e82] shadow-[0_16px_34px_rgba(113,64,141,0.18)] backdrop-blur-sm sm:max-w-[10.8rem] sm:rounded-3xl sm:px-4 sm:py-3">
      <p className="text-[clamp(0.78rem,5.9vw,1.7rem)] font-bold leading-none tracking-[-0.06em] text-balance sm:text-[clamp(1rem,4vw,1.7rem)]">
        {item.title}
      </p>
      <p
        className={`mt-1 whitespace-pre-line break-keep font-semibold text-[#9f7095] ${
          isMultilineSubtitle
            ? "text-[9.5px] leading-4 sm:text-[13px] sm:leading-5"
            : "text-[10px] leading-4 sm:text-sm sm:leading-5"
        }`}
      >
        {item.subtitle}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen px-2 py-3 sm:px-6 sm:py-8">
      <section className="mx-auto w-full max-w-[430px] rounded-[2.2rem] p-1.5  sm:rounded-[2.6rem]">
        <div className="dream-sky poster-glow relative overflow-hidden rounded-[2rem] px-3.5 pb-12 pt-6 text-center text-[#fff7fb] sm:rounded-[2.3rem] sm:px-6 sm:pb-14 sm:pt-8">
          <div className="cloud-haze pointer-events-none absolute inset-0 opacity-80" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_68%)]" />

          <div className="pointer-events-none absolute right-10 top-14 text-2xl text-[#ffe89d] float-slow sm:right-16 sm:top-18 sm:text-3xl">☾</div>

          {sparkles.map((sparkle) => (
            <span
              key={sparkle.position}
              className={`sparkle pointer-events-none absolute ${sparkle.position} ${sparkle.size} text-[#fff6c6]`}
            >
              ✦
            </span>
          ))}

          <header className="relative z-10 px-1 sm:px-2">
            <p className="font-(family-name:--font-script) text-[clamp(1.85rem,11vw,3.1rem)] leading-[0.95] text-[#fff3d3] drop-shadow-[0_2px_8px_rgba(112,71,146,0.35)]">
              Welcome to the World!
            </p>
            <p className="mt-2.5 font-(family-name:--font-display) text-[clamp(1.5rem,9.2vw,2.6rem)] font-bold uppercase leading-[0.95] tracking-[0.04em] text-[#ffe998] drop-shadow-[0_4px_0_rgba(157,97,174,0.28)] sm:mt-3 sm:tracking-[0.06em]">
              Happy Birthday
            </p>
            <h1 className="mt-2 font-(family-name:--font-display) text-[clamp(2.15rem,13vw,4rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[#ffe7f1] drop-shadow-[0_5px_0_rgba(162,96,176,0.42)]">
              포근이 송재이
            </h1>
            <p className="mt-4 text-[clamp(0.8rem,4vw,1rem)] font-semibold tracking-[0.01em] text-white/95 sm:tracking-[0.03em]">
              <span className="inline-flex max-w-full items-center gap-1 whitespace-nowrap sm:gap-2">
                <span>2026.04.03</span>
                <span className="text-white/60">|</span>
                <span>April 3rd, 2026</span>
              </span>
            </p>
          </header>

          <section className="relative z-10 mt-8">
            <div className="mx-auto mb-5 flex max-w-[280px] flex-wrap items-center justify-center gap-1.5 sm:max-w-[300px] sm:gap-2">
              {familyFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-white/40 bg-white/18 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.01em] text-white shadow-[0_8px_20px_rgba(108,67,142,0.18)] backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[0.75rem] sm:tracking-[0.02em]"
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="relative mx-auto max-w-[340px] px-0.5 pb-2 pt-1 sm:px-1">
              <div className="timeline-thread absolute bottom-5 left-1/2 top-0 w-0.5 -translate-x-1/2 rounded-full sm:w-[3px]" />

              <div className="space-y-3.5 sm:space-y-5">
                {timelineItems.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[minmax(0,1fr)_20px_minmax(0,1fr)] items-center gap-x-1.5 sm:grid-cols-[minmax(0,1fr)_28px_minmax(0,1fr)] sm:gap-x-2"
                  >
                    <div className="flex min-w-0 justify-end">
                      {item.side === "left" ? <TimelineContent item={item} /> : null}
                    </div>

                    <div className="col-start-2 flex items-center justify-center">
                      <div className="relative flex min-h-8 w-full items-center justify-center sm:min-h-10">
                        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#ffc1d9] shadow-[0_0_0_4px_rgba(255,255,255,0.18)] sm:h-3.5 sm:w-3.5" />
                      </div>
                    </div>

                    <div className="flex min-w-0 justify-start">
                      {item.side === "right" ? <TimelineContent item={item} /> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative z-10 mt-10 px-2 sm:px-3">
            <div className="mx-auto max-w-[290px] rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(182,146,213,0.18),rgba(228,189,216,0.12))] px-4 py-6 shadow-[0_18px_40px_rgba(133,90,164,0.16)] backdrop-blur-sm sm:max-w-[320px] sm:px-5 sm:py-7">
              <p className="font-(family-name:--font-script) text-[clamp(1.85rem,10vw,2.7rem)] leading-[0.95] text-[#fff4fb] drop-shadow-[0_2px_6px_rgba(110,67,138,0.5)]">
                Our Little Angel is Here!
              </p>
              <div className="mt-5 space-y-3 text-white/95">
                {blessingLines.map((line) => (
                  <p key={line.lead} className="text-[clamp(0.88rem,4vw,1rem)] font-semibold leading-6 sm:leading-7">
                    <span className="block whitespace-nowrap text-[#fff0f8] drop-shadow-[0_2px_5px_rgba(118,76,146,0.45)]">
                      {line.lead}
                    </span>
                    <span className="mt-0.5 block break-keep text-white/96 drop-shadow-[0_2px_5px_rgba(118,76,146,0.5)]">
                      {line.follow}
                    </span>
                  </p>
                ))}
              </div>

              <div className="mx-auto mt-7 h-px w-40 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.9),transparent)]" />

              <p className="mt-7 font-(family-name:--font-script) text-[clamp(1.75rem,9.5vw,2.5rem)] leading-tight text-[#fff4dd] drop-shadow-[0_2px_6px_rgba(110,67,138,0.48)]">
                We Love You So Much, 포근아!
              </p>
              <div className="mt-4 space-y-2 text-white/92 drop-shadow-[0_2px_5px_rgba(118,76,146,0.45)]">
                <p className="text-[clamp(0.78rem,3.9vw,0.92rem)] leading-6 sm:text-sm sm:leading-7">
                  <span className="inline-flex flex-wrap justify-center gap-x-1.5">
                    <span className="whitespace-nowrap">송영덕 · 김서정 부부의</span>
                    <span className="whitespace-nowrap">가장 사랑스러운 봄</span>
                  </span>
                </p>
                <p className="mx-auto max-w-[15rem] break-keep text-[clamp(0.76rem,3.7vw,0.9rem)] leading-6 whitespace-normal sm:max-w-[18rem] sm:text-sm sm:leading-7">
                  재이의 오늘을 오래도록 축하하는 페이지.
                </p>
              </div>
            </div>
          </section>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-[radial-gradient(circle_at_20%_100%,rgba(255,255,255,0.96),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,239,250,0.96),transparent_34%),radial-gradient(circle_at_78%_100%,rgba(243,244,255,0.98),transparent_34%),radial-gradient(circle_at_12%_100%,rgba(255,255,255,0.92),transparent_23%),radial-gradient(circle_at_34%_100%,rgba(255,241,248,0.95),transparent_21%),radial-gradient(circle_at_63%_100%,rgba(244,246,255,0.94),transparent_21%),radial-gradient(circle_at_88%_100%,rgba(255,244,248,0.95),transparent_24%)] opacity-95" />
        </div>
      </section>
    </main>
  );
}
