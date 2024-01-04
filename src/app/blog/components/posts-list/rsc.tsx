import getPosts from "../../data"
import PostsList from "."

const compareByDate = (a: any, b: any) => {
  const dateA = new Date(a.date).getTime()
  const dateB = new Date(b.date).getTime()

  return dateB - dateA
}

export async function PostListRSC({ paginate }: { paginate?: boolean }) {
  const posts = await getPosts()
  posts.sort(compareByDate)
  if (!posts) return <></>
  return <PostsList posts={posts} paginate={paginate} />
}
