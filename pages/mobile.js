import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Mobile.module.css";
import MobileHeader from "./topNavMobile";
import ReactPlayer from "react-player";

export default function Mobile(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Jonah Wilsons Portfolio</title>
          <meta name="description" content="Jonahs portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <MobileHeader />
        <main className={styles.main}>
          {/* Home Page */}
          <div id="home" className={styles.pageContainer}>
            <p className={styles.description} style={{ color: "white" }}>
              Join The Betting Revolution
            </p>
            <div className={styles.header}>
              <div className={styles.headerWrapper} style={{ color: "white" }}>
                <h1>
                  Leveraging &apos;Mathematical Advantage&apos; to Generate
                  Massive Growth in Sports Betting Profits
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
              zIndex: 5,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://apps.apple.com/us/app/keen-betting/id6451397700"
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
                  width: "150px",
                  height: "150px",

                  borderRadius: 10,
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/keenbetting/"
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
                  width: "60px",
                  height: "60px",
                  marginRight: "30px",
                  marginLeft: "30px",
                  borderRadius: 100,
                }}
              />
            </a>
            <a
              href="https://twitter.com/KeenBetting"
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
                  width: "60px",
                  height: "60px",

                  borderRadius: 100,
                }}
              />
            </a>
          </div>
          {/* Mobile App */}
          <div
            id="skills"
            className={styles.pageContainerTwo}
            style={{ color: "#e4dfd4" }}
          >
            <h1
              style={{
                fontSize: "20px",
                color: "white",
                textAlign: "center",
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
            </div>
          </div>
          {/* Arb and EV Explaination */}
          <div
            id="portfolio"
            className={styles.pageContainerTwo}
            style={{ color: "#e4dfd4", marginTop: "50px" }}
          >
            <h1
              style={{ fontSize: "20px", color: "white", textAlign: "center" }}
            >
              Arbitrage and Expected Value Betting Strategies
            </h1>

            <div
              style={{
                width: "100%",
                height: "80vh",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "column",
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
              ></div>
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
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-between",
              zIndex: 5,
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://apps.apple.com/us/app/keen-betting/id6451397700"
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
                  width: "150px",
                  height: "150px",
                  marginTop: "100px",

                  borderRadius: 10,
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/keenbetting/"
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
                  width: "60px",
                  height: "60px",
                  marginRight: "30px",
                  marginLeft: "30px",
                  marginTop: "100px",
                  borderRadius: 100,
                }}
              />
            </a>
            <a
              href="https://twitter.com/KeenBetting"
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
                  width: "60px",
                  height: "60px",
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
          <h2 style={{ textDecoration: "underline" }}>Contact:</h2>
          <p>Email: KeenTechnology1@gmail.com</p>
        </div>
      </div>
    </>
  );
}
