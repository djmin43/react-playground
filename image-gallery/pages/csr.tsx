import { createClient } from "@supabase/supabase-js";
import BlurImage, { ImageType } from "../components/BlurImage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

interface GalleryProps {
  images: ImageType[];
}

export default function Gallery() {
  const { data: images, isLoading } = useImagesQuery();

  if (isLoading) return <div>is loading...</div>;

  if (images)
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid gird-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-10 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    );
}

function useImagesQuery() {
  const { data, isLoading } = useQuery(["images"], getImages, {
    initialData: undefined,
  });
  return {
    data,
    isLoading,
  };
}

async function getImages() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
      "https://fnxzclgzszpelepeayvj.supabase.co",
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZueHpjbGd6c3pwZWxlcGVheXZqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1ODkyMDg0OSwiZXhwIjoxOTc0NDk2ODQ5fQ.TYy2raSLBBTWIF6joyPSoV16wZH_7d9uqCKC0oiTXG4"
  );

  const { data } = await supabaseAdmin
    .from("sample-data")
    .select("*")
    .order("id");

  return data;
}
