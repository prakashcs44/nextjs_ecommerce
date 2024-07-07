"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currId, setCurrId] = useState(0);

  useEffect(() => {
    document.getElementById(`${currId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [currId]);

  const handleNext = () => {
    if (currId < images.length - 1) {
      setCurrId(curr => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currId > 0) {
      setCurrId(curr => curr - 1);
    }
  };

  return (
    <div className="space-y-4 w-fit mx-auto mt-10">
      <div className="w-72 h-96 bg-slate-300 relative overflow-x-scroll bg-scroll overflow-y-hidden hide-scrollbar pointer-events-none">
        <div className="absolute flex">
          {images?.map((image, index) => (
            <div className="w-72 h-96" key={index} id={`${index}`}>
              <Image
                src={image}
                alt="product image"
                width={240}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <Button onClick={handlePrev} disabled={currId === 0} className = {`bg-slate-100 text-black border hover:bg-slate-200 ${currId === 0&&"opacity-40"}`}>Prev</Button>
        <Button onClick={handleNext} disabled={currId === images.length - 1} className = {`bg-slate-100 text-black border hover:bg-slate-200 ${currId === images.length - 1&&"opacity-40"}`}>Next</Button>
      </div>
    </div>
  );
};

export default Carousel;
