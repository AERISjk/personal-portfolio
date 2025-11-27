"use client";
import MarqueeSection from "./ImageScroll";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "./ui/scroll-based-velocity";
export default function ScrollBasedVelocitySection() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden text-white p-1">
      <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-6xl md:leading-[5rem]">
        <div
          className="font-extrabold uppercase 
             text-white leading-none text-[13vw] md:text-[5vw]
             whitespace-nowrap select-none">
          <ScrollVelocityRow baseVelocity={10} direction={1}>
            Designing tomorrow’s interfaces today. ➺
          </ScrollVelocityRow>
        </div>
        <div className="">
          <MarqueeSection />
        </div>

        <ScrollVelocityRow
          baseVelocity={10}
          direction={-1}
          className="font-extrabold uppercase 
             text-white leading-none text-[13vw] md:text-[5vw]
             whitespace-nowrap select-none">
          Frontend Developer ➺ UX/UI Designer ➺ Web Designer ➺
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/2"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/2 "></div>
    </div>
  );
}
