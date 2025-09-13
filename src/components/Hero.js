import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0x0,
          skyColor: 0x0,
          cloudColor: 0x0,
          cloudShadowColor: 0xffffff,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          sunlightColor: 0xffffff,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="container min-vh-100 min-vw-100 main-black vanta-background"
    >
      <div className="container fade-in">
        <div className="row text-sm-left">
          <h1 className="t-main">FARRAH PEPINO</h1>
          <p className="p-main">
            I build softwares. Code and design cut to essentials.
          </p>
          <button className="b-main b-main-hover">
            <a href="#projects">FEATURED PROJECTS</a>
          </button>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/farrah-pepino/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="b">LINKEDIN</button>
            </a>
            <a
              href="https://github.com/farrahpepino"
              target="_blank"
              rel="noreferrer"
            >
              <button className="b">GITHUB</button>
            </a>
            <a href="mailto:pepinoalyssa@gmail.com">
              <button className="b">EMAIL</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
