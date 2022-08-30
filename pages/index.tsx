import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import FileDragDrop from "../components/Form/FileDragDrop";

const Home: NextPage = () => {
  const readCurrFile = (val: File) => {
    console.log("File in File Input:", val);
  };

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
      <FileDragDrop passCurrFile={readCurrFile} />
    </div>
  );
};

export default Home;
