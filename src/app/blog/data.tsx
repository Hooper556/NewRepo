import matter from "gray-matter"
import path from "path"
import type { Post } from "./types"
import fs from "fs/promises"
import { cache } from "react"
import { join } from "path"

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const postsDirectory = join(process.cwd(), "posts")

  const posts = await fs.readdir(postsDirectory)
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === ".mdx")
      .map(async (file) => {
        const filePath = `${join(process.cwd(), "posts")}/${file}`
        const postContent = await fs.readFile(filePath, "utf8")
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        return { ...data, body: content } as Post
      }) as Promise<Post>[],
  )
})

export async function getPost(blog_slug: string): Promise<Post> {
  const posts = await getPosts()
  return posts.find((post) => post?.slug === blog_slug) as Post
}

export default getPosts
