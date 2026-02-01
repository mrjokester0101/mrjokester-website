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
              <h2>1. Introduction</h2>
                <p>Hello, I am Captain Joker . I am a 14 years old boy. I like coding, playing and learning as i go. I live in Bulgaria with my family and i am jobless.</p>
              <h2>2. Technical Skills</h2>
                <p>I am pretty good with the windows operating system. I have explored a few Linux distros, such as Mint, Arch, AntiX and Fedora. Even as far creating 2 of my own, such as arch-based and LFS with the names Veorc. </p>
                <p>I can code in BDScript very good and make pretty good JSONs. I can't create very good HTML & CSS. And I am a beginner at JavaScript, Python, Automate Flows, Windows CMD and PowerShell.
                <p>I have contributed in a few wikipedia pages. Not as this user tho, I am staying anomylous as what user I had contributed with.
              <h2>3. Disadvantages</h2>
                <p>I have schizoprenhia, social anxiety, can't explain & design very well and can't focus that good.</p> 
              <h2>3. Contact Information</h2>
                <p>You can contact me on mrjokester01010@gmail.com or with mrjokester0101 in discord</p>
            </div>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default Home;
