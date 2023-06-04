/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Hero.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { m, LazyMotion, domAnimation } from "framer-motion";
import HeroText from "../Components/HeroText";
import HeroParticles from "../Components/Particles/HeroParticles";
import HeroScroller from "../Components/elements/HeroScroller";

const Hero = () => {
  return (
    <div id="hero" className="w-full flex justify-center overflow-hidden-web relative">
    <LazyMotion features={domAnimation} strict>
      <m.div
        id="hero"
        className="relative w-full flex justify-center items-center h-screen min-h-[800px]"
      >
        <HeroText />
        <HeroParticles />
      </m.div>
      <HeroScroller />
    </LazyMotion>
    </div>
  );
};

export default Hero;
