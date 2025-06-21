"use client";
import React, { useRef,useState,useEffect} from "react";
import CustomPortableText from "../CustomPortableText";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleEffect from '@/components/TitleEffect'

gsap.registerPlugin(ScrollTrigger);

const AxesHome = ({ datas }) => {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set the initial window width
      setWindowWidth(window.innerWidth);

      // Handle resize events and update the windowWidth state
      const handleResize = () => setWindowWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Only runs once on mount (client-side)

  useGSAP(() => {

    if (windowWidth && windowWidth <= 800) {
    const items = gsap.utils.toArray(".item");
  
    items.forEach((section, i) => {
      const circ = section.querySelector(".circ");
      const text = section.querySelector(".gText");
  
      if (!circ || !text) return;
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "45% 50%", // When the top of the section reaches 80% of the viewport height
          end: "65% 30%", // When the bottom of the section reaches 20% of the viewport height
          //markers: true, // Debugging - remove for production
          toggleActions: "play reverse play reverse", // Play on entry, reverse on exit
          scrub: false, // No scrub, not tied to scroll position
        },
      });
  
      // Animate the circ element (circle)
      tl.to(circ, {
        scale: 1,
        duration: 1,
        ease: "power2.out",
      });
  
      // Animate the text opacity
      tl.to(text, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, 0.2);
    });
  }
  }, [windowWidth]);
  
  

  return (
     <div className='flex justify-center flex-col items-center gap-8 w-full p-10 max-[800px]:p-2'>
      <TitleEffect>{datas.title}</TitleEffect>
      <CustomPortableText
        value={datas.text}
         className={"font-rec min-[800px]:w-[90%] text-4xl max-[800px]:text-2xl max-[800px]:pl-1"}
      />

      <div className="flex lg:flex-wrap w-full lg:flex-row flex-col justify-center items-center">

         {datas.axes.map((axe, i) => (
          <div key={i} className="group lg:w-[50%] w-[100%] cursor-pointer mt-8 flex justify-center items-center">
          <div
            key={i}
            className="item zigzag min-h-[350px] h-fit w-[500px] relative rounded flex items-center justify-center"
            >
              <p className="font-rec1 text-white text-4xl absolute ">{axe.title}</p>

            <div className="circ lg:group-hover:scale-100 lg:duration-500 bg-[--color1] absolute w-[98%] h-[98%] rounded flex items-center justify-center scale-0" />

            <div className="absolute gText opacity-0 lg:group-hover:opacity-100 transition-opacity lg:duration-500">
              <CustomPortableText className="p-12 max-[800px]:p-2 text-center font-rec text-xl text-black z-10 transition-opacity" value={axe.text} />
            </div>

          <div className="opacity-0">
              <CustomPortableText className="p-12 max-[800px]:p-2 text-center font-rec text-xl text-black z-10 transition-opacity" value={axe.text} />
            </div>

            

          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxesHome;
