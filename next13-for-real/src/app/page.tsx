const fetchDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 100)
  );

export default function Home() {
  return (
    <>
      <header>Header</header>
      <h2>Product Description</h2>
      <p>{description}</p>

      <footer>Footer</footer>
    </>
  );
}
