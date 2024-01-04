import getPosts, { getPost } from "../data"
import { PostBody } from "../components/mdx/post-body"
import { notFound } from "next/navigation"
import type { Post } from "../types"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: Post) => ({ slug: post.slug }))
}

export default async function PostPage({
  params,
}: {
  params: {
    blog_slug: string
  }
}) {
  const post = await getPost(params.blog_slug)
  if (!post) return notFound()
  return <PostBody>{post?.body}</PostBody>
}
