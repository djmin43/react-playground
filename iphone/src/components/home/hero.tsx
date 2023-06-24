import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={"flex flex-col items-center py-12 gap-5 text-center"}>
      <p className={"text-4xl font-semibold"}>아이폰 중고가격 알려드려요.</p>
      <p className={"text-lg text-gray-700"}>
        최신 아이폰 중고가 시세를 한번에!
      </p>
      <button
        className={
          "py-2.5 px-5 bg-blue-600 rounded-2xl text-white text-md font-thin"
        }
      >
        시세확인
      </button>
      <Image
        src={"/hero/hero-image.jpg"}
        alt={"iphone"}
        width={675}
        height={342}
        priority
      />
    </div>
  );
};

export default Hero;
