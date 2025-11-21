
import { useEffect, useRef, useState } from "react";
import { unboxingItems } from "../data/unboxing";

export function UnboxingGallery() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [autoScrollActive, setAutoScrollActive] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    // 🕒 Delay auto-scroll start by 2 seconds
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (!autoScrollActive) return;

        if (container.scrollWidth - container.clientWidth <= scrollAmount) {
          scrollAmount = 0;
        } else {
          scrollAmount += scrollSpeed;
        }

        container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }, 50);
    }, 100);

    // 🛑 Pause auto-scroll when user interacts
    const stopScroll = () => {
      setAutoScrollActive(false);
      clearInterval(interval);

      // Restart auto scroll after 5 seconds
      timeout = setTimeout(() => {
        setAutoScrollActive(true);
      }, 5000);
    };

    container.addEventListener("wheel", stopScroll);
    container.addEventListener("touchstart", stopScroll);
    container.addEventListener("mousedown", stopScroll);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);

      container.removeEventListener("wheel", stopScroll);
      container.removeEventListener("touchstart", stopScroll);
      container.removeEventListener("mousedown", stopScroll);
    };
  }, [autoScrollActive]);

  return (
    <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Unboxing Highlights</h2>
        <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl mx-auto">
          We explore the latest gadget packaging, first impressions and premium unboxing experiences.
        </p>

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-6 mt-10 scroll-smooth snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex space-x-6 min-w-min justify-center md:justify-start">
            {unboxingItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 snap-center w-80 group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1), 0 0 40px rgba(255, 255, 255, 0.05)"
                }}
              >
                {/* Animated glow border effect */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2))",
                    padding: "2px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />

                <div className="relative h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  
                  {/* Subtle ambient glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 100%, rgba(255,255,255,0.3), transparent 70%)"
                    }}
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-bold text-white text-xl mb-1">{item.title}</h3>
                    <p className="text-gray-300 text-sm">Exclusive first look • Unboxing 💥</p>
                  </div>
                </div>
              </div>
            ))}

            {unboxingItems.length > 5 && (
              <div 
                className="flex-shrink-0 snap-center w-80 h-64 flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white font-semibold text-lg rounded-xl hover:scale-105 transition-all"
                style={{
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                }}
              >
                + More Unboxings Coming Soon 📦✨
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}