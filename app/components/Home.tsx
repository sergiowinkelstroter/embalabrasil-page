"use client";

import Image from "next/image";
import Banner from "/public/banner.png";
import Banner2 from "/public/banner_2.png";
import Banner3 from "/public/banner_3.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export const Home = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div id="home">
      <div ref={sliderRef} className="keen-slider">
        <Image
          className="keen-slider__slide"
          src={Banner}
          alt=""
          width={1800}
          height={500}
        />
        <Image
          className="keen-slider__slide"
          src={Banner2}
          alt=""
          width={1800}
          height={500}
        />
        <Image
          className="keen-slider__slide"
          src={Banner3}
          alt=""
          width={1800}
          height={500}
        />
      </div>
    </div>
  );
};
