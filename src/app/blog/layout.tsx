import Outline from "./components/layout-outline"
import ThemeProvider from "./components/theme-provider"
import styles from "./layout.module.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Keen | Blog",
  openGraph: {
    title: "Blog | Keen Betting",
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Outline type="layout" name="Blog">
        <div className={styles.wrapper}>
          <main className={styles.main}>
            <article>{children}</article>
          </main>
        </div>
      </Outline>
    </ThemeProvider>
  )
}
