"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".toplayer", {
      scrollTrigger: {
        trigger: ".toplayer",
        start: "top top",
        scrub: 1,
        markers: true,
      },
      rotation: -12,
      transformOrigin: "50% 50%",
      clipPath: "inset(50%)",
      onUpdate: () => {
        gsap.set(".toplayertext", {
          rotation: -gsap.getProperty(".toplayer", "rotation"),
        });
      },
    });
  }, []);

  return (
    <div className="w-screen h-[500vh]">
      <div className="w-full min-h-screen">
        <div className="relative min-h-screen w-full h-[200vh]">
          <div className="h-screen min-h-screen sticky top-0 left-0">
            {/* TOP LAYER */}
            <div className="z-[2] w-full min-h-screen h-screen relative clip-path-inset-0 toplayer bg-red-800">
              <div className="absolute w-full top-0 left-0 h-screen flex flex-col justify-center items-center z-[3] text-white">
                <div className="w-full h-screen absolute topcalc left-[50%] transform -translate-y-[50%] -translate-x-[50%] flex justify-center items-center">
                  <div
                    className="font-sans text-[60px] md:text-[136px] tracking-[-6px] font-[400] leading-[60px] md:leading-[106px] toplayertext"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, -100px)",
                      opacity: "1",
                    }}
                  >
                    Payments, for the <br /> ones with taste
                  </div>
                </div>
              </div>
            </div>
            {/* BOTTOM LAYER */}
            <div className="absolute w-full top-0 left-0 h-screen flex flex-col justify-center items-center z-[1] text-black bg-blue-500">
              <div className="w-full h-screen absolute topcalc left-[50%] transform -translate-y-[50%] -translate-x-[50%] flex justify-center items-center">
                <div
                  className="font-sans text-[60px] md:text-[136px] tracking-[-6px] font-[400] leading-[60px] md:leading-[106px]"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, -100px)",
                    opacity: "1",
                  }}
                >
                  Payments, for the <br /> ones with taste
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans text-[60px] md:text-[136px] tracking-[-6px] font-[400] leading-[60px] md:leading-[106px] text-black flex justify-center items-center">
          This is the next section
        </div>
      </div>
    </div>
  );
}
