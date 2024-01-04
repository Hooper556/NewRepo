import getPosts from "./blog/data"

export default async function sitemap() {
  const posts = await getPosts()
  const blogs = posts.map((post) => ({
    url: `https://keenbetting.com/blog/${post.slug}`,
    lastModified: post.lastModified
      ? new Date(post.lastModified).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  }))

  const routes = ["", "/blog"].map((route) => ({
    url: `https://keenbetting.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...blogs]
}
