
import { useEffect, useRef, useState } from "react";
import { partners } from "../data/partners";

export function OurPartners() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [autoScrollActive, setAutoScrollActive] = useState(true);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    // Delay auto scroll start by 2 seconds
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        if (!autoScrollActive) return;

        if (container.scrollWidth - container.clientWidth <= scrollAmount) {
          scrollAmount = 0;
        } else {
          scrollAmount += scrollSpeed;
        }

        container.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }, 50);
    }, 100);

    // Pause when user interacts
    const stopScroll = () => {
      setAutoScrollActive(false);
      clearInterval(interval);

      // Resume after 5 sec
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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold text-white">Our Partners</h2>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl mx-auto mt-2 text-sm md:text-base">
          We proudly collaborate with trusted global brands, innovators and industry leaders who inspire and support our mission.
        </p>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="overflow-x-auto pb-6 mt-10 scroll-smooth snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-6 min-w-max items-center justify-center md:justify-start">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-center w-48 h-48 rounded-xl bg-[#0F0F0F] border border-gray-700 shadow-lg flex items-center justify-center hover:scale-105 transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full max-h-24 object-contain opacity-80 hover:opacity-100 transition-all"
                />
              </div>
            ))}

            {/* Optional placeholder tile */}
            {partners.length > 8 && (
              <div className="flex-shrink-0 snap-center w-48 h-48 bg-[#1E1E1E] flex items-center justify-center rounded-xl text-white font-semibold hover:scale-105 transition-all">
                + More Partners Soon 🚀
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
