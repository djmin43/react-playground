async function fetchGraphQL(query: any) {
  const CONTENTFUL_ACCESS_TOKEN =
    process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );

  // Get the response as JSON
  const { data } = await response.json();
  console.log(data);
  return data;
}

export default fetchGraphQL;
