import LightRays from "@/modules/landing/ui/components/light-rays";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div style={{ width: "100%", height: "600px", position: "fixed" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="flex flex-col h-screen items-center justify-center z-10">
        {children}
      </div>
    </main>
  );
}
