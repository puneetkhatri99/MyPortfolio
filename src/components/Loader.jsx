import { useEffect, useState } from "react";

const EXIT_DURATION_MS = 800;

function Loader({ onComplete }) {
  const [stage, setStage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 1000),
      window.setTimeout(() => setStage(2), 2000),
      window.setTimeout(() => setStage(3), 3000),
      window.setTimeout(() => setStage(4), 4000),
      window.setTimeout(() => setIsExiting(true), 4200),
      window.setTimeout(() => {
        onComplete?.();
      }, 4200 + EXIT_DURATION_MS),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [onComplete]);

  const progress =
    stage === 0 ? 0 : stage === 1 ? 30 : stage === 2 ? 80 : 100;
  const showProgress = stage > 0;
  const panelTransition =
    "transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden text-white"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-offblack ${panelTransition} ${
          isExiting ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-offblack ${panelTransition} ${
          isExiting ? "translate-y-full" : "translate-y-0"
        }`}
      />

      <div
        className={`relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center transition-all duration-500 ease-out ${
          isExiting ? "scale-95 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
        }`}
      >
        {/* Logo */}
        <div className="relative flex items-center gap-4 animate-loaderEntrance">
          <div className="absolute inset-0 -z-10 scale-125 rounded-full bg-white/5 blur-3xl" />

          <p className="font-display text-[clamp(5rem,14vw,9rem)] leading-none tracking-tight text-white drop-shadow-[0_0_45px_rgba(255,255,255,0.2)] animate-loaderLogo">
            PS
          </p>

          <span
            className="relative mt-4 h-7 w-7 rounded-full bg-electric shadow-[0_0_28px_rgba(0,255,180,0.8)] animate-loaderDot"
            aria-hidden="true"
          >
            <span className="absolute inset-0 rounded-full bg-electric animate-loaderPing" />
          </span>
        </div>

        {/* Copy */}
        <div className="mt-8 max-w-xl font-display text-2xl leading-tight text-white/60 sm:text-3xl">
          {[
            "Not another portfolio.",
            "Actually ships.",
            "Let's go.",
          ].map((text, index) => (
            <p
              key={text}
              className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                stage >= index
                  ? "translate-y-0 scale-100 opacity-100 blur-0"
                  : "translate-y-4 scale-[0.98] opacity-0 blur-sm"
              }`}
              style={{
                transitionDelay: `${index * 90}ms`,
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Progress */}
        <div className="mt-16 w-full max-w-2xl animate-loaderRise">
          <div className="relative h-[2px] w-full overflow-hidden rounded-full bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            <div
              className="relative h-full overflow-hidden rounded-full bg-electric transition-[width] duration-500 ease-out shadow-[0_0_22px_rgba(0,255,180,0.9)]"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 animate-loaderShimmer bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.75),transparent)]" />
            </div>
          </div>

          <p
            className={`mt-8 font-mono text-sm tracking-[0.35em] text-white/30 transition-all duration-500 ${
              showProgress
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
