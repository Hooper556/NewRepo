import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import Image from "next/image"
import KeenLogo from "../../public/KeenIcon.png"
import {
  TWITTER_URL,
  INSTAGRAM_URL,
  GOOGLE_PLAY_URL,
  APPLE_APP_STORE_URL,
  EMAIL,
} from "./constants"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keen | Research Bet Profit",
  description:
    "Leveraging 'Mathematical Advantage' to Generate Massive Growth in Sports Betting Profits.",
  openGraph: {
    title: "Download Keen, unlock smart betting potential - master arbitrage for maximum wins",
    description:
      "Leveraging 'Mathematical Advantage' to Generate Massive Growth in Sports Betting Profits",
    url: "https://www.keenbetting.com",
    siteName: "Keenbetting",
    images: [
      {
        url: "https://keenbetting.com/keen-unfurl.png",
        width: 1875,
        height: 960,
        alt: "Keen betting mathematcial advantage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: "Keenbetting",
  applicationName: "Keenbetting",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Sports Betting",
    "Bet Syncing",
    "Performance Analytics",
    "Betting Habits",
    "Sportsbooks",
    "Arbitrage Betting",
    "Line Shopping",
    "Betting Insights",
    "Betting Opportunities",
    "Bet Smarter",
    "Betting Tool",
    "Community Locks",
    "Sports Betting App",
    "Value Betting",
    "Betting Education",
    "Sports Wagering",
    "Betting Analysis",
    "Odds Comparison",
    "Winning Strategies",
    "Betting Guides",
    "Profitable Betting",
    "Risk Management",
    "Betting Expertise",
  ],

  authors: [{ name: "Keen Team" }, { name: "Bettors", url: "https://www.keenbetting.com" }],
  creator: "Keen Development Team",
  publisher: "Keen LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const columns = [
    {
      title: "Social",
      links: [
        { href: TWITTER_URL, label: "Twitter" },
        { href: INSTAGRAM_URL, label: "Instagram" },
        // { href: "", label: "TikTok" },
      ],
    },
    {
      title: "Download",
      links: [
        {
          href: APPLE_APP_STORE_URL,
          label: "App Store",
        },
        { href: GOOGLE_PLAY_URL, label: "Google Play" },
      ],
    },
    {
      title: "Other",
      links: [
        { href: `mailto:${EMAIL}`, label: "Contact Us" },
        // {
        //   href: "",
        //   label: "Terms of Service",
        // },
        // {
        //   href: "",
        //   label: "Privacy Policy",
        // },
        {
          href: "/delete-account",
          label: "Delete Account",
        },
      ],
    },
  ]

  const renderLinkColumn = (
    {
      title,
      links,
    }: {
      title: string
      links: { href: string; label: string }[]
    },
    index: number,
  ) => {
    const renderLink = ({ href, label }: { href: string; label: string }, index: number) => (
      <a
        key={index}
        href={href}
        target="_blank"
        className="text-gray-100 font-light hover:text-gray-200"
      >
        {label}
      </a>
    )

    return (
      <div
        key={index}
        className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0 flex flex-col gap-2"
      >
        <p className="font-semibold mb-2">{title}</p>
        {links.map(renderLink)}
      </div>
    )
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#3FA0EF] p-4">
          <div className="flex items-center justify-between max-w-screen-lg mx-auto px-2 md:px-4">
            <Link href="/" className="flex flex-row items-center gap-4">
              <Image
                src={KeenLogo}
                alt="Keen Betting Logo"
                width={40}
                height={40}
                className="rounded-[10px]"
              />
              <div className="text-white font-bold text-3xl hidden sm:block">Keen betting</div>
            </Link>
            <nav className="flex flex-row">
              <Link href="/blog" className="text-white font-semibold px-4 hover:text-gray-200">
                Blog
              </Link>
              <nav className="hidden sm:block">
                <Link
                  href={APPLE_APP_STORE_URL}
                  target="blank_"
                  className="text-white font-semibold px-4 hover:text-gray-200"
                >
                  App Store
                </Link>
                <Link
                  href={GOOGLE_PLAY_URL}
                  target="blank_"
                  className="text-white font-semibold px-4 hover:text-gray-200"
                >
                  Google Play
                </Link>
              </nav>
            </nav>
          </div>
        </header>
        {children}
        <div className="bg-gray-900 min-h-[50vh] text-white py-12 flex flex-col items-between justify-between">
          <div className="container mx-auto flex flex-wrap justify-between pl-8">
            <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-4 sm:mb-0">
              <Image
                src={KeenLogo}
                alt="Keen Betting Logo"
                width={40}
                height={40}
                className="rounded-[10px]"
              />
            </div>
            {columns.map(renderLinkColumn)}
          </div>
          <p className="text-center font-thin text-sm mt-8">
            © 2023 Keen LLC. All Rights Reserved
          </p>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
