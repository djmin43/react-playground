import React, { useState } from "react";
import Image from "next/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type ImageType = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

function BlurImage({ image }: { image: ImageType }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={image.imageSrc}
          alt=""
          layout="fill"
          objectFit="cover"
          className={classNames(
            "group-hover:opacity-75 duration-700 ease-in-out",
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Jay Min</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@djmin43</p>
    </a>
  );
}

export default BlurImage;
