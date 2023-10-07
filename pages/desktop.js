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
                Keen Betting
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

          {/* Skills Page */}
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
              Join The Betting Revolution
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
          {/* Portfolio Page */}
          <div
            id="portfolio"
            className={styles.portfolioPageContainer}
            style={{ color: "#e4dfd4" }}
          >
            <h1 style={{ textDecoration: "underline", fontSize: "50px" }}>
              Portfolio
            </h1>

            <div className={styles.portfolio}>
              <ReactPlayer url="http://www.youtube.com/watch?v=Q4cUa233YXI" />
              <div className={styles.portfolioExamples}>
                <div>
                  <h2>Start - Finish</h2>
                  <p>
                    I developed the app you see to your left from scratch using
                    React Native and Expo.
                  </p>
                </div>
                <div>
                  <h2>Navigation</h2>
                  <p>
                    The app has deep linking enabled with its own AASA server.
                    It also has local bottom tab navigation to switch between
                    screens.
                  </p>
                </div>
              </div>
              <div className={styles.portfolioExamples}>
                <div>
                  <h2>Firebase Backend</h2>
                  <p>
                    This app uses firebase as its api for storage and data. I am
                    able to work with the modular or the namespaced version of
                    firebase
                  </p>
                </div>
                <div>
                  <h2>Functionality</h2>
                  <p>Advanced knowledge of react hooks and CSS</p>
                </div>
              </div>
            </div>
            <div className={styles.portfolio}>
              <div className={styles.portfolioExamples}>
                <div>
                  <h2>UI/UX Design</h2>
                  <p>
                    I lead the UI/UX development of AspenTechs heat exchanger
                    software.
                  </p>
                </div>
                <div>
                  <h2>Integration and Analysis</h2>
                  <p>
                    The software utilizes an in house calculation engine that
                    communicates with the UI through a .vb interface. Utilizing
                    the engines responses, I determine the proper data flow to
                    achieve the desired goal.
                  </p>
                </div>
              </div>
              <div className={styles.portfolioExamples}>
                <div>
                  <h2>C# and .Net</h2>
                  <p>
                    I have advanced knowledge of events, delagates, class
                    structures and how to apply them using the .Net platform.
                  </p>
                </div>
                <div>
                  <h2>Team Oriented</h2>
                  <p>
                    I developed my skills as a team player and learned how to
                    collaborate with my teamates to reduce human error and drive
                    an increase in efficiency.
                  </p>
                </div>
              </div>
              <Image
                src="/heatexchangerpic.jpg"
                alt="Profilepic"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "776px", height: "500px", borderRadius: 10 }}
              />
            </div>
          </div>
          <div
            id="code"
            className={styles.pageContainer}
            style={{ color: "#e4dfd4" }}
          >
            <h1 style={{ textDecoration: "underline", fontSize: "50px" }}>
              Code
            </h1>
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
