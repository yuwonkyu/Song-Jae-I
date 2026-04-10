export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 py-16 text-stone-50">
      <section className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur sm:p-12">
        <div className="mb-10 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
          Next.js + TypeScript + Tailwind CSS + App Router
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-end">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Song Jae I Starter
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
              기본 셋업이 완료된 Next.js 스타터입니다.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
              App Router, TypeScript, Tailwind CSS, ESLint가 적용되어 있고,
              바로 Vercel에 배포할 수 있는 상태로 맞춰져 있습니다.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-300 px-6 font-medium text-stone-950 transition hover:bg-emerald-200"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel로 배포하기
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 font-medium text-white transition hover:bg-white/10"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next.js 문서 보기
              </a>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
            <p className="mb-4 text-sm font-medium text-stone-300">빠른 시작</p>
            <div className="space-y-3 font-mono text-sm text-stone-200">
              <div className="rounded-2xl bg-white/5 px-4 py-3">npm run dev</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">npm run lint</div>
              <div className="rounded-2xl bg-white/5 px-4 py-3">npm run build</div>
            </div>
            <p className="mt-6 text-sm leading-7 text-stone-400">
              첫 화면은 app/page.tsx에서, 공통 메타데이터는 app/layout.tsx에서 바로 수정하면 됩니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
