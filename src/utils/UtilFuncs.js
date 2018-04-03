export const extractUserData = data => {
  return {
    image: data.avatar_url,
    name: data.name,
    location: data.location,
    followers: data.followers,
    following: data.following
  }
}

export const extractRepoData = repos => {
  return repos.map(repo => ({
    name: repo.name,
    url: repo.html_url,
    stars: repo.stargazers_count
  }))
}
