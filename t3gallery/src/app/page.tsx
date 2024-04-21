import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/ce1dacf1-b158-4dfc-8b05-e27eaf215432-r2h838.jpg",
  "https://utfs.io/f/f3d0deec-31ea-46f6-b17e-3ab06e375fd0-nfpovb.jpg",
  "https://utfs.io/f/cb9c041a-4d76-434b-bd4d-547b9d0b130e-nk6w98.jpg",
  "https://utfs.io/f/25c6b222-3990-4d68-88f7-870716a1b9cc-ckhus1.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
