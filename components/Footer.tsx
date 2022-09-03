import { AiFillGithub } from "react-icons/ai";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={`container ${styles.footerContainer}`}>
        <p>© Copyright {new Date().getFullYear()}, Anthony Liang</p>
        <a
          href="https://github.com/cyanChill/Transformio"
          target="_blank"
          rel="noreferrer"
          className={styles.iconLink}
        >
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
