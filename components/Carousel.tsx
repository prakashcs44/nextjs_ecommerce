"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currIndex, setcurrIndex] = useState(0);

  

  const handleNext = () => {
    if (currIndex < images.length - 1) {
      setcurrIndex(curr => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex > 0) {
      setcurrIndex(curr => curr - 1);
    }
  };

  return (
    <div className="space-y-4 w-full aspect-[0.8]">
      <div className="w-full h-full bg-slate-300 relative overflow-hidden">
        <div className="absolute flex w-full h-full">
          {images?.map((image) => (
            <div className={`w-full h-full flex-grow-0 flex-shrink-0 -translate-x-[${100*currIndex}%] transition-transform duration-200`} key={image} >
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
        <Button onClick={handlePrev} disabled={currIndex === 0} className = {`bg-slate-100 text-black border hover:bg-slate-200 ${currIndex === 0&&"opacity-40"}`}>Prev</Button>
        <Button onClick={handleNext} disabled={currIndex === images.length - 1} className = {`bg-slate-100 text-black border hover:bg-slate-200 ${currIndex === images.length - 1&&"opacity-40"}`}>Next</Button>
      </div>
    </div>
  );
};

export default Carousel;
