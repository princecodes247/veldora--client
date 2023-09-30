import { Ref, useEffect, useState } from "react";

const usePlanCardEffect = ({
  plansSection,
  mainCards,
  overlayCards,
}: {
  mainCards: (HTMLDivElement | null)[];
  overlayCards: (HTMLDivElement | null)[];
  // mainCards: Ref<HTMLDivElement>[];
  plansSection: HTMLElement | null;
}) => {
  const [overlayStyles, setOverlayStyles] = useState({
    opacity: 0,
    x: "0px",
    y: "0px",
  });

  const applyOverlayMask = (e: React.MouseEvent) => {
    const rect = plansSection?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left - 100;
    const offsetY = e.clientY - rect.top - 100;
    const x = `${offsetX}px`;
    const y = `${offsetY}px`;
    setOverlayStyles({ opacity: 1, x, y });
  };

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry, index) => {
        const cardIndex = Array.from(mainCards).indexOf(
          entry.target as HTMLDivElement,
        );
        const width = entry.borderBoxSize[0].inlineSize;
        const height = entry.borderBoxSize[0].blockSize;
        if (index >= 0 && overlayCards[index]) {
          overlayCards[index].style.width = `${width}px`;
          overlayCards[index].style.height = `${height}px`;
        }
      });
    });

    mainCards.forEach((cardEl) => {
      if (!cardEl) return;
      observer.observe(cardEl);
    });

    if (!plansSection) {
      return;
    }

    plansSection.addEventListener("pointermove", applyOverlayMask);

    // Cleanup by removing event listener when the component unmounts
    return () => {
      plansSection.removeEventListener("pointermove", applyOverlayMask);
    };
  }, [plansSection, mainCards, overlayCards]);

  const createOverlayCta = (ctaText) => {
    const button = document.createElement("button");
    button.classList.add("cta");
    button.ariaHidden = "true";
    button.value = ctaText;

    return button;
  };

  return overlayStyles;
};

export default usePlanCardEffect;
