import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={"flex flex-col items-center p-4 gap-5"}>
      <p className={"text-4xl font-semibold"}>중고가 한가득</p>
      <Image
        src={"/hero/hero-image.jpg"}
        alt={"iphone"}
        width={675}
        height={342}
      />
    </div>
  );
};

export default Hero;
