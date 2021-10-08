import React from "react";

interface DisclaimerProps {
}

export const Disclaimer = (props: DisclaimerProps) => {
  return (
    <div className={"text-primary text-center"}>
      <span className={"text-sm"}>Disclaimer</span>
      <p className={"text-xs"}>The information provided on this site is not a substitute for professional medical
        advice, and is not intended to diagnose, treat, cure or prevent any medical condition.</p>
    </div>
  );
};
