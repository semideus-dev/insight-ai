import React from "react";
import LightRays from "./components/light-rays";
import Navbar from "../../../components/custom/landing-navbar";
import Hero from "./components/hero";
import { Features } from "./components/features";
import Footer from "./components/footer";

export default function LandingView() {
  return (
    <>
      <section className="flex flex-col items-center pb-16">
        <div className="-z-10 w-full h-full fixed">
          <LightRays
            raysOrigin="top-center"
            raysColor="#8b5cf6"
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
        <Navbar />
        <Hero />
        <Features />
      </section>
      <Footer />
    </>
  );
}
