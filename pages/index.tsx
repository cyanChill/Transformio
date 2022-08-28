import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Transformio</title>
        <meta
          name="description"
          content="Convert your files to more efficient formats!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Transformio</h1>
    </div>
  );
};

export default Home;
