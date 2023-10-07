import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./topNav";
import ReactPlayer from "react-player";

export default function Desktop() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Keen Betting</title>
          <meta name="description" content="Premium Sports Betting Tool" />
          <link rel="icon" href="/KeenIcon.png" />
        </Head>

        <Header />
        <main className={styles.main}>
          {/* Home Page */}
          <div id="home" className={styles.pageContainer}>
            <div className={styles.opacityGrid}>
              <p className={styles.description} style={{ color: "white" }}>
                Join The Betting Revolution
              </p>
              <div className={styles.header}>
                <div
                  className={styles.headerWrapper}
                  style={{ color: "white" }}
                >
                  <h1>
                    Leveraging &apos;Mathematical Advantage&apos; to Generate
                    Massive Growth in Sports Betting Profits
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div
            id="skills"
            className={styles.skillsPageContainer}
            style={{ color: "#e4dfd4" }}
          >
            <h1
              style={{
                fontSize: "50px",
              }}
            >
              Analyze Differing Odds Between Sportsbooks
            </h1>
            <div>
              <Image
                src="/CompareScreenshot.jpeg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "600px",
                  borderRadius: 10,
                }}
              />
              <Image
                src="/NewHome.jpeg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "600px",
                  borderRadius: 10,
                  marginRight: "100px",
                  marginLeft: "100px",
                  marginBottom: "100px",
                }}
              />
              <Image
                src="/OddsChangeScreenshot.jpeg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "600px",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
          {/* Arb and EV Explaination */}
          <div
            id="portfolio"
            className={styles.portfolioPageContainer}
            style={{ color: "#e4dfd4" }}
          >
            <h1 style={{ fontSize: "50px" }}>
              Arbitage and Expected Value Betting Strategies
            </h1>
          </div>
        </main>

        <div
          id="contact"
          className={styles.contact}
          style={{ color: "#e4dfd4" }}
        >
          <h2 style={{ textDecoration: "underline", fontSize: "50px" }}>
            Contact:
          </h2>
          <p>Email: Wilson.3371@buckeyemail.osu.edu || Cell: 330-398-4596</p>
        </div>
      </div>
    </>
  );
}
