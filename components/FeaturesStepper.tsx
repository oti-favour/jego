"use client";
import { PageFeatures } from "@/types/generated-types";
import React from "react";
import SVG from "react-inlinesvg";
import { Progress } from "./ui/progress";

function FeaturesStepper({ features }: FeaturesStepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!features || features.length === 0) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = prev + 100 / features.length;

        setCurrentIndex(Math.floor(activeStep / (100 / features.length)));
        return next > 100 ? 0 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeStep, features]);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      const firstChild = scrollContainerRef.current
        .firstChild as HTMLElement | null;
      const childWidth = firstChild?.getBoundingClientRect().width || 0;
      const newScrollPosition = currentIndex * childWidth;
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="space-y-8">
      <Progress
        aria-label="Features Progress"
        className="h-1"
        value={activeStep}
      />
      <div
        ref={scrollContainerRef}
        className="flex max-w-full justify-evenly gap-6 overflow-x-scroll scrollbar-hide"
      >
        {features?.map((feature, index) => (
          <div
            key={index}
            className={`min-w-56 space-y-4 ${
              currentIndex === index ? "text-white" : "text-gray-500"
            }`}
          >
            <div className="max-w-fit rounded-xl bg-white/10 p-2">
              <SVG src={feature.icon.svg} width={40} height={40} className="" />
            </div>
            <p>{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface FeaturesStepperProps {
  features: PageFeatures[];
}

export default FeaturesStepper;
