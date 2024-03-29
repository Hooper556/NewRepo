import { MDXComponents } from "mdx/types"
import NextImage from "next/image"
// import Link from '../link'
import { MDXNote } from "./mdx-note"
import { MDXImage } from "./mdx-image"
import Info from "../../icons/info"
import { FileTree, File, Folder } from "../../file-tree"
import Home from "../../icons/home"
// import { Tweet } from "react-tweet"
// import Diff from './mdx-diff'
import dynamic from "next/dynamic"
const Diff = dynamic(() => import("./mdx-diff"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        backgroundColor: "var(--light-gray)",
      }}
    />
  ),
})

export const mdxComponents: MDXComponents = {
  // TODO: re-enable once anchor tags are fixed in the app router
  // a: ({ children, ...props }) => {
  //   // check if external
  //   let te = false
  //   if (props.href?.startsWith('http')) {
  //     isExternal = true
  //   }

  //   return (
  //     // @ts-expect-error legacy refs
  //     <Link
  //       {...props}
  //       href={props.href || ''}
  //       target={isExternal ? '_blank' : undefined}
  //       rel={isExternal ? 'noopener noreferrer' : undefined}
  //     >
  //       {children}
  //     </Link>
  //   )
  // },
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLPreElement>) => {
    // TODO: extract title from children
    return <summary>{children as any}</summary>
  },
  img: MDXImage as any,
  Image: NextImage as any,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLDetailsElement> & {
    summary: string
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Note: MDXNote,
  //   icons
  InfoIcon: Info,
  HomeIcon: Home,
  Diff: Diff as any,
  // file tree
  FileTree: FileTree as any,
  File: File as any,
  Folder: Folder as any,

  // Tweet: (props) => (
  //   <div
  //     style={{
  //       display: "flex",
  //       alignItems: "center",
  //       justifyContent: "center",
  //     }}
  //   >
  //     <Tweet {...props} />
  //   </div>
  // ),
}
