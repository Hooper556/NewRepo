import "../styles/globals.css"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  function renderHead() {
    return (
      <Head>
        <title>
          {"Keen Betting: Unlock Smart Betting Potential - Master Arbitrage for Maximum Wins"}
        </title>
        <meta
          property="og:title"
          content="Keen Betting: Unlock Smart Betting Potential - Master Arbitrage for Maximum Wins"
          key="og-title"
        />
        <meta
          property="og:description"
          content="Leveraging 'Mathematical Advantage' to Generate Massive Growth in Sports Betting Profits"
          key="og-description"
        />
        <meta
          property="twitter:description"
          content="Leveraging 'Mathematical Advantage' to Generate Massive Growth in Sports Betting Profits"
          key="twitter-description"
        />
        <meta
          name="description"
          content="Leveraging 'Mathematical Advantage' to Generate Massive Growth in Sports Betting Profits"
        />
        <meta property="og:image" content="https://keenbetting.com/background3.jpg" key="image" />
        <meta property="og:url" content="https://keenbetting.com" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@KeenBetting" />
      </Head>
    )
  }

  return (
    <>
      {renderHead()}
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp
