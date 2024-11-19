import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() => window.location.href = 'https://mrjokester.vercel.app/'}>
          <h2>Main Page</h2>
        </button>
        <button
          className={styles.button}
          onClick={() => window.location.href = 'https://mrjokester.vercel.app/me'}>
          <h2>About Me</h2>
        </button>
        <button
          className={styles.button}
          onClick={() => window.location.href = 'https://mrjokester.vercel.app/bdfd'}>
        <h2>BDFD Snippets</h2>
      </button>
    </div>
  );
};

export default Home;
