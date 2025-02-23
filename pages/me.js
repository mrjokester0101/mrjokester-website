import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainButtons from "../components/MainButtons.js";

const Home = () => {
  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <Head>
          <title>MrJokester</title>
          <meta name="description" content="About Me" />
          <link rel="icon" href="/profile.png" />
        </Head>
        
        <main className={styles.main}>
          <h1 className={styles.title}>
             <Image className={styles.image} src="/title.png" alt="Profile Icon"/> MrJokester
          </h1>
          <p className={styles.description}>About Me</p>
          
          <MainButtons/>
          
          <div className={styles.aboutbox}>
            <div className={styles.aboutme}>
              <h2>  1. Introduction</h2>
                <p>   • Name: MrJokester</p>
                <p>   • Age: 13 years old</p>
                <p>   • Gender: Male</p>
                <p>   • Hobbies: Coding, Chatting, Playing, Learning</p>
                <p>   • Country: Bulgaria</p>
                <p>   • Job: Jobless</p>
              <h2>  2. Technical Skills</h2>
                <p>   • Beginner: Javascript, Python, CSS, HTML & Flows</p>
                <p>   • Very Good: Json & BDScript</p>
              <h2>  3. Contact Information</h2>
                <p>   • Email: mrjokester01010@gmail.com</p>
                <p>   • Discord: mrjokester0101</p>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default Home;
