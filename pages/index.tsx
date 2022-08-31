import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import UploadForm from "../components/Upload/UploadForm";
import Footer from "../components/Footer";

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

      <Hero />
      <UploadForm />
      <Footer />
    </div>
  );
};

export default Home;
