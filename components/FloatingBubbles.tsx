"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const BUBBLE_COUNT = 15;

type ReleasedImage = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  image: string;
};

// Ảnh thật trong bong bóng (ẩn) – thay bằng đường dẫn ảnh của bạn
const BUBBLE_IMAGES: string[] = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
  "/images/img10.jpg",
];

// Hình dáng bong bóng ngộ nghĩnh (border-radius dạng blob)
const BLOB_SHAPES = [
  "60% 40% 50% 60% / 55% 45% 55% 45%",
  "50% 50% 45% 55% / 50% 55% 45% 50%",
  "45% 55% 55% 45% / 50% 50% 50% 50%",
  "55% 45% 50% 50% / 45% 55% 50% 50%",
  "50% 55% 45% 50% / 55% 45% 55% 45%",
  "48% 52% 52% 48% / 52% 48% 52% 48%",
  "52% 48% 48% 52% / 48% 52% 48% 52%",
  "55% 45% 55% 45% / 45% 55% 45% 55%",
  "47% 53% 50% 50% / 53% 47% 53% 47%",
  "53% 47% 47% 53% / 47% 53% 47% 53%",
];

function getRandomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

const BUBBLE_OPACITY = 0.72;

export default function FloatingBubbles() {
  const [mounted, setMounted] = useState(false);
  const [poppingId, setPoppingId] = useState<number | null>(null);
  const [releasedImages, setReleasedImages] = useState<ReleasedImage[]>([]);
  const releasedIdRef = useRef(0);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const bubbles = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: BUBBLE_COUNT }, (_, i) => ({
      id: i,
      left: getRandomBetween(0, 92),
      size: getRandomBetween(44, 128),
      duration: getRandomBetween(14, 24),
      delay: getRandomBetween(0, 6),
      blobShape: BLOB_SHAPES[i % BLOB_SHAPES.length],
      image: BUBBLE_IMAGES[i % BUBBLE_IMAGES.length],
    }));
  }, [mounted]);

  const handleBubbleClick = useCallback(
    (e: React.MouseEvent, id: number, imageSrc: string) => {
      e.stopPropagation();
      const el = e.currentTarget as HTMLElement;
      const computed = getComputedStyle(el).transform;
      el.style.setProperty(
        "--bubble-current",
        computed && computed !== "none" ? computed : "translateY(0)",
      );
      const rect = el.getBoundingClientRect();
      releasedIdRef.current += 1;
      setReleasedImages((prev) => [
        ...prev,
        {
          id: `released-${releasedIdRef.current}`,
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          image: imageSrc,
        },
      ]);
      setPoppingId(id);
    },
    [],
  );

  const handlePopEnd = useCallback(() => {
    setPoppingId(null);
  }, []);

  const handleReleasedImageEnd = useCallback((releasedId: string) => {
    setReleasedImages((prev) => prev.filter((r) => r.id !== releasedId));
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 overflow-hidden"
      aria-hidden
      style={{ pointerEvents: "none" }}
    >
      <style>{`
        @keyframes floatAndPop {
          0% {
            transform: translateY(0) scale(1);
            opacity: ${BUBBLE_OPACITY};
          }
          72% {
            transform: translateY(-105vh) scale(1);
            opacity: ${BUBBLE_OPACITY};
          }
          85% {
            transform: translateY(-112vh) scale(1.1);
            opacity: ${BUBBLE_OPACITY * 0.95};
          }
          92% {
            transform: translateY(-115vh) scale(1.4);
            opacity: ${BUBBLE_OPACITY * 0.4};
          }
          96% {
            transform: translateY(-118vh) scale(1.5);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: ${BUBBLE_OPACITY};
          }
        }
        @keyframes bubbleBurst {
          0% {
            transform: var(--bubble-current) scale(1);
            opacity: ${BUBBLE_OPACITY};
          }
          50% {
            transform: var(--bubble-current) scale(1.25);
            opacity: ${BUBBLE_OPACITY * 0.6};
          }
          100% {
            transform: var(--bubble-current) scale(1.8);
            opacity: 0;
            visibility: hidden;
          }
        }
        .bubble-float {
          animation: floatAndPop var(--duration) ease-in-out var(--delay) infinite;
        }
        .bubble-float.bubble-pop {
          animation: bubbleBurst 0.45s ease-out forwards;
        }
        @keyframes imageFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        .released-image-fade {
          animation: imageFadeOut 3s ease-out forwards;
          pointer-events: none;
        }
      `}</style>
      {/* Ảnh hiện tại vị trí bong bóng vỡ (dùng ảnh từ BUBBLE_IMAGES), fade out 3s */}
      {releasedImages.map((r) => (
        <div
          key={r.id}
          className="released-image-fade fixed overflow-hidden rounded-full border-2 border-white/50 shadow-lg bg-[#fce4ec]"
          style={{
            left: r.left,
            top: r.top,
            width: Math.max(r.width, 40),
            height: Math.max(r.height, 40),
            zIndex: 11,
            minWidth: 40,
            minHeight: 40,
          }}
          onAnimationEnd={() => handleReleasedImageEnd(r.id)}
        >
          <img
            src={r.image}
            alt=""
            className="block h-full w-full object-cover"
            style={{ minWidth: "100%", minHeight: "100%" }}
            onError={(e) => {
              const target = e.currentTarget;
              target.style.display = "none";
              const placeholder = target.nextElementSibling as HTMLElement;
              if (placeholder) placeholder.style.display = "flex";
            }}
          />
          <div
            className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#fce4ec] via-[#f8b4c4] to-[#f06292] text-white"
            style={{ borderRadius: "inherit" }}
          >
            <span className="text-2xl opacity-90">♥</span>
          </div>
        </div>
      ))}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className={`bubble-float absolute bottom-0 will-change-transform cursor-pointer ${poppingId === b.id ? "bubble-pop" : ""}`}
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: b.blobShape,
            boxShadow: `
              inset -4px -4px 12px rgba(255,255,255,0.35),
              inset 6px 6px 14px rgba(255,255,255,0.2),
              0 8px 24px rgba(233, 30, 99, 0.12)
            `,
            border: "2px solid rgba(255,255,255,0.55)",
            overflow: "hidden",
            background:
              "linear-gradient(135deg, rgba(252,228,236,0.85) 0%, rgba(248,187,217,0.85) 50%, rgba(244,143,177,0.85) 100%)",
            ["--duration" as string]: `${b.duration}s`,
            ["--delay" as string]: `${b.delay}s`,
            ["--bubble-current" as string]: "translateY(0)",
            pointerEvents: "auto",
          }}
          onClick={(e) => handleBubbleClick(e, b.id, b.image)}
          onAnimationEnd={(e) => {
            if (e.animationName === "bubbleBurst") handlePopEnd();
          }}
        >
          {/* Nền bong bóng: ảnh trái tim fake (mặc định) */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <svg
              viewBox="0 0 24 24"
              className="h-1/2 w-1/2 shrink-0 text-[#e91e63] drop-shadow-sm"
              fill="currentColor"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          {/* Ảnh thật bị ẩn trong bong bóng, chỉ dùng khi bạn thay bằng ảnh thật */}
          <div className="absolute inset-0 opacity-0" aria-hidden>
            <img
              src={b.image}
              alt=""
              className="h-full w-full object-cover"
              style={{ borderRadius: "inherit" }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            <div
              className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#fce4ec] via-[#f8b4c4] to-[#f06292] text-white"
              style={{ borderRadius: "inherit" }}
              data-placeholder
            >
              <span className="text-2xl opacity-90 drop-shadow-sm">♥</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
