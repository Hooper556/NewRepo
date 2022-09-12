import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Mobile.module.css";
import Header from "./topNav";
import ReactPlayer from "react-player";

export default function Mobile(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonah Wilsons Portfolio</title>
        <meta name="description" content="Jonahs portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        {/* Home Page */}
        <div id="home" className={styles.pageContainer}>
          <div className={styles.header}>
            <div className={styles.headerWrapper} style={{ color: "white" }}>
              <h1>Chemical Engineer</h1>
            </div>

            <Image
              src="/IMG_2251.jpg"
              alt="Profilepic"
              layout="intrinsic"
              width={props.width / 2}
              height={(props.width * 3) / 4}
              style={{ borderRadius: 10 }}
            />

            <div className={styles.headerWrapper} style={{ color: "white" }}>
              <h1>Coder</h1>
            </div>
          </div>

          <p className={styles.description} style={{ color: "white" }}>
            Jonah Wilson
          </p>
        </div>

        {/* Skills Page */}
        <div
          id="skills"
          className={styles.pageContainer}
          style={{ color: "white" }}
        >
          <h1 style={{ textDecoration: "underline" }}>Skills</h1>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h1 style={{ fontSize: 20 }}> React/React Native</h1>
              <p style={{ fontSize: 12 }}>
                Web/Mobile development respectively. Developed entire multipage
                app with react native and multiple small websites
              </p>
            </div>
            <div className={styles.card}>
              <h1 style={{ fontSize: 20 }}> Github/Repos</h1>
              <p style={{ fontSize: 12 }}>
                Work well with teams utilizing Github and can learn new
                repositories quickly. Also, experienced with perforce and
                firebase
              </p>
            </div>
            <div className={styles.card}>
              <h1 style={{ fontSize: 20 }}> Automated Regression Testing</h1>
              <p style={{ fontSize: 12 }}>
                Silk, Silk Classic, UFT Developer, C#
              </p>
            </div>
            <div className={styles.card}>
              <h1 style={{ fontSize: 20 }}> Elixir/Pheonix</h1>
              <p style={{ fontSize: 12 }}>
                Backend Development with Ecto, GenServer, and tests. Also,
                limited knowledge of UI development
              </p>
            </div>
          </div>
        </div>
        {/* Portfolio Page */}
        <div
          id="portfolio"
          className={styles.pageContainer}
          style={{ color: "white", height: "110vh" }}
        >
          <h1 style={{ textDecoration: "underline" }}>Portfolio</h1>

          <div className={styles.portfolio}>
            <div className="player-wrapper">
              <ReactPlayer
                url="http://www.youtube.com/watch?v=Q4cUa233YXI"
                width="100%"
                height="100%"
                className="react-player"
              />
            </div>

            <div className={styles.portfolioExamples}>
              <div>
                <h2 style={{ fontSize: 16 }}>Start - Finish</h2>
                <p style={{ fontSize: 13 }}>
                  I developed the app you see in the video from scratch using
                  React Native and Expo.
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 16 }}>Navigation</h2>
                <p style={{ fontSize: 13 }}>
                  The app has deep linking enabled with its own AASA server. It
                  also has local bottom tab navigation to switch between
                  screens.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: 16 }}>Firebase Backend</h2>
                <p style={{ fontSize: 13 }}>
                  This app uses firebase as its api for storage and data. I am
                  able to work with the modular or the namespaced version of
                  firebase
                </p>
              </div>
              <div>
                <h2 style={{ fontSize: 16 }}>Functionality</h2>
                <p style={{ fontSize: 13 }}>
                  Advanced knowledge of react hooks and CSS
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="code"
          className={styles.pageContainer}
          style={{ color: "white", height: "200vh" }}
        >
          <h1 style={{ textDecoration: "underline" }}>Code</h1>
          <div className={styles.pageContainerTwo}>
            <div className={styles.secondaryPortfolioContainer}>
              <h1 className={styles.headerEditor}>Mobile</h1>
              <a href="https://github.com/Hooper556/Portfolio-Examples/blob/7b482fc4275e95a6874317760c50a55281607c9f/Auth%20Flow">
                <div className={styles.cardTwo}>Dynamic Auth Flow</div>
              </a>
              <a href="https://github.com/Hooper556/Portfolio-Examples/blob/7b482fc4275e95a6874317760c50a55281607c9f/Concurrency">
                <div className={styles.cardTwo}>
                  Asyncronous/Syncronous Api Calls and Concurrency Problems
                </div>
              </a>
            </div>
            <div className={styles.secondaryPortfolioContainer}>
              <h1 className={styles.headerEditor}>Web</h1>
              <a href="https://github.com/Hooper556/Portfolio-Examples/blob/7b482fc4275e95a6874317760c50a55281607c9f/Callbacks%20and%20Hooks">
                <div className={styles.cardTwo}>
                  Using Callbacks and Use Effect Hooks
                </div>
              </a>
              <a href="https://github.com/Hooper556/Portfolio-Examples/blob/7b482fc4275e95a6874317760c50a55281607c9f/Routing%20and%20Linking">
                <div className={styles.cardTwo}>Routing and Linking</div>
              </a>
            </div>
            <div className={styles.secondaryPortfolioContainer}>
              <h1 className={styles.headerEditor}>Full Stack</h1>
              <a href="https://github.com/Hooper556/Portfolio-Examples/blob/2c10a813540be5c07cfe4dc7c95f47074e83aaa1/Parsing%20Data">
                <div className={styles.cardTwo}>Parsing Data</div>
              </a>
              <a href="https://github.com/Hooper556/Portfolio-Examples/blob/2c10a813540be5c07cfe4dc7c95f47074e83aaa1/Testing">
                <div className={styles.cardTwo}>Testing Database Queries</div>
              </a>
            </div>
          </div>
          <p>
            These are some great examples of hard challenges that I have
            overcome so far while learning to code.
          </p>
        </div>
      </main>

      <div id="contact" className={styles.contact} style={{ color: "white" }}>
        <h2 style={{ textDecoration: "underline" }}>Contact:</h2>
        <p>Email: Wilson.3371@buckeyemail.osu.edu || Cell: 330-398-4596</p>
      </div>
    </div>
  );
}
