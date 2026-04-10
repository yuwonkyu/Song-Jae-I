import { PhotoCard } from "./components/photo-card";

const timelineItems = [
  {
    id: "arrival-photo",
    side: "left",
    type: "photo",
    src: "/po1.jpg",
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
    src: "/po2.jpg",
    alt: "송재이 두 번째 사진",
    label: "02",
    caption: "웃음이 반짝이는 재이",
    tone: "lilac" as const,
  },
  {
    id: "family-photo",
    side: "left",
    type: "photo",
    src: "/po3.jpg",
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
    subtitle: "Happy Birthday, Jae I",
  },
  {
    id: "angel-photo",
    side: "right",
    type: "photo",
    src: "/po4.jpg",
    alt: "송재이 네 번째 사진",
    label: "04",
    caption: "우리 집에 온 작은 천사",
    tone: "sky" as const,
  },
] as const;

const blessingLines = [
  "포근아, 우리 가족에게 와 줘서 진심으로 고마워.",
  "2026년 4월 3일, 가장 사랑스러운 계절이 시작됐어.",
  "건강하고 행복하게, 너만의 속도로 반짝이며 자라나길 바라.",
];

const familyFacts = [
  "태명 포근이",
  "이름 송재이",
  "딸",
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

export default function Home() {
  return (
    <main className="min-h-screen px-3 py-4 sm:px-6 sm:py-8">
      <section className="mx-auto w-full max-w-[430px] rounded-[2.6rem] border border-white/45 bg-[#201931]/20 p-1.5 shadow-[0_24px_80px_rgba(81,44,116,0.35)]">
        <div className="dream-sky poster-glow relative overflow-hidden rounded-[2.3rem] px-5 pb-12 pt-7 text-center text-[#fff7fb] sm:px-6 sm:pb-14 sm:pt-8">
          <div className="cloud-haze pointer-events-none absolute inset-0 opacity-80" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.42),transparent_68%)]" />

          <div className="pointer-events-none absolute -left-6 top-18 h-28 w-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff8cc_0,#ffd7a9_40%,#ffb693_100%)] opacity-85 blur-[0.5px] float-slow" />
          <div className="pointer-events-none absolute -left-2.5 top-34 h-18 w-14 rounded-full bg-[radial-gradient(circle_at_30%_30%,#edf3ff_0,#bfd7ff_45%,#8eb2ee_100%)] opacity-90 float-delay" />
          <div className="pointer-events-none absolute -right-4 top-12 h-32 w-22 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffe8ff_0,#efbff0_46%,#d7a2e9_100%)] opacity-90 float-delay" />
          <div className="pointer-events-none absolute right-2 top-32 h-20 w-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff6d5_0,#ffe5a1_44%,#ffc989_100%)] opacity-85 float-slow" />
          <div className="pointer-events-none absolute right-16 top-18 text-3xl text-[#ffe89d] float-slow">☾</div>

          {sparkles.map((sparkle) => (
            <span
              key={sparkle.position}
              className={`sparkle pointer-events-none absolute ${sparkle.position} ${sparkle.size} text-[#fff6c6]`}
            >
              ✦
            </span>
          ))}

          <header className="relative z-10 px-2">
            <p className="font-(family-name:--font-script) text-[2.15rem] leading-none text-[#fff3d3] drop-shadow-[0_2px_8px_rgba(112,71,146,0.35)]">
              Welcome to the World!
            </p>
            <p className="mt-3 font-(family-name:--font-display) text-[2rem] font-bold uppercase leading-none tracking-[0.06em] text-[#ffe998] drop-shadow-[0_4px_0_rgba(157,97,174,0.28)]">
              Happy Birthday
            </p>
            <h1 className="mt-2 font-(family-name:--font-display) text-[3.6rem] font-bold leading-[0.95] tracking-[-0.04em] text-[#ffe7f1] drop-shadow-[0_5px_0_rgba(162,96,176,0.42)]">
              포근이 송재이
            </h1>
            <p className="mt-4 text-base font-semibold tracking-[0.03em] text-white/95">
              2026.04.03 <span className="mx-2 text-white/60">|</span> April 3rd, 2026
            </p>
          </header>

          <section className="relative z-10 mt-8">
            <div className="mx-auto mb-5 flex max-w-[300px] flex-wrap items-center justify-center gap-2">
              {familyFacts.map((fact) => (
                <span
                  key={fact}
                  className="rounded-full border border-white/40 bg-white/18 px-3 py-1.5 text-[0.75rem] font-semibold tracking-[0.02em] text-white shadow-[0_8px_20px_rgba(108,67,142,0.18)] backdrop-blur-sm"
                >
                  {fact}
                </span>
              ))}
            </div>

            <div className="relative mx-auto max-w-[340px] px-1 pb-2 pt-1">
              <div className="timeline-thread absolute bottom-5 left-1/2 top-0 w-[3px] -translate-x-1/2 rounded-full" />

              <div className="grid grid-cols-[1fr_28px_1fr] gap-y-5">
                {timelineItems.map((item) => (
                  <div key={item.id} className="contents">
                    <div
                      className={item.side === "left" ? "col-start-1" : "col-start-3"}
                    >
                      {item.type === "photo" ? (
                        <PhotoCard
                          src={item.src}
                          alt={item.alt}
                          label={item.label}
                          caption={item.caption}
                          tone={item.tone}
                        />
                      ) : (
                        <div className="rounded-3xl border border-white/55 bg-[linear-gradient(180deg,rgba(255,250,252,0.95),rgba(250,236,245,0.86))] px-4 py-3 text-[#8b5e82] shadow-[0_16px_34px_rgba(113,64,141,0.18)] backdrop-blur-sm">
                          <p className="text-[1.7rem] font-bold leading-none tracking-[-0.03em]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#9f7095]">
                            {item.subtitle}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="col-start-2 flex items-center justify-center">
                      <div className="relative h-full min-h-10 w-full">
                        <span className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#ffc1d9] shadow-[0_0_0_4px_rgba(255,255,255,0.18)]" />
                      </div>
                    </div>

                    <div className={item.side === "left" ? "col-start-3" : "col-start-1"} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="relative z-10 mt-10 px-3">
            <p className="font-(family-name:--font-script) text-[2.25rem] leading-none text-[#fff0f6] drop-shadow-[0_2px_8px_rgba(112,71,146,0.32)]">
              Our Little Angel is Here!
            </p>
            <div className="mt-5 space-y-2 text-[1.02rem] font-semibold leading-8 text-[#fff7fb]">
              {blessingLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mx-auto mt-7 h-px w-40 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.95),transparent)]" />

            <p className="mt-7 font-(family-name:--font-script) text-[2.15rem] leading-tight text-[#fff1d5] drop-shadow-[0_2px_8px_rgba(112,71,146,0.32)]">
              We Love You So Much, 포근아!
            </p>
            <p className="mt-4 text-sm leading-7 text-white/88">
              송영덕 · 김서정 부부의 가장 사랑스러운 봄,
              <br />
              재이의 오늘을 오래도록 축하하는 페이지.
            </p>
          </section>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-[radial-gradient(circle_at_20%_100%,rgba(255,255,255,0.96),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(255,239,250,0.96),transparent_34%),radial-gradient(circle_at_78%_100%,rgba(243,244,255,0.98),transparent_34%),radial-gradient(circle_at_12%_100%,rgba(255,255,255,0.92),transparent_23%),radial-gradient(circle_at_34%_100%,rgba(255,241,248,0.95),transparent_21%),radial-gradient(circle_at_63%_100%,rgba(244,246,255,0.94),transparent_21%),radial-gradient(circle_at_88%_100%,rgba(255,244,248,0.95),transparent_24%)] opacity-95" />
        </div>
      </section>
    </main>
  );
}
