import Image from "next/image";
import { featuredProducts } from "../data";

function Featured() {
  return (
    <div className="w-screen overflow-x-scroll">
      {/* wrapper */}
      <div className="w-max flex">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="md:w-[50vw] lg:w-[33vw] w-screen h-[65vh] md:h-[75vh] lg:h-[90vh] flex flex-col items-center justify-around p-4 lg:p-8 hover:bg-slate-100 transition-all duration-300"
          >
            {/* image container */}
            <div className="relative w-full flex-1">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain hover:rotate-[60deg] transition-all duration-300"
              />
            </div>
            {/* text container */}
            <div className="flex-1 flex flex-col gap-3 text-center justify-center ">
              <h1 className="text-lg uppercase font-bold">{item.title}</h1>
              <p className="capitalize">{item.desc}</p>
              <span className="text-lg font-bold">{item.price}</span>
              <button className=" bg-red-500 text-white p-1 rounded-md">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
