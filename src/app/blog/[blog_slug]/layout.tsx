import getPosts from "../data"
import styles from "./layout.module.css"
import { Metadata } from "next"

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export const generateMetadata = async ({
  params,
}: {
  params: {
    blog_slug: string
  }
}): Promise<Metadata> => {
  const post = (await getPosts()).find((p) => p?.slug === params.blog_slug)
  return {
    title: `Keen | ${post?.title}`,
    description: post?.description,
    openGraph: {
      title: `Keen | ${post?.title}`,
      description: post?.description,
      siteName: "Keen",
      locale: "en_US",
      type: "website",
    },
  }
}

async function getData({ blog_slug }: { blog_slug: string }) {
  const posts = await getPosts()
  const postIndex = posts.findIndex((p) => p?.slug === blog_slug)

  if (postIndex === -1) {
    throw new Error(`${blog_slug} not found in posts. Did you forget to rename the file?`)
  }

  const post = posts[postIndex]

  const { ...rest } = post

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    ...rest,
  }
}

export default async function PostLayout({
  children,
  params,
}: {
  children: JSX.Element
  params: {
    blog_slug: string
  }
}) {
  const { previous, next, title, date, lastModified } = await getData(params)

  const lastModifiedDate = lastModified
    ? new Date(lastModified).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : null

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
        {lastModified ? (
          <span className={styles.lastModified}>Last modified {lastModifiedDate}</span>
        ) : null}
        {/* {updatedViews && <FadeIn>{updatedViews} views</FadeIn>} */}
      </div>
      <article>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
    </>
  )
}
