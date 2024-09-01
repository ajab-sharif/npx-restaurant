"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const data = [
  {
    id: 1,
    title: "always fresh & always crispy, always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.png",
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(
  //     () => setCurrentSlide((pre) => (pre === data.length - 1 ? 0 : pre + 1)),
  //     4000
  //   );
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] gap-4 lg:flex-row bg-fuchsia-50">
      {/* text container */}
      <div className="flex flex-1 items-center justify-center flex-col  text-red-500 font-bold text-center">
        <h1 className=" text-2xl uppercase p-4 md:text-4xl xl:text-5xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-2 px-4"> order now</button>
      </div>
      {/* image container */}
      <div className="w-full flex-1 relative">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Slider;
