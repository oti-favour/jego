"use client";
import { Page } from "@/types/generated-types";
import React, { useRef } from "react";
import SVG from "react-inlinesvg";
import { Progress } from "./ui/progress";

function FeaturesStepper({ features }: FeaturesStepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  let currentIndex = useRef(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = prev + 100 / features.length;

        currentIndex.current = Math.floor(activeStep / (100 / features.length));
        return next > 100 ? 0 : next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [activeStep, features.length]);

  return (
    <div className="space-y-8">
      <Progress className="h-1" value={activeStep} />
      <div className="flex gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`space-y-4 ${
              currentIndex.current === index ? "text-white" : "text-gray-500"
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
  features: Page["pageFeatures"];
}

export default FeaturesStepper;
