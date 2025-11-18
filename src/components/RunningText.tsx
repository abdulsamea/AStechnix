import { useEffect, useRef } from 'react';

interface RunningTextProps {
  text: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

export default function RunningText({ text, speed = 50, direction = 'left' }: RunningTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    const keyframes = `
      @keyframes scroll-${direction} {
        0% {
          transform: translateX(${direction === 'left' ? '0' : 'calc(-100% + 100vw)'});
        }
        100% {
          transform: translateX(${direction === 'left' ? 'calc(-100% + 100vw)' : '0'});
        }
      }

      .running-text-item {
        animation: scroll-${direction} ${speed}s linear infinite;
      }
    `;
    style.textContent = keyframes;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [speed, direction]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div className="flex whitespace-nowrap">
        {[...text, ...text].map((item, idx) => (
          <div
            key={idx}
            className="running-text-item px-8 md:px-16 py-4 text-2xl md:text-4xl lg:text-5xl font-bold text-white inline-block"
          >
            {item}
            <span className="text-[#48cae4] mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
