import React, { useRef } from "react";
import usePlanCardEffect from "@/hooks/usePlanCardEffect";
import { pricingPlans } from "@/constants";
import { PricingPlanCard } from "@/components/PricingPlanCard";

export function PricingSection() {
  const overlayRef = useRef<HTMLElement | null>(null);
  const planCardsRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const planCardOverlaysRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
  ];
  const planCardsRefsOverlayStyles = usePlanCardEffect({
    mainCards: planCardsRefs?.map((ref) => ref?.current),
    overlayCards: planCardOverlaysRefs?.map((ref) => ref?.current),
    plansSection: overlayRef?.current,
  });

  return (
    <section ref={overlayRef} className="relative p-6 py-14 md:p-24">
      <h2 className="text-2xl font-semibold md:text-4xl">Pricing</h2>
      <div className="relative ">
        <div className="flex flex-wrap gap-6 p-0 py-8">
          {React.Children.toArray(
            pricingPlans.map((pricing, index) => (
              <PricingPlanCard data={pricing} ref={planCardsRefs[index]} />
            )),
          )}
        </div>

        <div
          className="overlay flex flex-wrap gap-6 p-0 py-8"
          style={{
            opacity: planCardsRefsOverlayStyles.opacity,
            WebkitMask: `radial-gradient(
                  25rem 25rem at ${planCardsRefsOverlayStyles.x} ${planCardsRefsOverlayStyles.y},
                  #000 1%,
                  transparent 50%
                )`,
            mask: `radial-gradient(
                  25rem 25rem at ${planCardsRefsOverlayStyles.x} ${planCardsRefsOverlayStyles.y},
                  #000 1%,
                  transparent 50%
                )`,
          }}
          data-x={planCardsRefsOverlayStyles.x}
          data-y={planCardsRefsOverlayStyles.y}
        >
          <div
            ref={planCardOverlaysRefs[0]}
            className="cards__card pricing-card"
          ></div>
          <div
            ref={planCardOverlaysRefs[1]}
            className="cards__card pricing-card"
          ></div>
          <div
            ref={planCardOverlaysRefs[2]}
            className="cards__card pricing-card"
          ></div>
        </div>
      </div>
    </section>
  );
}
