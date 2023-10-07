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
                fontSize: "45px",
                color: "white",
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
                  height: "649px",
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
                  height: "649px",
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
                  height: "649px",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
          {/* Arb and EV Explaination */}
          <div
            id="portfolio"
            className={styles.portfolioPageContainer}
            style={{ color: "#e4dfd4", marginTop: "50px" }}
          >
            <h1 style={{ fontSize: "45px", color: "white" }}>
              Arbitrage and Expected Value Betting Strategies
            </h1>

            <div
              style={{
                width: "100%",
                height: "80vh",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
                maxWidth: "1800px",
                paddingLeft: "400px",
                paddingRight: "400px",
              }}
            >
              <div
                style={{
                  width: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  textAlign: "center",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>Guarantee Profits</h1>
                <h3>
                  Explore the world of calculated wins with the arbitrage engine
                </h3>
              </div>
              <Image
                src="/Arbopen.jpeg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "649px",
                  borderRadius: 10,
                }}
              />
            </div>
          </div>
          <div
            id="portfolio"
            className={styles.portfolioPageContainer}
            style={{ color: "#e4dfd4" }}
          >
            <div
              style={{
                width: "100%",
                height: "80vh",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                display: "flex",
                maxWidth: "1800px",
                paddingLeft: "400px",
                paddingRight: "400px",
              }}
            >
              <Image
                src="/EVScreenshot.jpeg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "649px",
                  borderRadius: 10,
                }}
              />
              <div
                style={{
                  width: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                  textAlign: "center",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "20px",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>Expect More Value</h1>
                <h3>
                  Make higher probability bets with the Expected Value Bet
                  calculation engine
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
              zIndex: 5,
            }}
          >
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/downloadAppstore.svg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: 10,
                }}
              />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instalogo2.png"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100px",
                  height: "100px",
                  marginRight: "100px",
                  marginLeft: "100px",
                  marginTop: "100px",
                  borderRadius: 100,
                }}
              />
            </a>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/x_logo.webp"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100px",
                  height: "100px",
                  marginTop: "100px",

                  borderRadius: 100,
                }}
              />
            </a>
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
          <p>Email: KeenTechnology1@gmail.com</p>
        </div>
      </div>
    </>
  );
}
