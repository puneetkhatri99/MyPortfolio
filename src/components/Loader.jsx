import { useEffect, useState } from "react";

function Loader({ onComplete }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 1000),
      window.setTimeout(() => setStage(2), 2000),
      window.setTimeout(() => setStage(3), 3000),
      window.setTimeout(() => {
        onComplete?.();
      }, 3000),
    ];

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [onComplete]);

  const progress = stage === 0 ? 0 : stage === 1 ? 60 : 100;
  const showProgress = stage > 0;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-offblack text-white"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <div className="flex items-center gap-4">
          <p className="font-display text-[clamp(5rem,14vw,9rem)] leading-none tracking-tight text-white">
            PS
          </p>
          <span className="mt-4 h-7 w-7 rounded-full bg-electric" aria-hidden="true" />
        </div>

        <div className="mt-8 max-w-xl font-display text-2xl leading-tight text-white/60 sm:text-3xl">
          <p
            className={`transition-all duration-500 ease-out ${
              stage >= 0 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Not another portfolio.
          </p>
          <p
            className={`transition-all duration-500 ease-out ${
              stage >= 1 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Actually ships.
          </p>
          <p
            className={`transition-all duration-500 ease-out ${
              stage >= 2 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Let&apos;s go.
          </p>
        </div>

        <div className="mt-16 w-full max-w-2xl">
          <div className="h-[2px] w-full overflow-hidden bg-white/10">
            <div
              className="h-full bg-electric transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p
            className={`mt-8 font-mono text-sm tracking-[0.35em] text-white/30 transition-opacity duration-300 ${
              showProgress ? "opacity-100" : "opacity-0"
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
