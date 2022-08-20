async function fetchGraphQL() {
  const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `bearer ${CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );
  console.log(response);

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
