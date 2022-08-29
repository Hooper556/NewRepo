import Head from "next/head";
import Image from "next/image";
import { Suspense } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonah Wilson's Portfolio</title>
        <meta name="description" content="Jonah's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Home Page */}

        <div className={styles.header}>
          <div className={styles.headerWrapper}>
            <h1>Chemical Engineer</h1>
          </div>
          <Image
            src="/IMG_2251.jpg"
            alt="Profilepic"
            layout="intrinsic"
            width="300px"
            height="400px"
            style={{ borderRadius: 10 }}
          />
          <div className={styles.headerWrapper}>
            <h1>Coder</h1>
          </div>
        </div>

        <p className={styles.description}>Hello! My name is Jonah Wilson</p>

        {/* Skills Page */}

        <h1>Skills</h1>
        <div className={styles.grid}>
          <p className={styles.card}>
            <h1> React/React Native</h1>
            Web/Mobile development respectively. Developed entire multipage app
            with react native and multiple small websites
          </p>
          <p className={styles.card}>
            <h1> Github/Repos</h1>
            Work well with teams utilizing Github and can learn new repositories
            quickly. Also, experienced with perforce and firebase
          </p>
          <p className={styles.card}>
            <h1> Automated Regression Testing</h1>
            Silk, Silk Classic, UFT Developer, C#
          </p>
          <p className={styles.card}>
            <h1> Elixir/Pheonix</h1>
            Backend Development with Ecto, GenServer, and tests. Also, limited
            knowledge of UI development
          </p>
        </div>

        {/* Portfolio Page */}

        <h1>Portfolio</h1>

        <p>Video of fitnessinc with examples of big challenges overcame</p>

        {/* <Suspense>
          <video autoPlay style={{ width: "500px", height: "500px" }}>
            <source src="/FitnessInc Portfolio vid.mov" />
          </video>
        </Suspense> */}
      </main>

      <div>
        <h2>Contact:</h2>
        <p>Email: Wilson.3371@buckeyemail.osu.edu || Cell: 330-398-4596</p>
      </div>
    </div>
  );
}
