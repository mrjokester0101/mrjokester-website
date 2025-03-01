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
          <meta property="og:title" content="MrJokester" />
          <meta property="og:description" content="My official website." />
          <meta property="og:url" content="https://mrjokester.vercel.app" />
          <title>Main Page</title>
          <meta name="description" content="This is where the invites of my stuff are located at." />
          <meta property="og:image" href="/profile.png" />
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
            <h2>Clarendon</h2>
            <a href="https://discord.com/oauth2/authorize?client_id=1251525661185806336" className={styles.linkcard}>
              <p>Get Invite</p>
            </a>
          </div>

          <div className={styles.card}>
            <h2>MrJokester Studios</h2>
            <a href="https://discord.com/invite/VWEcYvKztc" className={styles.linkcard}>
              <p>Get Invite</p>
            </a>
          </div>
        </div>

        </main>
      </div>
    </div>
  );
};

export default Home;
