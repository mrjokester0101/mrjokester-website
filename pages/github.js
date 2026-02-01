import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <meta property="og:site_name" content="MrJokester" />
          <meta property="og:title" content="Github Repositories" />
          <meta property="og:description" content="My official website." />
          <meta property="og:url" content="https://mrjokester.vercel.app/github" />
          <title>MrJokester</title>
          <meta name="description" content="My Github repositories" />
          <meta property="og:image" content="/profile.png" />
          <link rel="icon" href="/profile.png" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>Main Page</p>
  
        <MainButtons/>
              
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>SystemTools</h2>
            <a href="https://github.com/mrjokester0101/SystemTools" className={styles.linkcard}>
              <p>Take A Look</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>Character Map</h2>
            <a href="https://github.com/mrjokester0101/Character-Map" className={styles.linkcard}>
              <p>Take A Look</p>
            </a>
          </div>
        </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
