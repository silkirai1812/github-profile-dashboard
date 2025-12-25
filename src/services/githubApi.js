const API_URL = "https://api.github.com/graphql";

export async function fetchGitHubProfile(username) {
  const query = `
    query ($login: String!) {
      user(login: $login) {
        login
        name
        avatarUrl
        bio
        location
        company
        websiteUrl
        followers { totalCount }
        following { totalCount }
        repositories(
          first: 12
          orderBy: { field: STARGAZERS, direction: DESC }
          isFork: false
        ) {
          totalCount
          nodes {
            name
            description
            stargazerCount
            updatedAt
            owner { login }
            primaryLanguage { name color }
            licenseInfo { name }
          }
        }
      }
    }
  `;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query, variables: { login: username } }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  if (!json.data || !json.data.user) {
    throw new Error("User not found");
}
  return json.data.user;
}
